import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Input from './components/Input';
import Accordion from './components/Accordion';

function App() {
  return (
    <>
    <Navbar/>
   <div className='container'>
   <Input/>
   <Accordion/>
   </div>
  
    </>
  );
}

export default App;