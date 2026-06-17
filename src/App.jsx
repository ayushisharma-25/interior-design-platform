import { BrowserRouter } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CartProvider } from "./context/CartContext";
import AppProvider from "./context/AppContext";
import AppContent from "./Layout/AppContent";

function App() {

  return (
    <CartProvider>
      <AppProvider>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </DndProvider>
      </AppProvider>
    </CartProvider>
  );
}

export default App;