import { Component } from "react";
import "./App.scss";

import Block from "./components/Block/Block";
import Parent from "./components/Parent/Parent";
import { Counter } from "./06.04.2024/Counter";
import { Timer } from "./06.04.2024/Timer";
import { Headline } from "./06.04.2024/Headline";
import { FunctionCounter } from "./06.04.2024/FunctionCounter";
import { Paragraph } from "./06.04.2024/Paragraph";
import { FunctionTimer } from "./06.04.2024/FunctionTimer";
import { LoginForm } from "./06.04.2024/LoginForm";

const getItem = (text: string) => {};

getItem("text");

type AppState = {
  appWelcomeText: string;
  isCounterVisible: boolean;
  isLoginFormVisible: boolean;
};

class App extends Component<{}, AppState> {
  state = {
    appWelcomeText: "app welcome text to block",
    isCounterVisible: true,
    isLoginFormVisible: false,
  };

  updateWelcomeText = (newText: string) => {
    this.setState({
      appWelcomeText: newText,
    });
  };

  toggleCounter = () => {
    this.setState((prev) => ({
      isCounterVisible: !prev.isCounterVisible,
    }));
  };

  toggleLoginForm = () => {
    this.setState((prev) => ({
      isLoginFormVisible: !prev.isLoginFormVisible,
    }));
  };

  // updateWelcomeText('nowy tekst welcome')

  render() {
    return (
      <div className="App">
        {/* <Parent /> */}
        {/* App.append(Block) */}
        {/* Komponent Block wymaga propsów określonych w Block.tsx > Props l:12 */}
        {/* I sposób przekazania propsów - pojedynczo przez nazwe właściwowści */}
        {/* <Block
          welcomeText={this.state.appWelcomeText}
          updateText={this.updateWelcomeText}
        /> */}
        {/* II sposób, przekazanie propsów wszystkich na raz przez spread operator */}
        {/* <Block {...blockProps} /> */}
        {/* ZADANIA Z DNIA 06.04.24 */}
        {/* <button onClick={this.toggleCounter}>
          {this.state.isCounterVisible ? "Ukryj" : "Pokaż"} Counter komponent
        </button> */}
        {/* {this.state.isCounterVisible && <Counter />} */}
        {/* <Timer />
        <Headline /> */}
        {/* <Paragraph /> */}
        {/* <FunctionCounter /> */}
        <FunctionTimer initSeconds={0} />

        <h2>Login Form</h2>
        <button onClick={this.toggleLoginForm}>
          {this.state.isLoginFormVisible
            ? "Ukryj formularz"
            : "Pokaż formularz"}
        </button>
        {this.state.isLoginFormVisible && (
          <LoginForm initLogin="typical login" initPass="<PASSWORD>" />
        )}
      </div>
    );
  }
}

export default App;
