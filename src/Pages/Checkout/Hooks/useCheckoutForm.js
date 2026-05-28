import { useState, useEffect } from "react";

export const useCheckoutForm = () => {

    const [form, setForm] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        pinCode: "",
        phone: ""
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        localStorage.setItem("checkoutForm", JSON.stringify(form));
    }, [form]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("checkoutForm"));

        if (saved) {
            setForm(saved);
        }
    }, []);

    const handleChange = (e) => {

        let { name, value } = e.target;

        if (name === "firstName" || name === "lastName") {
            value = value.replace(/[^a-zA-Z\s]/g, "");
        }

        if (name === "phone") {
            value = value.replace(/\D/g, "").slice(0, 10);
        }

        if (name === "city") {
            value = value.replace(/[^a-zA-Z\s]/g, "");
        }

        if (name === "pinCode") {
            value = value.replace(/\D/g, "").slice(0, 6);
        }

        if (name === "firstName" || name === "city") {
            value =
                value.charAt(0).toUpperCase() +
                value.slice(1);
        }

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));

        setErrors((prev) => {

            let error = "";

            switch (name) {

                case "email":
                    if (!value)
                        error = "*Email is required";
                    else if (!/^\S+@\S+\.\S+$/.test(value))
                        error = "*Invalid email";
                    break;

                case "firstName":
                    if (!value.trim())
                        error = "*Name is required";
                    break;

                case "address":
                    if (!value.trim())
                        error = "*Address required";
                    break;

                case "city":
                    if (!value.trim())
                        error = "*City is required";
                    break;

                case "phone":
                    if (!/^[6-9]\d{9}$/.test(value))
                        error = "*Invalid phone";
                    break;

                case "pinCode":
                    if (!/^\d{6}$/.test(value))
                        error = "*PIN must be 6 digits";
                    break;

                default:
                    break;
            }

            return {
                ...prev,
                [name]: error
            };
        });
    };

    const handleBlur = (e) => {

        const { name, value } = e.target;

        let error = "";

        if (
            name === "email" &&
            !/^\S+@\S+\.\S+$/.test(value)
        ) {
            error = "*Invalid email";
        }

        if (
            name === "phone" &&
            !/^[6-9]\d{9}$/.test(value)
        ) {
            error = "*Invalid phone";
        }

        setErrors((prev) => ({
            ...prev,
            [name]: error || prev[name]
        }));
    };

    const handlePincodeChange = async (e) => {

        let pin = e.target.value
            .replace(/\D/g, "")
            .slice(0, 6);

        setForm((prev) => ({
            ...prev,
            pinCode: pin
        }));

        if (pin.length === 6) {

            try {

                const res = await fetch(
                    `https://api.postalpincode.in/pincode/${pin}`
                );

                const data = await res.json();

                if (
                    data[0]?.Status === "Success" &&
                    data[0]?.PostOffice?.length > 0
                ) {

                    const office =
                        data[0].PostOffice[0];

                    setForm((prev) => ({
                        ...prev,
                        city: office.District,
                        state: office.State,
                        pinCode: pin
                    }));

                } else {

                    setErrors((prev) => ({
                        ...prev,
                        pinCode: "*Invalid PIN code"
                    }));
                }

            } catch (error) {
                console.log(error);
            }
        }
    };

    return {
        form,
        setForm,
        errors,
        setErrors,
        handleChange,
        handleBlur,
        handlePincodeChange
    };
};