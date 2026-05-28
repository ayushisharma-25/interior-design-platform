import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Contact from "../Pages/Contact/Contact";
import More from "../Pages/Home/More";
import Farmhouse from "../Pages/Portfolio/Farmhouse";
import Hospitality from "../Pages/Portfolio/Hospitality";
import Apartment from "../Pages/Portfolio/Apartment";
import Office from "../Pages/Portfolio/Office";
import FloatingSocial from "../Pages/Floating/FloatingSocial";
import Wishlist from "../Pages/Wishlist/Wishlist";
import ScrollToTop from "../Pages/ScrollToTop/ScrollToTop";
import Checkout from "../Pages/Checkout/Checkout";
import MyOrders from "../Pages/MyOrders/MyOrders";
import OrderDetails from "../Pages/OrderDetails/OrderDetails";
import PageWrapper from "../components/PageTransition/PageWrapper";
import Project from "../Pages/FarmhouseProjects/Project1";
import Project2 from "../Pages/FarmhouseProjects/Project2";
import Project3 from "../Pages/FarmhouseProjects/Project3";
import Project4 from "../Pages/FarmhouseProjects/Project4";
import Project5 from "../Pages/FarmhouseProjects/Project5";
import Project6 from "../Pages/FarmhouseProjects/Project6";
import Project11 from "../Pages/ApartmentProjects/Project11";
import Project12 from "../Pages/ApartmentProjects/Project12";
import Project13 from "../Pages/ApartmentProjects/Project13";
import Project21 from "../Pages/HospitalityProjects/Project21";
import OrderHistory from "../Pages/OrderHistory";
import AdminPanel from "../Pages/AdminPanel";
import Toast from "../Components/Toast/Toast";
import CouponToast from "../Components/CouponToast/CouponToast";
import CartDrawer from "../Components/CartDrawer/CartDrawer";
import { ToastContainer } from "react-toastify";

function AppContent({
  wishlistOpen,
  setWishlistOpen,
  showToast,
  setShowToast,
  toastMsg,
  setToastMsg,
}) {

  const location = useLocation();

  return (
    <>
      <Navbar openWishlist={() => setWishlistOpen(true)} />
      <ScrollToTop />
      <CartDrawer />
      <PageWrapper key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <About
                triggerToast={(msg) => {
                  setToastMsg(msg);
                  setShowToast(true);
                }}
              />
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/more" element={<More />} />
          <Route path="/farmhouse" element={<Farmhouse />} />
          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/office" element={<Office />} />
          <Route path="/apartment" element={<Apartment />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/order/:orderId" element={<OrderDetails />} />
          <Route path="/project1" element={<Project />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/project5" element={<Project5 />} />
          <Route path="/project6" element={<Project6 />} />
          <Route path="/project11" element={<Project11 />} />
          <Route path="/project12" element={<Project12 />} />
          <Route path="/project13" element={<Project13 />} />
          <Route path="/project21" element={<Project21 />} />
        </Routes>
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