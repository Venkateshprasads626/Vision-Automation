import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './Cables.css'

import logo32 from '../../Images/logo32.svg'
import logo33 from '../../Images/logo33.svg'
import logo30 from '../../Images/logo30.svg'
import logo31 from '../../Images/logo31.svg'
import logo34 from '../../Images/logo34.svg'




const Cables = () => (
    <div>
        <Header />
            <div className="Cables">
                <h1 className="Cable-header">CABLES & CONNECTORS</h1>
                <p className="header-caption">In this Category we deal with Brands such as</p>
                <div className="brands-categories7">
                   <div className="Honeywell">
                        <a href="https://www.bhphotovideo.com/c/search?ci=9581&phd=4291416971" target="_blank"><img src={logo32} className="Honeywelllogo" alt="Honeywll" /></a> 
                   </div>
                   <div className="cadyce">
                        <a href="https://www.cadyce.com/product-category/cables-adapters/" target="_blank"><img src={logo33} className="cadycelogo" alt="Cadyce" /></a> 
                   </div>
                   <div className="tp-link2">
                        <a href="https://www.tp-link.com/in/" target="_blank"><img src={logo30} className="tplink2logo" alt="TP-LINK" /></a> 
                   </div>
                   <div className="D-link2">
                        <a href="http://its.dlink.co.in/" target="_blank"><img src={logo31} className="Dlink2logo" alt="D-LINK" /></a> 
                   </div>
                   <div className="commscope">
                        <a href="https://www.commscope.com/product-type/cables/?r=1" target="_blank"><img src={logo34} className="commscopelogo" alt="COMMSCOPE" /></a> 
                   </div>
                </div>
            </div>
        <Footer />

    </div>
)

export default Cables




