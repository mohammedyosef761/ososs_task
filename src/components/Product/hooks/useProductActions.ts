import { ProductStatus } from "../types";
import { Products } from "../../../types";
import { useGlobalContext } from "../../../context";

export const useProductActions = (
  product: Products,
  onAddToCart: Function,
  updateProductStatus: Function,
  state: ProductStatus
) => {
  const { showToast } = useGlobalContext();

  const handleAddToCart = (newState: ProductStatus) => {
    if (state === ProductStatus.ADDED) {
      showToast("Error: Product is already in the cart!", "error");
      return;
    }
    showToast("added to cart", "success");
    onAddToCart(product);
    updateProductStatus(product.id, newState);
  };

  return { handleAddToCart };
};
