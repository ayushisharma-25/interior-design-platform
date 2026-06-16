import { BrowserRouter } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CartProvider } from "./Context/CartContext";
import AppProvider from "./context/AppContext";
import AppContent from "./layout/AppContent";

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