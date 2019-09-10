import React from 'react';
import '../styles/App.css';

function Instructions() {
  const state = {
  }
  return (
    <div className="instructions">
      <div className="arrow-flex">
          <i className="fa fa-arrow-left"></i>
          <i className="fa fa-arrow-right"></i>
      </div>
          <ol className="list">
            <li className="list-item">Fill in data</li>
            <li className="list-item">Construct a transaction</li>
            <li className="list-item">Submit tx to network</li>
            <li className="list-item">Tx received by Admission Control</li>
            <li className="list-item">Tx verified by Virtual Machine</li>
            <li className="list-item">Tx sent to mempool</li>
            <li className="list-item">Txs constructed into a candidate block</li>
            <li className="list-item">VM executes transaction scripts to generate new possible state</li>
            <li className="list-item">New global state sent to other validators to verify</li>
            <li className="list-item">Validators sign off on new state</li>
            <li className="list-item">New blockchain sent to persistent storage</li>
          </ol>
    </div>
  );
}

export default Instructions;