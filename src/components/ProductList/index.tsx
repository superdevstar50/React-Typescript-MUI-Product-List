import React, { useState, useCallback } from "react";

import Toolbar from "./Toolbar";
import List from "./List";

import { Product } from "../../interfaces/product";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleDelete = useCallback((id: number) => {
    setProducts((products) => products.filter((product) => product.id !== id));
  }, []);

  const handleSubmit = useCallback((product: Product) => {
    setProducts((products) => [...products, product]);
  }, []);

  return (
    <div>
      <Toolbar onSubmit={handleSubmit} />

      <List handleDelete={handleDelete} products={products} />
    </div>
  );
};

export default ProductList;
