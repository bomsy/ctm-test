"use strict";

import React, { Component } from "react";
import ReactDOM from "react-dom";

import Navbar from "./Navbar";
import Accordion from "./Accordion";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  async componentDidMount() {
    const cards = await fetch("./data/cards.json");
    this.setState({ cards });
  }

  render() {
    return (
      <div id="app">
        <Navbar />
        <Accordion cards={this.state.cards} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
