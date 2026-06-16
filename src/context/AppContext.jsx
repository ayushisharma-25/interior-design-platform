import { createContext, useState } from "react";
export const AppContext = createContext();

function AppProvider({ children }) {

    const [wishlistOpen, setWishlistOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState("");

    return (
        <AppContext.Provider
            value={{
                wishlistOpen,
                setWishlistOpen,
                showToast,
                setShowToast,
                toastMsg,
                setToastMsg,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;