import "./App.scss";

const App = () => {
  return (
    <div className="App">
      {/* zagnieżdżenia scss */}
      <div className="block">
        <input type="text" id="block-input-name" />
        <input type="text" id="block-input-age" />
        <h1 className="block-element">header</h1>
        <ul className="block-list">
          <li className="block-list-item">1</li>
          <li className="block-list-item">2</li>
          <li className="block-list-item">3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
