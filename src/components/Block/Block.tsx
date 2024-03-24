// wymagane podpiecie styli do komponentu za pomoca import
import "./Block.scss";
// pamietamy o dziedziczeniu z Component (biblioteka React)
import { Component } from "react";

let count = 0;
count = count + 1;

type StateType = {
  count: number;
  text: string;
};

type Props = {
  count: number;
};

// okreslenie typu dla Stanu komponent
// Component<TypPropsów, TypStanu>
class Block extends Component<Props, StateType> {
  // sposób I deklaracja stanu
  // state = {
  //   count: 4,
  //   text: "jakis tekst",
  // };

  constructor(props: Props) {
    super(props);

    // II sposób deklaracji stanu
    // moja rekomendacja
    this.state = {
      count: 5,
      text: "",
    };
  }

  // metoda zwiekszajaca stan count o 1 (function posiada własny this)
  // increment() {
  //   console.log(this);
  //   this.state.count = this.state.count + 1;
  // }
  // opcja II za pomoca funkcji strzalkowej
  // (nie posiada wlasnego this - wskazuje na rodzica)
  increment = () => {
    // sluzy do poinformowania VDOM aby odswiezyl nasz komponent
    // setState - ma dostęp do stanu poprzedniego setState(prev => ({...prev}))
    // do setState przekazujemy tylko te wlasciwosci ktore chcemy zaktualizowac
    // jeżeli nie podalismy, jakiejs właściwości stanu, to nie zmieni ona wartosci - ale też nie zniknie
    // czyli: jeżeli to setState podamy obiekt z count
    // -> to zaktualizuje nam w state tylko count, textu nie ruszy
    this.setState((prev) => {
      return {
        // nadpisanie starym stanem obiektu "...prev" - działa domyslnie i nie musimy tego pisasc
        // wiec "...prev" nie jest tutaj wymagany
        ...prev,
        count: prev.count + 1,
      };
    });

    setTimeout(() => {
      console.log(this.state);
    }, 1000);

    // ten sposób nie odświezy nam komponentu
    // VDOM nie wie, ze cos sie zmienilo
    // this.state.count = this.state.count + 1;
  };
  // pamietamy, że musi zawierać metode render
  render() {
    // metoda render musi zwracac JSX (HTML + JS)
    // createElement
    // textContent
    // możemy uzywać JS w HTML w klamerkach "{JS}"
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <h2>nasz tekst: {this.state.text}</h2>
        {/* Event w JS: click, submit, change */}
        {/* Event w React: onClick, onSubmit, onChange - poniewaz JS zarezerwowalo poprzednie nazwy */}
        {/* button.addEventListener('click', this.increment) */}
        {/* bind - ustawienie nowego kontekstu (this) */}
        {/* w wypadku ponizej, wskazujemy nowy kontekst - czyli Block (nasz rodzic) */}
        {/* <button onClick={this.increment.bind(this)}>+1</button> */}
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}

// pamietamy aby wyexportować komponent za pomoca export default
export default Block;
