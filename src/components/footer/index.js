import React from 'react';
import './footer.css'
import logo from '../../logo.svg';
import { Link } from  "react-router-dom" 

const Footer = props => (
    <div className="Footer">
      <footer>
            <div className="footercontent">
                <div className="box2">
                  <img src={logo} className="logo1" />
                </div>
                <hr className="secondhr"></hr>
                <div className="address">
                  <p className="text1">ADDRESS:-</p>
                  <p className="addresstext">
                    62-130, 2nd Main Rd,<br/>
                    Chamrajpet, Bengaluru,<br/>
                    Karnataka 560018<br/>
                    India
                  </p>
                </div>
                <div className="contact">
                  <p className="text2">CONTACT US</p>
                  <p className="contacttext">
                    CONTACT NUMBER - +91 9482824000<br/>
                    E-MAIL - hitesh@visionautomation.com
                  </p>
                </div>
                  <div className="navbar2">
                    <ul className="navbar">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/Aboutus">About-Us</Link></li>
                      <li><Link to="/Contact">Contact-Us</Link></li>
                    </ul>
                    <div className="upangle">
                    <span className="dot dot4"></span>
                    <i class="fa fa-angle-up" aria-hidden="true"></i>
                    </div>
                  </div>
            
            </div>
      </footer>
    </div>
);

export default Footer;
 