import { FaSearchLocation } from "react-icons/fa";
import './App.css';

function App() {
  return (

    
      <div className="container">
        <div className="search">    
          <label htmlFor="cep" className="search__label">
            Qual é o seu CEP?
          </label>
          <div className="search__item">
            <input id="cep" className="search__input" type="text" placeholder="Digite o CEP"/>
            <button className="search__button">
              <FaSearchLocation />
            </button>
          </div>          
        </div>
      </div>

  );
}

export default App;
