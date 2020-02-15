import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './motherboard.css'
import logo1 from '../../Images/logo1.svg';
import logo2 from '../../Images/logo2.svg';
import logo3 from '../../Images/logo3.svg';
import logo4 from '../../Images/logo4.svg';












const Motherboard = () => (
    <div>
        <Header />
            <div className="Motherboard">
                <h1 className="motherboard-header">MOTHER BOARDS</h1>
                <p className="header-caption">In this Category we deal with Brands such as</p>
                <div className="brands-categories">
                    <div className="msi">
                        <a href="https://www.msi.com/Motherboards/" target="_blank"><img src={logo1} className="msilogo" alt="msi" /></a> 
                    </div>
                    <div className="asus">
                        <a href="https://www.asus.com/in/Motherboards/" target="_blank"><img src={logo2} className="asuslogo" alt="asus" /></a> 
                    </div>
                    <div className="mercury">
                        <a href="http://www.mercury-pc.com/search/motherboards" target="_blank"><img src={logo3} className="mercurylogo" alt="mercury" /></a> 
                    </div>
                    <div className="gigabyte">
                        <a href="https://www.gigabyte.com/in/Motherboard" target="_blank"><img src={logo4} className="gigabytelogo" alt="gigabyte" /></a> 
                    </div>
                </div>
            </div>
        <Footer />

    </div>
)

export default Motherboard




