import React from "react";
import { Products } from "../types";

type CartItemProps = {
  product: Products;
  handleQuantityChange: (product: Products, change: number) => void;
  removeFromCart: (id: number) => void;
};

export const CartItem: React.FC<CartItemProps> = ({
  product,
  handleQuantityChange,
  removeFromCart,
}) => {
  return (
    <div key={product.id} className="cartItems">
      <div className="cartItems_details">
        <span>{product.title}</span>
        <span>${product.price.toFixed(2)}</span>
        <button onClick={() => handleQuantityChange(product, -1)}>-</button>
        <span>{product?.quantity || 1}</span>
        <button onClick={() => handleQuantityChange(product, 1)}>+</button>
      </div>
        <button className="danger"  onClick={() => removeFromCart(product.id)}>
          delete
        </button>
    </div>
  );
};
