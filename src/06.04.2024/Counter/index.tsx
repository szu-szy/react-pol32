import { Component } from "react";

type CounterState = {
  count: number;
};

type Props = {
  count: number;
};

export class Counter extends Component<{}, CounterState> {
  timerID?: NodeJS.Timeout;
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

  // 1 etap cyklu zycia - odpala się tylko raz na początku
  componentDidMount(): void {
    console.log("pojawilem się na ekranie!");
    // dobre miejsce do:
    // pobierania danych z bazy
    // ustawiania stanu początkowego na bazie danych z bazy
    // odpalenie interval/timeout
    this.timerID = setInterval(() => {
      console.log("timout co 1 sekunda");
      this.setState((prev) => ({
        count: prev.count + 1,
      }));
    }, 1000);
  }
  // 2 etap cyklu zycia - odpala się za każda aktualizacją komponentu (w tym stanu)
  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<CounterState>
  ): void {
    if (prevState.count !== this.state.count) {
      document.title = `Aktualny Counter: ${this.state.count}`;
      console.log("aktualizacja stanu count!");
    }
  }
  // 3 etap cyklu zycia - odpala się tylko raz! bezposrednio przed odmontowaniem
  // zapobiega wyciekowi pamięci przegladarki
  componentWillUnmount(): void {
    console.log("odmontowanie");
    clearInterval(this.timerID);
    this.timerID = undefined;
    // dobre miejsce do:
    // zatrzymania timera
    // zatrzymania pobierania danych
  }

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
