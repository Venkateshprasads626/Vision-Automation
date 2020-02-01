import React from 'react';

import logo from '../../logo.svg';
import { NavLink } from "react-router-dom"

const Header = props => (
    <header className="menu">
        <div className="menu-content">
        <nav> 
            <div className="box">
                <img className="logo" src={logo} alt=""></img>
                <h1 className="text">Vision Automation</h1>
                <hr></hr>
            </div>
                 
            <ul className="nav-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Our Products</NavLink></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            </ul>
        </nav>          
        </div>
    </header>

);

export default Header;