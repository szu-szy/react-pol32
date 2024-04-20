import { ChangeEvent, useState } from "react";

export const InputForm = () => {
  const [inputState, setInputState] = useState("");

  // I opcja na obsługe onChange - utworzonie handlera i przekazanie referencji do onChange={handleValue}
  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    // co mozemy wyciagnac z obiektu event
    const { value } = event.target;
    setInputState(value);
  };

  return (
    <>
      <label htmlFor="input-id">
        Treść inputa:
        <input
          id="input-id"
          name="input-name"
          value={inputState}
          // II opcja - obsługa event onChange bezposrednio przy uzyciu funkcji anonimowej (callback)
          onChange={(e) => setInputState(e.target.value)}
        />
      </label>
      {/* jeżeli to jest true && to wypisz mi to */}
      {/* jeżeli nie to || to drugie */}
      {/* albo to albo to - na bazie warunku */}
      {/* ternery operator - condition ? true: false */}
      <p>
        {/* !(inputState.length === 0) */}
        {inputState.length > 0
          ? `dlugość input: ${inputState.length}`
          : "Input jest pusty"}
      </p>
      {/* ?? - sprawdza czy zapis po lewej stronie jest undefined lub null */}
      <p>cos tam {"tekst" ?? "Tak jest"}</p>
      {/* podobny przypadek do object?.name */}
    </>
  );
};
