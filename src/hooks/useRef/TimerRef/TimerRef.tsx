// Wyświetlanie aktualnego czasu: Utwórz komponent, który wyświetla aktualny czas. Użyj hooka useRef,
// aby uzyskać dostęp do interwału czasowego aktualizującego czas i wyłączenia go przy odmontowaniu komponentu.

import { useEffect, useRef, useState } from "react";

export const TimerRef = () => {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();

  const stopInterval = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (!timerRef.current) {
      const intervalID = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      timerRef.current = intervalID;
    }

    return () => stopInterval();
  }, []);

  return (
    <>
      <h1>Czasomierz, sekundy :{seconds}</h1>
      <button onClick={stopInterval}>STOP</button>
    </>
  );
};
