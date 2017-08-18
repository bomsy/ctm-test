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
    fetch("./data/cards.json").then(response => response.json()).then(cards => {
      cards.sort((a, b) => a.apr - b.apr);
      this.setState({ cards });
    });
  }

  render() {
    const { cards } = this.state;
    return (
      <div id="app">
        <header className="app-header">
          <img id="logo" src="../assets/ctm-logo.svg" />
          <img className="menu-icon" src="../assets/menu.png" />
          <Navbar show={this.state.showmenu} />
        </header>
        <section className="app-section">
          <Accordion cards={cards} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
