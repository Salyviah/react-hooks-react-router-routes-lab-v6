import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/directors" activeClassName="active">Directors</NavLink>
      <NavLink to="/actors" activeClassName="active">Actors</NavLink>
    </nav>
  );
}

export default NavBar;