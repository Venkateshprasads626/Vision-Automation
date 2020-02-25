import React from 'react';
import './footer.css'
import logo from '../../logo.svg';
import { Link } from  "react-router-dom" 
import tenor from '../../Images/tenor.gif'

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
                  VISION AUTOMATION, NO 129,<br/>
                  BETWEEN 8TH AND 9TH CROSS, <br/>
                  CHAMARAJPET, BANGALORE-560018<br/>
                  India
                  </p>
                </div>
                <div className="contact">
                  <p className="text2">CONTACT US</p>
                  <p className="contacttext">
                    CONTACT NUMBER - +91 9482824000<br/>
                    E-MAIL - hitesh@visionautomationblr.com
                  </p>
                </div>
             
                  <div className="navbar2">
                    <p className="ftext1">Made with</p>
                    <img src={tenor}  className="tenor" />
                    <p className="ftext2">in India</p>
                    <p className="ftext3"><i class="fa fa-copyright" aria-hidden="true"></i> Proudly created by Rushbee Studios</p>
                  </div>

            
            </div>
      </footer>
    </div>
);

export default Footer;
 