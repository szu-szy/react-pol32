// Obliczanie wyniku: Utwórz komponent, który oblicza i wyświetla wynik złożonej operacji matematycznej
// (na przykład suma lub iloczyn) na podstawie dwóch liczb wprowadzonych przez użytkownika.
// Wykorzystaj hook useMemo do zapamiętania wyniku operacji i unikania ponownego obliczania go przy każdej zmianie stanu.

import { useMemo, useState } from "react";
const MathOperation = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  const sum = useMemo(() => {
    console.log("Obliczanie sumy...");
    return number + number2;
  }, [number, number2]);

  const handleNumber1 = (event: any) => {
    setNumber(event.target.value);
  };

  const handleNumber2 = (event: any) => {
    setNumber2(event.target.value);
  };

  return (
    <>
      <h1>Wynik to: {sum}</h1>
      <br />
      <label>
        <p>Podaj pierwsza liczbe</p>
        <input type="number" value={number} onChange={handleNumber1} />
      </label>
      <label>
        <p>podaj druga liczbe</p>
        <input type="number" value={number2} onChange={handleNumber2} />
      </label>
    </>
  );
};
export default MathOperation;
