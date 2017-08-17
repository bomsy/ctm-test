"use strict";
import React, { Component } from "react";

export default class Accordion extends Component {
  constructor() {
    super();
  }

  renderCard(card, index) {
    console.log(card);
    return (        
    <li className="card" key={index}>
      <header>
        <i></i>
        <span className="card-title">{ card.name }</span>
        <span className="card-apr">{ card.apr}% APR</span>
      </header>
      <section>
        <img src={"../assets/" + card.code + '.png'}></img>
        <article className="card-content" >{ card.information }</article>
        <aside className="card-side-note">
          <div>Cashback</div>
          <div>£{ card.cashback }</div>
        </aside>
      </section>
    </li>);
  }

  render() {
    const { cards } = this.props;
    return (<div>
      <ul>
        { cards.map(this.renderCard)}
      </ul>
    </div>);
  }
}
