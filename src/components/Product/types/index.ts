import { Products } from "../../../types";

export enum ProductStatus {
    NORMAL = "normal",
    ADDED = "added",
    BOUGHT = "bought"
}

export interface ProductCardProps {
    product: Products;
    updateProductState: (productId: number, state: ProductStatus) => void;
    onAddToCart: (product: Products) => void;
    state: ProductStatus;
}