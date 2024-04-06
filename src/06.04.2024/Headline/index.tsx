import { Component } from "react";

type HeadlineState = {
  isVisible: boolean;
};

export class Headline extends Component<{}, HeadlineState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  toggleVisibility = () => {
    this.setState((prev) => ({
      isVisible: !prev.isVisible,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>
          {this.state.isVisible ? "Ukryj" : "Pokaz"}
        </button>
        {this.state.isVisible ? <h1>Headline class component</h1> : null}
      </div>
    );
  }
}
