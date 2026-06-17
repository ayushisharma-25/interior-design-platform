import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Pages/ScrollToTop/ScrollToTop";
import CartDrawer from "../Components/CartDrawer/CartDrawer";
import PageWrapper from "../Components/PageTransition/PageWrapper";
import FloatingSocial from "../Pages/Floating/FloatingSocial";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Toast from "../Components/Toast/Toast";
import CouponToast from "../Components/CouponToast/CouponToast";
import { ToastContainer } from "react-toastify";
import AppRoutes from "../Routes/AppRoutes";

function AppContent() {

  const location = useLocation();
  const {
    wishlistOpen,
    setWishlistOpen,
    showToast,
    setShowToast,
    toastMsg,
  } = useContext(AppContext);

  return (
    <>
      <Navbar
        openWishlist={() => setWishlistOpen(true)}
      />
      <ScrollToTop />
      <CartDrawer />
      <PageWrapper key={location.pathname}>

        <AppRoutes />

      </PageWrapper>
      <Wishlist
        isOpen={wishlistOpen}
        setIsOpen={setWishlistOpen}
      />
      <FloatingSocial />
      <Toast
        show={showToast}
        setShow={setShowToast}
        openWishlist={setWishlistOpen}
        message={toastMsg}
      />
      <CouponToast />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </>
  );
}

export default AppContent;