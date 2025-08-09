import './App.css'; 
import Eventos from './components/Eventos';
import Submit from './components/Submit';


function App() {


  const nome = 'Maria'
  return (
    <div className='App'>
      <h1> Testando Eventos</h1>
      <Eventos numero={1}/>
    
      <Submit />
 
    </div>
  );
}

export default App;
