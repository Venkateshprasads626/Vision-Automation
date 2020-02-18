import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './servers.css'


import logo9 from '../../Images/logo9.svg'
import logo6 from '../../Images/logo6.svg'
import logo16 from '../../Images/logo16.svg'

const Servers = () => (
    <div>
        <Header />
            <div className="Servers">
                <h1 className="Server-header">SERVEERRS & WORKSTATIONS</h1>
                <p className="header-caption">In this Category we deal with Brands such as</p>
                <div className="brands-categories9">
                    <div className="dell4">
                        <a href="https://www.dell.com/en-in/work/shop/dell-poweredge-servers-nbsp/sc/servers?~ck=bt" target="_blank"><img src={logo9} className="dell4logo" alt="DELL" /></a> 
                    </div>
                    <div className="Hp4">
                        <a href="https://www.hpe.com/in/en/servers.html" target="_blank"><img src={logo6} className="hp4logo" alt="HP" /></a> 
                    </div>
                    <div className="Lenova4">
                        <a href="https://www.lenovo.com/in/en/data-center/servers/c/servers" target="_blank"><img src={logo16} className="lenova4logo" alt="Lenova" /></a> 
                    </div>
                </div>
            </div>  
        <Footer />

    </div>
)

export default Servers




