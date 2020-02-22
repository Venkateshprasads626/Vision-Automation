import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './software.css'
import logo45 from '../../Images/logo45.svg';
import logo46 from '../../Images/logo46.svg';
import logo47 from '../../Images/logo47.svg';
import logo48 from '../../Images/logo48.svg';
import logo49 from '../../Images/logo49.svg';



const Software = () => (
    <div>
        <Header />
            <div className="Software">
                <h1 className="software-header">SOFTWRAES</h1>
                <p className="header-caption3">In this Category we deal with Brands such as</p>
                <div className="brands-categories12">
                    <div className="microsoft">
                        <a href="" target="_blank"><img src={logo45} className="microsoftlogo" alt="hp" /></a> 
                    </div>
                    <div className="sketchup">
                        <a href="" target="_blank"><img src={logo46} className="sketchuplogo" alt="Tvs" /></a> 
                    </div>
                    <div className="tally">
                        <a href="" target="_blank"><img src={logo47} className="tallylogo" alt="EPSON" /></a> 
                    </div>
                    <div className="adobe">
                        <a href="" target="_blank"><img src={logo48} className="adobelogo" alt="Honeywell" /></a> 
                    </div>
                    <div className="quickheal">
                        <a href="" target="_blank"><img src={logo49} className="quickheallogo" alt="TSC" /></a> 
                    </div> 
                   
                </div>
            </div>
        <Footer />

    </div>
)

export default Software




