import { useCallback, useEffect, useState } from "react";
import { Child } from "../Child/Child";

export const Parent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    console.log("111");
  }, [incrementCount]);

  return (
    <>
      <h2>Rodzic</h2>
      <p>Liczba kliknięć: {count}</p>
      <Child increment={incrementCount} />
    </>
  );
};
