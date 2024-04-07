import { useState } from "react";

export const Fruits = () => {
  const [fruits, setFruits] = useState(["arbuz", "banan"]);

  return (
    <div>
      <h2>Lista owoców</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};
