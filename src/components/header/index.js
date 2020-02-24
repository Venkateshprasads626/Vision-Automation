
import React, { Component } from 'react'
import logo from '../../logo.svg';
import { NavLink } from "react-router-dom"
import $ from 'jquery'


class Header extends Component{


    render() {
        return(
            <header className="menu" id="Header">
            <div className="menu-content">
            <nav> 
                <div className="box">
                    <img className="logo" src={logo} alt=""></img>
                    <h1 className="text">Vision Automation</h1>
                    <hr></hr>
                </div>
                     
                <ul className="nav-links" id="mynav">
                    <li className="active">
                        <NavLink exact to="/" activeClassName="main-nav-active">Home<span className="dot dot1"><i class="fa fa-home" aria-hidden="true"></i></span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName="main-nav-active">Our Products<span className="dot dot2"><i className="fa fa-desktop" aria-hidden="true"></i></span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/Aboutus" activeClassName="main-nav-active">About Us<i class="fa fa-user-circle" aria-hidden="true"></i></NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" activeClassName="main-nav-active">Contact Us<span className="dot dot3"><i class="fa fa-phone" aria-hidden="true"></i></span></NavLink>
                    </li>
                </ul>
            </nav>          
            </div>
        </header>
        );
    }
}


export default Header;

