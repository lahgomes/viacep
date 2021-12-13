import { useState, useEffect } from 'react'

import Input from './components/Input';
import Label from './components/Label';
import Button from './components/Button';
import Result from './components/Result';
import './styles/app.css';

function App() {

  const [showResult, setShowResult] = useState(false)

  return (
    <div className="container">
      <div className="search">    
        <Label />
        <div className="search__item">
          <Input
            type="search" 
            id="cep"
            placeholder="Digite o CEP"
          />          
          <Button 
            type="submit"
          
          />          
        </div>
      </div>

      {showResult ? (
        <Result />
      ) : null}
    </div>
  );
}

export default App;
