import './Checkout.css'
import { useState, useEffect, useRef } from "react";
import { useCart } from "../../context/CartContext";
import confetti from "canvas-confetti";
import { saveOrder } from "../../utils/OrderUtils";
import successSound from "../../Assets/success.mp3.wav";
import CheckoutForm from "./Components/CheckoutForm";
import OrderSummary from "./Components/OrderSummary";
import PaymentSection from "./Components/PaymentSection";
import { DISCOUNT_CODES } from "./Data/discountCodes";
import ShippingSection from "./Components/ShippingSection";
import { ShippingOptions }from "../../Data/ShippingOptions";
import { useCheckoutForm } from "./Hooks/useCheckoutForm";
import { createOrder } from "./Services/orderService";
import GatewayModal from "./Components/GatewayModal";
import SuccessModal from "./Components/SuccessModal";
import CheckoutButton from "./Components/CheckoutButton";
import SuccessAudio from "./Components/SuccessAudio";
import Toast from "./Components/Toast";
import CartError from "./Components/CartError";
// import { createMyOrderData } from "./Utils/orderHelpers";
import {
    calculateSubtotal,
    calculateTax,
    calculateDiscount,
    calculateGrandTotal,
    calculateShipping,
} from "./Utils/calculations";

import { validateForm } from "./Utils/validation";

function Checkout() {
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState("");
    const [discountCode, setDiscountCode] = useState("");
    const [appliedDiscount, setAppliedDiscount] = useState(null);
    const [discountError, setDiscountError] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [orderData, setOrderData] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState("idle");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [onlineMethod, setOnlineMethod] = useState("");
    const [openOnline, setOpenOnline] = useState(false);
    const { cart, clearCart } = useCart();
    const successAudioRef = useRef(null);
    const [showGateway, setShowGateway] = useState(false);
    const [selectedShipping, setSelectedShipping] = useState(
        shippingOptions[0]
    );
    const {
        form,
        errors,
        setErrors,
        handleChange,
        handleBlur,
        handlePincodeChange,
    } = useCheckoutForm();

    const fieldOrder = [
        "email",
        "firstName",
        "address",
        "city",
        "pinCode",
        "phone",
    ];

    const scrollToError = (errorsObj) => {
        const firstErrorField = fieldOrder.find(
            (field) => errorsObj[field]
        );

        if (!firstErrorField) return;

        const element = document.getElementById(firstErrorField);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });

            setTimeout(() => {
                element.focus();
            }, 300);
        }
    };


    const subtotal = calculateSubtotal(cart);

    const shippingFinal =
        calculateShipping(
            selectedShipping,
            appliedDiscount
        );

    const tax = calculateTax(subtotal);

    const discountAmount =
        calculateDiscount(
            subtotal,
            appliedDiscount
        );

    const grandTotal =
        calculateGrandTotal({
            subtotal,
            shipping: shippingFinal,
            tax,
            discount: discountAmount,
        });


    useEffect(() => {
        if (showSuccess) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showSuccess]);

    useEffect(() => {
        if (showSuccess) {
            const el = document.querySelector(".items");
            if (el) {
                el.scrollTop = 0;
            }
        }
    }, [showSuccess]);




    const handleApplyDiscount = () => {
        const code = discountCode.trim().toUpperCase();

        if (!DISCOUNT_CODES[code]) {
            setDiscountError("Invalid code");
            setAppliedDiscount(null);
            return;
        }

        setAppliedDiscount({ code, ...DISCOUNT_CODES[code] });
        setDiscountError("");
    };

    const handlePayment = async () => {
        if (!cart || cart.length === 0) {
            setErrors((prev) => ({
                ...prev,
                cart: "Oops! Your shopping bag feels a bit light! Add an item to continue."
            }));
            return;
        }

        setErrors((prev) => ({
            ...prev,
            cart: ""
        }));

        const validationErrors = validateForm(form);

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            scrollToError(validationErrors);
            return;
        }

        if (!paymentMethod) {
            setToast("Please select payment method");
            setTimeout(() => setToast(""), 3000);
            return;
        }

        if (paymentMethod === "online" && !onlineMethod) {
            setToast("Please select an online payment method");
            setTimeout(() => setToast(""), 3000);
            return;
        }

        if (paymentMethod === "online") {
            setShowGateway(true);
            setPaymentStatus("waiting");
            return;
        }

        handleFinalOrder();
    };

    const handleFinalOrder = async () => {
        setLoading(true);

        try {
            const order = await createOrder({
                form,
                cart,
                grandTotal,
                paymentMethod,
                shippingFinal,
                selectedShipping,
                subtotal,
                tax,
                discountAmount,
                appliedDiscount,
                onlineMethod,
            });



            setOrderData(order);

            saveOrder(order);

            clearCart();

            localStorage.removeItem("checkoutForm");

            setShowSuccess(true);

            if (successAudioRef.current) {
                successAudioRef.current.currentTime = 0;
                successAudioRef.current.play().catch((err) => {
                    console.log(err);
                });
            }

            confetti({
                particleCount: 120,
                spread: 80,
                startVelocity: 35,
                gravity: 0.8,
                origin: { y: 0.6 },
                zIndex: 9999
            });

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };


    return (


        <>
            <Toast toast={toast} />

            <SuccessAudio
                successAudioRef={successAudioRef}
                successSound={successSound}
            />

            <div className="checkout-container">

                {/* LEFT SIDE */}
                <div className="checkout-left">

                    <CheckoutForm
                        form={form}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        handlePincodeChange={handlePincodeChange}
                    />

                    <ShippingSection
                        selectedShipping={selectedShipping}
                        setSelectedShipping={setSelectedShipping}
                    />

                    <PaymentSection
                        paymentMethod={paymentMethod}
                        setPaymentMethod={setPaymentMethod}
                        onlineMethod={onlineMethod}
                        setOnlineMethod={setOnlineMethod}
                        openOnline={openOnline}
                        setOpenOnline={setOpenOnline}
                    />

                    <CheckoutButton
                        cart={cart}
                        loading={loading}
                        paymentMethod={paymentMethod}
                        handlePayment={handlePayment}
                    />

                    <CartError error={errors.cart} />

                </div>

                <div className="checkout-right">

                    <OrderSummary
                        cart={cart}
                        discountCode={discountCode}
                        setDiscountCode={setDiscountCode}
                        handleApplyDiscount={handleApplyDiscount}
                        appliedDiscount={appliedDiscount}
                        discountError={discountError}
                        subtotal={subtotal}
                        shippingFinal={shippingFinal}
                        tax={tax}
                        discountAmount={discountAmount}
                        grandTotal={grandTotal}
                    />

                </div>
            </div>

            <GatewayModal
                showGateway={showGateway}
                onlineMethod={onlineMethod}
                grandTotal={grandTotal}
                paymentStatus={paymentStatus}
                setPaymentStatus={setPaymentStatus}
                setShowGateway={setShowGateway}
                handleFinalOrder={handleFinalOrder}
            />

            <SuccessModal
                showSuccess={showSuccess}
                setShowSuccess={setShowSuccess}
                orderData={orderData}
            />
        </>
    );
}

export default Checkout;
