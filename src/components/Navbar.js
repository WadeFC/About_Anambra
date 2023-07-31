import React, { Component } from "react";
import logo from "../img/logo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
  render() {
    const li = { backgroundColor: "blue" };
    return (
      <div>
        <nav className="navBar" style={{ backgroundColor: "white" }}>
          <div className="header_text">
            <img src={logo} alt="" className="logo" />
            <p className="knowKaduna"> About Anambra</p>
          </div>
          <ul className="navUl">
            <li className="navLi">Home</li>
            <li className="navLi">KD Living</li>
            <li className="navLi">Food & Drinks</li>
            <li className="navLi">Events</li>
            <li className="navLi">StartUps/Tech</li>
            <li className="navLi">Contact</li>
            <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="navLi" />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
