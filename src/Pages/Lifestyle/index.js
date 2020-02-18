import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './lifestyle.css'

import logo35 from '../../Images/logo35.svg'
import logo36 from '../../Images/logo36.svg'
import logo37 from '../../Images/logo37.svg'
import logo38 from '../../Images/logo38.svg'
import logo17 from '../../Images/logo17.svg'
import logo39 from '../../Images/logo39.svg'



const Lifestyle = () => (
    <div>
        <Header />
            <div className="Lifestyle">
                <h1 className="lifestyle-header">LIFESTYLE PRODUCTS</h1>
                <p className="header-caption">In this Category we deal with Brands such as</p>
                <div className="brands-categories8">
                   <div className="Google">
                        <a href="https://store.google.com/in/product/google_home" target="_blank"><img src={logo35} className="googlelogo" alt="Google" /></a> 
                   </div>
                   <div className="alexa">
                        <a href="https://www.amazon.in/amazon-echo/b?ie=UTF8&node=14156834031" target="_blank"><img src={logo36} className="alexalogo" alt="Amazon- Alexa" /></a> 
                   </div>
                   <div className="Plantronics">
                        <a href="https://www.plantronics.com/in/en" target="_blank"><img src={logo37} className="plantronicslogo" alt="Plantronics" /></a> 
                   </div>
                   <div className="Jbl">
                        <a href="https://in.jbl.com/" target="_blank"><img src={logo38} className="jbllogo" alt="JBL" /></a> 
                   </div>
                   <div className="logitech2">
                        <a href="https://www.logitech.com/en-in" target="_blank"><img src={logo17} className="logitech2logo" alt="Logitech" /></a> 
                   </div>
                   <div className="Jabra">
                        <a href="https://www.jabra.in/" target="_blank"><img src={logo39} className="jabralogo" alt="Jabra" /></a> 
                   </div>
                </div>
            </div>
        <Footer />

    </div>
)

export default Lifestyle




