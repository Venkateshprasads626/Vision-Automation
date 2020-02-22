import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './pos.css'
import logo6 from '../../Images/logo6.svg';
import logo14 from '../../Images/logo14.svg';
import logo13 from '../../Images/logo13.svg';
import logo32 from '../../Images/logo32.svg';
import logo42 from '../../Images/logo42.svg';
import logo43 from '../../Images/logo43.svg';
import logo44 from '../../Images/logo44.svg';


const POS = () => (
    <div>
        <Header />
            <div className="POS">
                <h1 className="pos-header">POS (Point of Sale-Retail)</h1>
                <p className="header-caption3">In this Category we deal with Brands such as</p>
                <div className="brands-categories11">
                    <div className="hp8">
                        <a href="https://www8.hp.com/us/en/solutions/pos-systems.html" target="_blank"><img src={logo6} className="hp8logo" alt="hp" /></a> 
                    </div>
                    <div className="Tvs4">
                        <a href="https://www.tvs-e.in/" target="_blank"><img src={logo14} className="tvs4logo" alt="Tvs" /></a> 
                    </div>
                    <div className="epson5">
                        <a href="https://www.epson.co.in/For-Work/Printers/POS-Printers/c/w150" target="_blank"><img src={logo13} className="epson5logo" alt="EPSON" /></a> 
                    </div>
                    <div className="Honeywell3">
                        <a href="https://www.honeywellaidc.com/solutions/workflow/point-of-sale" target="_blank"><img src={logo32} className="honeywell3logo" alt="Honeywell" /></a> 
                    </div>
                    <div className="Tsc">
                        <a href="https://onlypos.in/tsc/" target="_blank"><img src={logo42} className="Tsclogo" alt="TSC" /></a> 
                    </div> 
                    <div className="posiflex">
                        <a href="http://www.posiflex.com/en-global" target="_blank"><img src={logo43} className="posiflexlogo" alt="POSIFLEX" /></a> 
                    </div>
                    <div className="zebra">
                        <a href="https://www.zebra.com/ap/en/solutions/industry/retail/in-store-operations/point-of-sale.html" target="_blank"><img src={logo44} className="zebralogo" alt="ZEBRA" /></a> 
                    </div>
                </div>
            </div>
        <Footer />

    </div>
)

export default POS




