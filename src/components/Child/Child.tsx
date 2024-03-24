import { Component } from "react";

type ChildProps = {
  updateText: (newText: string) => void;
};

class Child extends Component<ChildProps, {}> {
  render() {
    return (
      <div>
        <h2>Dziecko rodzica</h2>
        <button
          onClick={() =>
            this.props.updateText("Tekst zmieniony z poziomu dziecka")
          }
        >
          Zmień stan rodzica z poziomu dziecka
        </button>
      </div>
    );
  }
}

export default Child;
