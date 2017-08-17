"use strict";
import React, { Component } from "react";

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      items: [
        { title: "Vehicles" },
        { title: "Home & pet" },
        { title: "Finances" },
        { title: "Life" },
        { title: "Buisness" },
        { title: "Travel" }
      ]
    };
  }

  render() {
    return (
      <div>
        <ul>
          (this.state.items.map(<li> test</li>))
        </ul>
      </div>
    );
  }
}
