import React from 'react';
import './footer.css'
import logo from '../../logo.svg';

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
                    ATAURA CO-Working Space,<br/>
                    5th Block,2nd Floor,99D,2nd Cross Road,<br/>
                    KHB Colonoy, Kormangala,<br/>
                    Bengaluru,560095,<br/>
                    India
                  </p>
                </div>
                <div className="contact">
                  <p className="text2">CONTACT US</p>
                  <p className="contacttext">
                    CONTACT NUMBER - +91 8296503397<br/>
                    E-MAIL - rushbeestudios@gmail.com
                  </p>
                </div>
                  <div className="navbar2">
                    <ul className="navbar">
                      <li>Home</li>
                      <li>About-Us</li>
                      <li>Contact-Us</li>
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