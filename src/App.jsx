import { useState, useEffect } from 'react'
import Input from './components/Input';
import Label from './components/Label';
import Button from './components/Button';
import Result from './components/Result';

import './styles/app.css';

function App() {

  const [showResult, setShowResult] = useState(false)
  const [cep, setCep] = useState('')

  const handleChangeCep = target => setCep(target.value)

  const handleSubmitCep = e => {
    e.preventDefault()
    
  }

  return (
    <div className="container">
      <form className="search" onSubmit={handleSubmitCep}>    
        <Label text="Qual é o seu CEP?" id="cep" />
        <div className="search__item">
          <Input
            type="search" 
            id="cep"
            placeholder="Digite o CEP"
            value={cep}
            handleChangeCep={handleChangeCep}
          />          
          <Button type="submit" />
        </div>
      </form>

      {cep}

      {showResult ? (
        <Result />
      ) : null}
    </div>
  );
}

export default App;
