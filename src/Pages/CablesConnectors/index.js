import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './monitor.css'

import logo2 from '../../Images/logo2.svg';
import logo5 from '../../Images/logo5.svg';
import logo6 from '../../Images/logo6.svg';
import logo7 from '../../Images/logo7.svg';
import logo8 from '../../Images/logo8.svg';
import logo9 from '../../Images/logo9.svg';
import logo10 from '../../Images/logo10.svg';
import logo11 from '../../Images/logo11.svg';





const CableConnectors = () => (
    <div>
        <Header />
            <div className="Monitor">
                <h1 className="monitor-header">MONITERS</h1>
                <p className="header-caption">In this Category we deal with Brands such as</p>
                <div className="brands-categories2">
                    <div className="asus1">
                        <a href="https://www.asus.com/in/Monitors/" target="_blank"><img src={logo2} className="asuslogo" alt="asus" /></a> 
                    </div>
                    <div className="samsung">
                        <a href="https://www.samsung.com/in/monitors/all-monitors/" target="_blank"><img src={logo5} className="samsunglogo" alt="samsung" /></a> 
                    </div>
                    <div className="hp">
                        <a href="https://store.hp.com/in-en/default/monitors.html" target="_blank"><img src={logo6} className="hplogo" alt="Hp" /></a> 
                    </div>
                    <div className="Lg">
                        <a href="https://www.lg.com/in/monitors" target="_blank"><img src={logo7} className="lglogo" alt="LG" /></a> 
                    </div>
                    <div className="Viewsonic">
                        <a href="https://www.viewsonic.com/products/shop/monitors.html" target="_blank"><img src={logo8} className="vsnoiclogo" alt="View Sonic" /></a> 
                    </div>
                    <div className="Dell">
                        <a href="https://www.dell.com/en-us/shop/monitors-monitor-accessories/ac/4009" target="_blank"><img src={logo9} className="Delllogo" alt="Dell" /></a> 
                    </div>
                    <div className="aoc">
                        <a href="https://www.aocindia.com/Best-Buy-27-Inch-LED-Backlit-Gaming-Monitor-In-India-Monitors.php" target="_blank"><img src={logo10} className="aoclogo" alt="Aoc" /></a> 
                    </div>
                    <div className="Benq">
                        <a href="https://www.benq.com/en-in/monitor.html" target="_blank"><img src={logo11} className="benqlogo" alt="Benq" /></a> 
                    </div>
                </div>
            </div>
        <Footer />

    </div>
)

export default CableConnectors




