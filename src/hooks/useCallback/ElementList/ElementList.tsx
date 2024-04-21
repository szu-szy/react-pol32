// Stwórz komponent "ListaElementów", który renderuje listę elementów.
// Wykorzystaj hook useCallback do zdefiniowania funkcji obsługującej kliknięcie na każdy element listy,
// aby uniknąć ponownego tworzenia funkcji przy każdym renderowaniu komponentu.

import { useCallback, useEffect, useState } from "react";

export const ElementList = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    console.log("rerender element list");
  }, [handleClick]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Klik + 1</button>
    </>
  );
};
