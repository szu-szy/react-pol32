// wymagane podpiecie styli do komponentu za pomoca import
import "./Block.scss";
// pamietamy o dziedziczeniu z Component (biblioteka React)
import { Component } from "react";

let count = 0;
count = count + 1;

class Block extends Component {
  // sposób I deklaracja stanu
  state = {
    count: 4,
  };

  // metoda zwiekszajaca stan count o 1 (function posiada własny this)
  // increment() {
  //   console.log(this);
  //   this.state.count = this.state.count + 1;
  // }
  // opcja II za pomoca funkcji strzalkowej
  // (nie posiada wlasnego this - wskazuje na rodzica)
  increment = () => {
    console.log(this.state);
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
