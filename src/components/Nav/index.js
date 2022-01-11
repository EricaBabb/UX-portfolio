import React from 'react';
import logo from '../../assets/image/logo.png';

function Nav() {

  return (
    <header class="nav-bar">
    <a href="">Home</a>
    <a href="">Work</a>
    <img className="logo" src={logo} alt="" />
    <a href="">About</a>
    <a href="">Contact</a>
    </header>
  );
}

export default Nav;