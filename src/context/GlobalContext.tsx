import React, { createContext, useContext } from "react";
import { useCrudCart, useToast } from "../hooks";
import { Toaster } from "../components";
import { GlobalContextProps } from "../types";

export const GlobalContext = createContext<GlobalContextProps | undefined>({
  cart: [],
  productStatus: {},
  updateProductState: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  updateProductQuantity: () => {},
  showToast: () => {},
});

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

type Props = {
  children: React.ReactElement;
};

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const { toastMessage, toastType, showToast } = useToast();
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    updateProductQuantity,
    updateProductState,
    productStatus,
  } = useCrudCart(showToast);

  return (
    <GlobalContext.Provider
      value={{
        cart,
        addToCart,
        showToast,
        removeFromCart,
        clearCart,
        updateProductQuantity,
        productStatus,
        updateProductState,
      }}
    >
      {children}
      {toastMessage && <Toaster message={toastMessage} type={toastType} />}
    </GlobalContext.Provider>
  );
};
