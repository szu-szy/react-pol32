import { useState } from "react";

// tworzymy typ dla propsów komponentu
type Props = {
  initSeconds: number;
};

// odczytujemy propsy z komponentu
export const FunctionTimer = ({ initSeconds }: Props) => {
  // tworzymy stan komponentu
  const [seconds, setSeconds] = useState<number>(initSeconds);
  // <NodeJS.Timeout> - oznacza nadanie specjalnego typu związanego z setInterval
  const [intervalRef, setIntervalRef] = useState<NodeJS.Timeout>();

  const start = () => {
    // tworzymy zmienna intervalID to przechowywania referencji naszego interwału w funkcji start
    const intervalID = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    setIntervalRef(intervalID);
  };

  const stop = () => {
    // jeżeli intervalRef === undefined to nic nie rób i przerwij działanie funkcji
    if (!intervalRef) return;

    // jeżeli intervalRef !== undefined to zastopuj interval
    clearInterval(intervalRef);
  };

  const reset = () => setSeconds(0);

  // zwracamy widok naszego komponentu (h2, 3 przyciski oraz czas w skundach)
  return (
    <div>
      <h2>FunctionTimer</h2>
      {/* Przekazujemy referencje funkcji start to eventu onClick */}
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
      {/* Odczytujemy sekundy ze zmiennej seconds */}
      <p>Czas w sekundach: {seconds}</p>
    </div>
  );
};
