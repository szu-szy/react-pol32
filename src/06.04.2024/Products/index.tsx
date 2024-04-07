import { useEffect, useState } from "react";

type Product = {
  id: string;
  title: string;
};

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const { products } = await res.json();
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista produktów</h2>
      {products.length > 0 && (
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
