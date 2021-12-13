import Input from './components/Input';
import Label from './components/Label';
import Button from './components/Button';
import Result from './components/Result';
import './styles/app.css';

function App() {
  return ( 
      
    <div className="container">
      <div className="search">    
        <Label />
        <div className="search__item">
          <Input />          
          <Button />          
        </div>      
      </div>
      <Result />      
    </div>
  );
}

export default App;
