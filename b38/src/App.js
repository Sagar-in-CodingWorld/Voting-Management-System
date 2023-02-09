
import React from 'react'
import './App.css';
import EvenOdd from './c0602/EvenOdd.jsx';
import Day from './c0602/Day';
import Vote from './c0602/Vote';

function App() {
  return (
    <div className="App">
      <Day />
      <EvenOdd />
      <Day />
      <Vote/>
    </div>
  );
}
export default App;