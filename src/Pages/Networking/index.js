import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './Networking.css'

import logo2 from '../../Images/logo2.svg'
import logo29 from '../../Images/logo29.svg'
import logo30 from '../../Images/logo30.svg'
import logo31 from '../../Images/logo31.svg'

const Networking = () => (
    <div>
        <Header />
            <div className="Networking">
                <h1 className="Network-header">NETWORKS</h1>
                <p className="header-caption">In this Category we deal with Brands such as</p>
                <div className="brands-categories6">
                <div className="asus3">
                    <a href="https://www.asus.com/in/Networking/" target="_blank"><img src={logo2} className="asus3logo" alt="ASUS" /></a> 
                </div>
                <div className="cisco">
                    <a href="https://www.cisco.com/c/en_in/solutions/enterprise-networks/index.html" target="_blank"><img src={logo29} className="ciscologo" alt="CISCO" /></a> 
                </div>
                <div className="tp-link">
                    <a href="https://www.tp-link.com/in/" target="_blank"><img src={logo30} className="tplinklogo" alt="tp-Link" /></a> 
                </div>
                <div className="D-link">
                    <a href="https://www.dlink.com/en/consumer/wifi-routers" target="_blank"><img src={logo31} className="Dlinklogo" alt="D-link" /></a> 
                </div>
                   
                </div>
            </div>  
        <Footer />

    </div>
)

export default Networking




