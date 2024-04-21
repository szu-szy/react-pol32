// Focus na polu tekstowym: Utwórz formularz, który zawiera pole tekstowe.
// Użyj hooka useRef, aby ustawić fokus na polu tekstowym po załadowaniu komponentu.

import { useEffect, useRef } from "react";

export const InputRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <>
      <button onClick={() => inputRef.current?.focus()}>Focus input</button>
      <form>
        <input type="text" placeholder="firstName" ref={inputRef} />
        <button type="submit">Utwórz</button>
      </form>
    </>
  );
};
