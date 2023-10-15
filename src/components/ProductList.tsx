import React from "react";
import { ProductCard } from "./Product";
import { ProductStatus } from "./Product/types";
import { useGlobalContext } from "../context";
import { Products } from "../types";

type Props = {
  products: Products[];
  loading: boolean;
};
export const ProductList: React.FC<Props> = ({ products, loading }) => {
  const { addToCart, productStatus, updateProductState } = useGlobalContext();
  return (
    <div className="grid-container">
      {products?.length === 0 && !loading && <p>There is no products</p>}
      {products?.map((product) => (
        <div key={product.id}>
          <ProductCard
            product={product}
            onAddToCart={addToCart}
            updateProductState={updateProductState}
            state={productStatus[product.id] || ProductStatus.NORMAL}
          />
        </div>
      ))}
    </div>
  );
};
