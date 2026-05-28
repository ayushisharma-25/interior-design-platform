import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ThemeProvider from "./context/ThemeContext";
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <StrictMode>
      {/* <ThemeProvider> */}
        <App />
      {/* </ThemeProvider> */}
    </StrictMode>
  </CartProvider>
)
