import "./App.scss";

const App = () => {
  return (
    <div className="App">
      {/* Zadanie 4 - SCSS */}
      <header className="header">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__list-item header__list-item--active">
              link 1
            </li>
            <li className="header__list-item">link 2</li>
            <li className="header__list-item">link 3</li>
          </ul>
        </nav>
      </header>
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
