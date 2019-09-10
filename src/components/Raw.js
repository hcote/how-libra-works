import React from 'react';
import '../styles/App.css';

function Raw() {
  const state = {
  }
  return (
    <div>
        <pre className="raw">
            <code>{         
`
{
    raw_txn: {
        "sender": "3ed8e5fafae4147b2a105a0be2f81972883441cfaaadf93fc0868e7a0253c4a8",
        "sequence_number": 0,
        "payload": {
            "transaction": "peer_to_peer_transaction",
            "args": [
                {
                    "ADDRESS": "8337aac709a41fe6be03cad8878a0d4209740b1608f8a81566c9a7d4b95a2ec7"
                },
                {
                    "U64": 10000000
                },
            ]
        },
        "max_gas_amount": 10000,
        "gas_unit_price": 0,
        "expiration_time": 1560466424s,
    }
}
`
                }</code>
        </pre>
    </div>
  );
}

export default Raw;