import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './projector.css'

import logo13 from '../../Images/logo13.svg'
import logo25 from '../../Images/logo25.svg'
import logo9 from '../../Images/logo9.svg'
import logo11 from '../../Images/logo11.svg'

const Projector = () => (
    <div>
        <Header />
            <div className="Projector">
                <h1 className="Projector-header">PROJECTORS</h1>
                <p className="header-caption">In this Category we deal with Brands such as</p>
                <div className="brands-categories5">
                <div className="Sony2">
                        <a href="https://pro.sony/en_BE/products/projectors" target="_blank"><img src={logo25} className="sony2logo" alt="SONY" /></a> 
                   </div>
                   <div className="epson2">
                        <a href="https://www.epson.co.in/homeprojector" target="_blank"><img src={logo13} className="epson2logo" alt="EPSON" /></a> 
                   </div>
                   <div className="dell3">
                        <a href="https://www.dell.com/en-in/work/shop/projectors-and-projector-accessories/ar/5188" target="_blank"><img src={logo9} className="dell3logo" alt="DELL" /></a> 
                    </div>
                    <div className="benq2">
                        <a href="https://www.benq.com/en-in/projector.html" target="_blank"><img src={logo11} className="benqlogo" alt="BENQ" /></a> 
                    </div>
                </div>
            </div>  
        <Footer />

    </div>
)

export default Projector




