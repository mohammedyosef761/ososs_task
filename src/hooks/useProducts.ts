import { useState, useEffect } from "react";
import { fetchInstance, ENDPOINTS } from "../api";
import { Products, UseProductsProps } from "../types";
import { useGlobalContext } from "../context/GlobalContext";

export const useProducts = ({ offset = 0, limit = 10 }: UseProductsProps) => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { showToast } = useGlobalContext();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetchInstance(ENDPOINTS.PRODUCTS, {
          offset,
          limit,
        });
        setProducts(response);
      } catch (err) {
        setError((err as Error).message);
        showToast("Failed to fetch products!", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [offset, limit, showToast]);

  return { products, loading, error };
};
