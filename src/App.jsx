import { useState } from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CartProvider } from "./context/CartContext";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import AppContent from "./Layout/AppContent";

function App() {
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  return (
    <CartProvider>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <AppContent
            wishlistOpen={wishlistOpen}
            setWishlistOpen={setWishlistOpen}
            showToast={showToast}
            setShowToast={setShowToast}
            toastMsg={toastMsg}
            setToastMsg={setToastMsg}
          />
        </BrowserRouter>
      </DndProvider>
    </CartProvider>
  );
}

export default App;