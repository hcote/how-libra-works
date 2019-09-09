import React from 'react';
import Raw from './Raw';
import Signed from './Signed';
import Validator from './Validator';
import '../styles/App.css';

function App() {
  const state = {
  }
  return (
    <div className="App">
      <header className="App-header">
        Construct A Transaction
      </header>
      <form className="App">
        <input placeholder="From Address" />
        <input placeholder="To Address" />
        <input placeholder="Gas Limit (Fixed)" />
        <input placeholder="Gas Price" />
        <input placeholder="Amount (Libra)" />
        <button>Inspect Raw Tx</button>
        <button>Inspect Signed Tx</button>
        <button>Submit To Network</button>
      </form>
      {/* {<Raw />}
      {<Signed />} */}
      {<Validator />}
    </div>
  );
}

export default App;
