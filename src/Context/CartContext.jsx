import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const [isOpen, setIsOpen] = useState(false);


  const addToCart = (product, options = {}) => {
    const { openCart = true } = options;

    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, {
        id: product.id,
        title: product.name || product.title,
        image: product.img || product.image,
        price: product.price,
        qty: 1,
      },];
    });

    if (openCart) {
      setIsOpen(true);
    }
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, type) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            if (type === "inc") {
              return { ...item, qty: item.qty + 1 };
            } else {
              return { ...item, qty: item.qty - 1 };
            }
          }
          return item;
        })
        .filter((item) => item.qty > 0)
    );
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeItem,
        updateQty,
        total,
        isOpen,
        setIsOpen,
        clearCart 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

