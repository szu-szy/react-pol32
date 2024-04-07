import { ChangeEvent, FormEvent, useEffect, useState } from "react";

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  brand: string;
};

type ProductForm = Omit<Product, "id">;

export const Products = () => {
  const [formState, setFormState] = useState<ProductForm>({
    title: "",
    description: "",
    price: 0,
    brand: "",
  });
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

  const postData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const product = await res.json();
      setProducts((prev) => [...prev, product]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista produktów</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Tytuł:{" "}
          <input
            type="text"
            id="title"
            name="title"
            value={formState.title}
            onChange={handleFormInput}
          />
        </label>
        <label htmlFor="description">
          Opis:{" "}
          <input
            type="text"
            id="description"
            name="description"
            value={formState.description}
            onChange={handleFormInput}
          />
        </label>
        <label htmlFor="price">
          Cena:{" "}
          <input
            type="number"
            id="price"
            name="price"
            value={formState.price}
            onChange={handleFormInput}
          />
        </label>
        <label htmlFor="brand">
          Marka:{" "}
          <input
            type="text"
            id="brand"
            name="brand"
            value={formState.brand}
            onChange={handleFormInput}
          />
        </label>
        <button type="submit">Dodaj</button>
      </form>
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
