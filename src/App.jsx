import './App.css';

function App() {
  return (

    <main className="main">
      <div className="container">
        <label className="search">
          <input className="search__input" type="text" placeholder="Digite o CEP"/>
          <button className="search__button"><i className="fas fa-search-location"></i></button>
        </label>
      </div>
    </main>

  );
}

export default App;
