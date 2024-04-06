import { Component } from "react";

type CounterState = {
  count: number;
};

type Props = {
  count: number;
};

export class Counter extends Component<{}, CounterState> {
  // ustawianie stanu
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // tworzenie metod
  increment = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  };

  // tworzenie renderu - JSX
  render() {
    return (
      <div>
        <h2>Counter zadanie</h2>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <h3>Aktualny count: {this.state.count}</h3>
      </div>
    );
  }
}
