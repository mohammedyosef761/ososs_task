import { useState, useCallback } from "react";
import { ProductStatus, Products } from "../types";

export const useCrudCart = (showToast: Function) => {
  const [cart, setCart] = useState<Products[]>([]);

  const [productStatus, setproductStatus] = useState<
    Record<number, ProductStatus>
  >({});

  const updateProductState = useCallback(
    (productId: number, state: ProductStatus) => {
      setproductStatus((prevStates) => ({
        ...prevStates,
        [productId]: state,
      }));
    },
    []
  );

  const addToCart = useCallback(
    (product: Products) => {
      if (!cart.some((p) => p.id === product.id)) {
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
        showToast("added item to the cart is successs!", "success");
      } else {
        showToast("Product is exist in your cart!", "error");
      }
    },
    [showToast, cart]
  );

  const removeFromCart = useCallback(
    (productId: number) => {
      setCart((prevCart) =>
        prevCart.filter((product) => product.id !== productId)
      );
      updateProductState(productId, ProductStatus.NORMAL);
      showToast("item is removed from your cart!", "success");
    },
    [showToast, updateProductState]
  );

  const clearCart = useCallback(() => {
    cart.forEach((product) => {
      updateProductState(product.id, ProductStatus.BOUGHT);
    });
    setCart([]);
  }, [cart, updateProductState]);

  const updateProductQuantity = useCallback(
    (productId: number, quantity: number) => {
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === productId ? { ...product, quantity } : product
        )
      );
    },
    []
  );

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    updateProductQuantity,
    productStatus,
    updateProductState,
  };
};
