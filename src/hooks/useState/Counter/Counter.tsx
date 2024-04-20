import { useState } from "react";

// 1. Stwórz prosty licznik, który będzie zwiększał liczbę o 1 za każdym razem, gdy użytkownik kliknie przycisk.
export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Stan licznika: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Dodaj +1</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Odejmij -1</button>
    </>
  );
};
