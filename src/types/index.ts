
export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: Category;
  quantity?: number;
};

export type Category = {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
};

export type ToasterType = "success" | "error" | "info" | "warning" | null;

export interface ToasterProps {
  message: string;
  type: ToasterType;
}

export interface GlobalContextProps {
  cart: Products[];
  productStatus: Record<number, ProductStatus>;
  updateProductState: (productId: number, state: ProductStatus) => void;
  addToCart: (product: Products) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  updateProductQuantity: (productId: number, quantity: number) => void;
  showToast: (
    message: string,
    type: "success" | "error" | "info" | "warning"
  ) => void;
}

export interface UseProductsProps {
  offset?: number;
  limit?: number;
}

export interface LoaderProps {
  size?: number; // Size of the loader in pixels
  color?: string; // Color of the loader
}

export enum ProductStatus {
    NORMAL = "normal",
    ADDED = "added",
    BOUGHT = "bought"
}

export interface ProductCardProps {
    product: Products;
    updateProductState: (productId: number, state: ProductStatus) => void;
    addToCart: (product: Products) => void;
    state: ProductStatus;
}
