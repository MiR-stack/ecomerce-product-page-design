import { useState } from "react";

const useCart = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([product, ...products]);
  };

  const removeProduct = (id) => {
    const Products = products.filter((product) => product.orderId !== id);
    setProducts(Products);
  };

  return { products, addProduct, removeProduct };
};

export default useCart;
