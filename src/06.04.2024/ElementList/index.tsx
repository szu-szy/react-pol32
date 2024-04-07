import { useState } from "react";

// określanie typu propsów
type Props = {
  initTab: string[];
};

// odczytujemy przekazane propsy do ElementList
export const ElementList = ({ initTab }: Props) => {
  // tworzymy stan komponentu
  const [tab, setTab] = useState(initTab);

  // render komponentu przy uzyciu stanu listy oraz metody map
  return (
    <div>
      <h2>Element list komponent</h2>
      {tab.length > 0 && (
        <ul>
          {tab.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
