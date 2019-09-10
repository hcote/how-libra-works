import React, { Component } from 'react';
import Raw from './Raw';
import Signed from './Signed';
import Validator from './Validator';
import Instructions from './Instructions';
import '../styles/App.css';

class App extends Component {

  state = {
    defaultHeader: "Construct A Transaction",
    txSubmittedHeader: "Constructed A Transaction", // checkmark annimation
    form: true,
    raw: false,
    signed: false,
    validator: false, 
  }

// componentDidMount = () => {

  showRaw = (e) => {
    e.preventDefault();
    this.setState({raw: true, signed: false, validator: false})
  }

  showSigned = (e) => {
    e.preventDefault();
    this.setState({raw: false, signed: true, validator: false})
  }

  submitToNetwork = (e) => {
    e.preventDefault();
    let form = document.getElementById("form");
    form.classList.add("form-clicked");
    form.classList.add("animated");
    form.classList.add("fadeOutUp");

    let envelope = document.getElementById("envelope");
    envelope.classList.add("fa");
    envelope.classList.add("fa-envelope");
    envelope.classList.add("animated");
    envelope.classList.add("rotateIn");
    this.setState({raw: false, signed: false, validator: true})
  }

// }


  render() {
    return (
      <div className="App">
        <Instructions />
        
        <header className="title">
          Construct A Transaction
        </header>
        {this.state.form ? 
          <i id="envelope">
            <form className="App" id="form">
              <input type="text" placeholder="From Address" />
              <input type="text" placeholder="To Address" />
              <input type="number" placeholder="Gas Limit (Fixed)" />
              <input type="number" placeholder="Gas Price" />
              <input type="number" placeholder="Amount (Libra)" />
              <button onClick={this.showRaw}>Inspect Raw Tx</button>
              <button onClick={this.showSigned}>Inspect Signed Tx</button>
              <button onClick={this.submitToNetwork}>Submit To Network</button>
            </form>
          </i> : <span></span>}
        {this.state.raw ? <Raw /> : <span></span>}  
        {this.state.signed ? <Signed /> : <span></span>} 
        <div className="flex"> 
          {this.state.validator ? <Validator /> : <span></span>}  
        </div>
      </div>
    );
  }
}

export default App;

// form validation for showing txs