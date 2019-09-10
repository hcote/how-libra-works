import React from 'react';
import '../styles/App.css';

function Signed() {
  const state = {
  }
  return (
    <div>
        <pre className="signed">
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
    },
    public_key: 55af3fe3f28550a2f1e5ebf073ef193feda44344d94c463b48be202aa0b3255d,
    signature: Signature( 
        R: CompressedEdwardsY: [210, 23, 214, 62, 228, 179, 64, 147, 81, 159, 180, 138, 100, 211, 111, 139, 178, 148, 81, 1, 240, 135, 148, 145, 104, 234, 227, 239, 198, 153, 13, 199], 
        s: Scalar {
            bytes: [203, 76, 105, 49, 64, 130, 162, 81, 22, 237, 159, 26, 80, 181, 111, 94, 84, 6, 152, 126, 181, 192, 62, 103, 130, 94, 246, 174, 139, 214, 3, 15],
        }
    ),
    Events:
        ContractEvent {
            access_path: AccessPath { 
                address: 3ed8e5fafae4147b2a105a0be2f81972883441cfaaadf93fc0868e7a0253c4a8, 
                type: Resource, 
                hash: "217da6c6b3e19f1825cfb2676daecce3bf3de03cf26647c78df00b371b25cc97", 
                suffix: "/sent_events_count/" 
            }, 
            index: 0, 
            event_data: AccountEvent { 
                account: 8337aac709a41fe6be03cad8878a0d4209740b1608f8a81566c9a7d4b95a2ec7, 
                amount: 10000000 
            } 
        }
        ContractEvent { 
            access_path: AccessPath { 
                address: 8337aac709a41fe6be03cad8878a0d4209740b1608f8a81566c9a7d4b95a2ec7, 
                type: Resource, 
                hash: "217da6c6b3e19f1825cfb2676daecce3bf3de03cf26647c78df00b371b25cc97", 
                suffix: "/received_events_count/" 
            }, 
            index: 0, 
            event_data: AccountEvent { 
                account: 3ed8e5fafae4147b2a105a0be2f81972883441cfaaadf93fc0868e7a0253c4a8, 
                amount: 10000000 
            } 
        }
    }
}
`
                }</code>
        </pre>
    </div>
  );
}

export default Signed;