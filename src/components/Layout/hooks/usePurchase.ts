import React from "react";
import { useGlobalContext } from "../../../context";
import { asyncApiDelay } from "../../../utils";
import { ProductStatus, Products } from "../../../types";

export const usePurchase = (
  cart: Products[],
  clearCart: () => void,
  toggleSidebar: () => void
) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { updateProductState, showToast } = useGlobalContext();

  const handlePurchase = async () => {
    setLoading(true);
    try {
      await asyncApiDelay();
      setLoading(false);
      toggleSidebar();
      cart.forEach((product) => {
        updateProductState(product.id, ProductStatus.BOUGHT);
      });

      clearCart();
      showToast("Purchase successful!", "success");
    } catch (error) {
      setLoading(false);
      toggleSidebar();
      showToast("Purchase failed. Please try again.", "error");
    }
  };

  return { handlePurchase, loading };
};
