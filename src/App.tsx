import { Component } from "react";
import "./App.scss";

import Block from "./components/Block/Block";
import Parent from "./components/Parent/Parent";

const getItem = (text: string) => {};

getItem("text");

class App extends Component {
  state = {
    appWelcomeText: "app welcome text to block",
  };

  updateWelcomeText = (newText: string) => {
    this.setState({
      appWelcomeText: newText,
    });
  };

  // updateWelcomeText('nowy tekst welcome')

  render() {
    return (
      <div className="App">
        <Parent />
        {/* App.append(Block) */}
        {/* Komponent Block wymaga propsów określonych w Block.tsx > Props l:12 */}
        {/* I sposób przekazania propsów - pojedynczo przez nazwe właściwowści */}
        {/* <Block
          welcomeText={this.state.appWelcomeText}
          updateText={this.updateWelcomeText}
        /> */}
        {/* II sposób, przekazanie propsów wszystkich na raz przez spread operator */}
        {/* <Block {...blockProps} /> */}
      </div>
    );
  }
}

export default App;
