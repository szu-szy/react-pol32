import "./App.scss";

import Block from "./components/Block/Block";

const getItem = (text: string) => {};

getItem("text");

const App = () => {
  const blockProps = {
    welcomeText: "block props tekst welcome",
  };
  return (
    <div className="App">
      {/* App.append(Block) */}
      {/* Komponent Block wymaga propsów określonych w Block.tsx > Props l:12 */}
      {/* I sposób przekazania propsów - pojedynczo przez nazwe właściwowści */}
      <Block welcomeText="heja" />
      {/* II sposób, przekazanie propsów wszystkich na raz przez spread operator */}
      <Block {...blockProps} />
    </div>
  );
};

export default App;
