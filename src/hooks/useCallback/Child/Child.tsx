import { useEffect } from "react";

type Props = {
  increment: () => void;
};

export const Child = ({ increment }: Props) => {
  useEffect(() => {
    console.log("Dziecko zostało zrenderowane ponownie.");
  }, [increment]);

  return (
    <>
      <p>Child component</p>
      <button onClick={increment}>
        Kliknij, aby zwiększyć liczbę kliknięć
      </button>
    </>
  );
};
