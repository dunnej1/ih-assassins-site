// import React from 'react';
//
// import { Link } from 'react-router-dom';
//
// const Header = () => (
//   <header>
//     <Link to="/">Home</Link>
//
//     <nav>
//       <Link to="/leaderboard">Leaderboard</Link>
//     </nav>
//
//     <nav>
//       <Link to="/killfeed">Killfeed</Link>
//     </nav>
//
//     <hr />
//   </header>
// );
//
// export default Header;


import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
        <li><NavLink to="/killfeed">Killfeed</NavLink></li>
      </ul>
    );
  }
}

export default Header;
