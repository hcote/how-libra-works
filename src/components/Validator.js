import React from 'react';
import '../styles/App.css';

function Validator() {
  const state = {
  }
  return (
        <div className="validator">
            <div className="AC">
                <div>Admission Control</div>
            </div>
            <div className="VM">
                <div>Virtual Machine</div>
            </div>
            <div className="mempool">
                <div>Memory Pool</div>
                <div className="tx-list">tx 1</div>
                <div className="tx-list">tx 2</div>
                <div className="tx-list">tx 3</div>
                <div className="tx-list">tx 4</div>
            </div>
            <div className="execution">
                <div>Execution</div>
                <div className="tx-script-box">Collection of tx scripts</div>
            </div>
            <div className="consensus">
                <div>Consensus</div>
            </div>
            <div className="storage">
                <div>Persistent Storage</div>
            </div>
        </div>
  );
}

export default Validator;