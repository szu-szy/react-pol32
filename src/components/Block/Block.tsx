import { Component } from "react";

// pamietamy o dziedziczeniu z Component (biblioteka React)
class Block extends Component {
  getItem() {}
  // pamietamy, że musi zawierać metode render
  render() {
    // metoda render musi zwracac JSX (HTML + JS)
    return <div>komponent block</div>;
  }
}

// pamietamy aby wyexportować komponent za pomoca export default
export default Block;
