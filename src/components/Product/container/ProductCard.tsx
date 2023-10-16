import React from "react";
import "../styles/style.scss";
import { ProductImage } from "../components";
import { useProductActions } from "../hooks";
import { ProductCardProps, ProductStatus } from "../../../types";

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  addToCart,
  state,
  updateProductState,
}) => {
  const { handleAddToCart } = useProductActions(
    product,
    addToCart,
    updateProductState,
    state
  );

  return (
    <div className="product-card">
      {product?.images?.[0] && (
        <ProductImage src={product.images[0]} alt={product.title} />
      )}
      <div className="product-name">{product.title}</div>
      <div className="product-price">${product.price.toFixed(2)}</div>
      <div className="product-description">{product.description}</div>
      <div className={`product-state ${state}`}>Status: {state}</div>
      {state === ProductStatus.NORMAL && (
        <button
          className="btn-add"
          onClick={() => handleAddToCart(ProductStatus.ADDED)}
        >
          add to Cart
        </button>
      )}
      {state === ProductStatus.ADDED && (
        <button
          className="btn-add success"
          onClick={() => handleAddToCart(ProductStatus.ADDED)}
        >
          added to Cart
        </button>
      )}
      {state === ProductStatus.BOUGHT && (
        <button
          className="btn-add info"
          onClick={() => handleAddToCart(ProductStatus.BOUGHT)}
        >
          this item is added before
        </button>
      )}
    </div>
  );
};
