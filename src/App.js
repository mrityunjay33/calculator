import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount+1);
  }
  const handleDecrement = () => {
    setCount((prevCount) => prevCount-1);
  }

  return (
    <div className='container'>
      <h1>Calculator</h1>

    </div>
  );
}

export default App;
