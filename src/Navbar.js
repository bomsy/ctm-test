"use strict";
import React, { Component } from "react";

export default class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav>
        <a href="#" id="menu-icon"></a>
        <ul>
          <li>
            <a href="#" id="home-icon">
              <i className="nav-icon home"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="nav-icon car"></i>Vehicles
            </a>
          </li>
          <li>
            <a href="#">
              <i className="nav-icon pet"></i>Home & pet
            </a>
          </li>
          <li>
            <a href="#">
              <i className="nav-icon finance"></i>Finances
            </a>
          </li>
          <li>
            <a href="#" >
              <i className="nav-icon life"></i>Life
            </a>
          </li>
          <li>
            <a href="#" >
              <i className="nav-icon buisness"></i>Buisness
            </a>
          </li>
          <li>
            <a href="#" >
              <i className="nav-icon travel"></i>Travel
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
