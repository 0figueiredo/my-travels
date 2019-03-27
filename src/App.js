import React, { Component } from "react";
import Travel from "./Travel";
import "./App.css";

import Travels from "./Travels"


class App extends Component {
  render() {
    return (
      <main>
        <h1>My Travels</h1>
        {Travels.map((travel) => <Travel key={travel.country} {...travel}/>)}
      </main>
    );
  }
}

export default App;
