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
            <li>
                <NavLink to="/">Home<span className="dot dot1 active"><i class="fa fa-home" aria-hidden="true"></i></span></NavLink>
               
            </li>
            <li>
                <NavLink to="/products">Our Products<span className="dot dot2"><i className="fa fa-desktop" aria-hidden="true"></i></span></NavLink>
               
                
            </li>
            <li>
                <NavLink to="/Aboutus">About Us<i class="fa fa-user-circle" aria-hidden="true"></i></NavLink>
                
            </li>
            <li>
                <NavLink to="/Contact">Contact Us<span className="dot dot3"><i class="fa fa-phone" aria-hidden="true"></i></span></NavLink>
                
            </li>
            </ul>
        </nav>          
        </div>
    </header>

);

export default Header;