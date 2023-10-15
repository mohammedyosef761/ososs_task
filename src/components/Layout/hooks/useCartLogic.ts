import { useGlobalContext } from "../../../context";
import { Products } from "../../../types";

export const useCartLogic = () => {
  const { cart, removeFromCart, clearCart, updateProductQuantity } =
    useGlobalContext();

  const handleQuantityChange = (product: Products, change: number) => {
    const newQuantity = (product?.quantity || 1) + change;
    if (newQuantity <= 0) {
      removeFromCart(product.id);
    } else {
      updateProductQuantity(product.id, newQuantity);
    }
  };

  const total = cart.reduce(
    (acc, product) => acc + product.price * (product.quantity || 1),
    0
  );

  return { cart, clearCart, handleQuantityChange, removeFromCart, total };
};
