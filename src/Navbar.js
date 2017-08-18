"use strict";
import React, { Component } from "react";

export default class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav className="nav-bar">
        <ul>
          <li className="current">
            <a href="#" id="home-icon">
              <i className="nav-icon home" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="nav-icon car" />
              <span>Vehicles</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="nav-icon pet" />
              <span>Home & pet</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="nav-icon finance" />
              <span>Finances</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="nav-icon life" />
              <span>Life</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="nav-icon buisness" />
              <span>Business</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="nav-icon travel" />
              <span>Travel</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
