import { ProductStatus, Products } from "../../../types";
import { useGlobalContext } from "../../../context";

export const useProductActions = (
  product: Products,
  addToCart: Function,
  updateProductStatus: Function,
  state: ProductStatus
) => {
  const { showToast } = useGlobalContext();

  const handleAddToCart = (newState: ProductStatus) => {
    if (state === ProductStatus.ADDED || state === ProductStatus.BOUGHT) {
      showToast("Error: Product is already in the cart!", "error");
      return;
    }
    showToast("added to cart", "success");
    addToCart(product);
    updateProductStatus(product.id, newState);
  };

  return { handleAddToCart };
};
