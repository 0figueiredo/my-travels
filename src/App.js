import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Quote
          quote= "Teide Volcano (Tenerife Island, Spain) 3250 km"
          image="http://www.angelio.net/blogangelio/wp-content/uploads/2018/07/1517586733-Les-26icirc3Bles-Canaries-S26eacute3Bjour-26agrave3B-T26eacute3Bn26eacute3Brife.jpg"
        />
        <Quote
          quote= "Aphrodite Rock (Cyprus) 3450 km"
          image="https://in-cyprus.com/wp-content/uploads/2018/02/Aphrodites-Rock-678x381.jpg"
        />
      </div>
    );
  }
}

export default App;
