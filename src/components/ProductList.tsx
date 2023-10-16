import React from "react";
import { ProductCard } from "./Product";
import { useGlobalContext } from "../context";
import { ProductStatus, Products } from "../types";

type Props = {
  products: Products[];
  loading: boolean;
};
export const ProductList: React.FC<Props> = React.memo(
  ({ products, loading }) => {
    const { addToCart, productStatus, updateProductState } = useGlobalContext();
    return (
      <>
        {products?.length === 0 && !loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
             
            }}
          >
            {" "}
            <h1>there is no products</h1>{" "}
          </div>
        )}
      <div className="grid-system">
        {products?.map((product) => (
          <div key={product.id}>
            <ProductCard
              product={product}
              addToCart={addToCart}
              updateProductState={updateProductState}
              state={productStatus[product.id] || ProductStatus.NORMAL}
            />
          </div>
        ))}
      </div>
      
      </>
    );
  }
);
