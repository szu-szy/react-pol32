// Utwórz formularz, który zawiera pole tekstowe i przycisk "Wyślij".
// Zastosuj hook useCallback do zdefiniowania funkcji obsługującej wysłanie formularza,
// aby uniknąć ponownego tworzenia funkcji podczas ponownego renderowania komponentu.

import { FormEvent, useCallback, useEffect, useState } from "react";

export const Form = () => {
  const [text, setText] = useState("");

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit form");
  }, []);

  useEffect(() => {
    console.log("utworzenie nowej referencji funkcji handleSubmit");
  }, [handleSubmit]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Wyślij</button>
    </form>
  );
};
