// App.jsx
import { useState } from 'react';
import Chai from './components/Chai.jsx';
import Card from './components/Card.jsx'; // Updated import statement
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Chai />
      <Card userName="one" />
      <Card userName="Two" />
      <Card userName="Three" />

    </>
  );
}

export default App;
