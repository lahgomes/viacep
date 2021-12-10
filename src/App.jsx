import Input from './components/Input';
import Label from './components/Label';
import Button from './components/Button';
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
    </div>
  );
}

export default App;
