import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './graphics.css'

import logo2 from '../../Images/logo2.svg'
import logo40 from '../../Images/logo40.svg'
import logo41 from '../../Images/logo41.svg'

const Graphicscard = () => (
    <div>
        <Header />
            <div className="Graphicscard">
                <h1 className="graphic-header">GRAPHICS CARD</h1>
                <p className="header-caption">In this Category we deal with Brands such as</p>
                <div className="brands-categories10">
                    <div className="asus55">
                        <a href="https://www.asus.com/in/Graphics-Cards/" target="_blank"><img src={logo2} className="asus55logo" alt="" /></a> 
                    </div>
                    <div className="nvidia">
                        <a href="https://www.nvidia.com/en-in/" target="_blank"><img src={logo40} className="nvidialogo" alt="" /></a> 
                    </div>
                    <div className="Amd">
                        <a href="https://www.amd.com/en/products/specifications/graphics" target="_blank"><img src={logo41} className="amdlogo" alt="" /></a> 
                    </div>
                </div>
            </div>
        <Footer />

    </div>
)

export default Graphicscard




