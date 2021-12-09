import './App.css';

function App() {
  return (

    <div className="container">
      <label className="search">
        <input className="search__input" type="number" placeholder="Digite o CEP"/>
        <button className="search__button"><i className="fas fa-search-location"></i></button>
      </label>
    </div>

  );
}

export default App;
