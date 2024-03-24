import { Component } from "react";
import Child from "../Child/Child";

type ParentState = {
  parentText: string;
};

class Parent extends Component<{}, ParentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      parentText: "Parent text default",
    };
  }

  updateText = (newText: string) => {
    this.setState({
      parentText: newText,
    });
  };

  render() {
    return (
      <div>
        <h2>Komponent rodzic</h2>
        <p>Tekst ze stanu parent: {this.state.parentText}</p>
        <button onClick={() => this.updateText("nowy tekst rodzica")}>
          Zmień stan z poziomu rodzica
        </button>
        <Child updateText={this.updateText} />
      </div>
    );
  }
}

export default Parent;
