"use strict";
import React, { Component } from "react";

export default class Accordion extends Component {
  constructor() {
    super();
    this.state = {
      current: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ current: nextProps.cards[0] });
  }

  handleClick(card) {
    this.setState({ current: card });
  }

  isCurrent(card) {
    return this.state.current === card;
  }

  renderCard(card, index) {
    return (
      <li className="card" key={index} onClick={() => this.handleClick(card)}>
        <header className={!this.isCurrent(card) ? "collapsed" : ""}>
          <i className="arrow nav-icon" />
          <span className="card-title">
            {card.name}
          </span>
          <span className="card-apr">
            {card.apr}% APR
          </span>
        </header>
        <section className={this.isCurrent(card) ? "expanded" : ""}>
          <img src={"../assets/" + card.code + ".png"} />
          <article className="card-content">
            {card.information}
          </article>
          <aside className="card-side-note">
            <span>Cashback</span>
            <div>
              £{card.cashback}
            </div>
          </aside>
        </section>
      </li>
    );
  }

  render() {
    const { cards } = this.props;
    return (
      <div className="cards">
        <ul>
          {cards.map((card, index) => this.renderCard(card, index))}
        </ul>
      </div>
    );
  }
}
