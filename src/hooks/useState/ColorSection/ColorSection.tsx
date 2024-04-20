// Zaimplementuj funkcję przycisku, który po kliknięciu zmieni kolor tła strony na losowy,
// wykorzystując hook useState do przechowywania aktualnego koloru.

import { useState } from "react";

const color = ["red", "green", "blue"];

export const ColorSection = () => {
  const [currColor, setCurrColor] = useState(color[0]);

  const shuffleColor = () => {
    const randColor = Math.floor(Math.random() * color.length);

    setCurrColor(color[randColor]);
  };

  return (
    <section
      style={{ backgroundColor: currColor, width: "500px", height: "500px" }}
    >
      <button onClick={shuffleColor}>Zmień kolor</button>
    </section>
  );
};
