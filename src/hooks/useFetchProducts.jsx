import { useEffect, useState } from "react";
import { LoadProductsUseCase } from "../usecases/load-products.usecase";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await LoadProductsUseCase.execute();
        setProducts(products);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchProducts();
  }, []);

  return products;
};
