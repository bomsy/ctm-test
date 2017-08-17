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

  componentDidMount() {
    fetch("./data/cards.json")
      .then(response => response.json())
      .then((cards) => {
        this.setState({ cards });
      })
  }

  render() {
    const { cards } = this.state;
    return (
      <div id="app">
        <header>
          <img id="logo" src="../assets/ctm-logo.svg"></img>
          <Navbar />
        </header>
        <section>
          <Accordion cards={cards} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
