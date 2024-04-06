import { Component } from "react";
import { RenderHeadline } from "../RenderHeadline";

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
        {this.state.isVisible ? (
          <RenderHeadline headlineText="nowy headline tekst" />
        ) : null}
      </div>
    );
  }
}
