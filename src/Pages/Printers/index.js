import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './printer.css'
import logo6 from '../../Images/logo6.svg';
import logo12 from '../../Images/logo12.svg';
import logo13 from '../../Images/logo13.svg';
import logo14 from '../../Images/logo14.svg';
import logo15 from '../../Images/logo15.svg';





const Printers = () => (
    <div>
        <Header />
            <div className="Printers">
                <h1 className="Printer-header">PRINTERS</h1>
                <p className="header-caption">In this Category we deal with Brands such as</p>
                <div className="brands-categories3">
                    <div className="canon">
                        <a href="https://in.canon/en/consumer/products/search?category=printing" target="_blank"><img src={logo12} className="canonlogo" alt="Canon" /></a> 
                    </div>
                    <div className="epson">
                        <a href="https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/c/h120in" target="_blank"><img src={logo13} className="epsonlogo" alt="EPSON" /></a> 
                    </div>
                    <div className="hp2">
                        <a href="https://store.hp.com/in-en/default/printers.html" target="_blank"><img src={logo6} className="hplogo" alt="Hp" /></a> 
                    </div>
                    <div className="Tvs">
                        <a href="https://www.tvs-e.in/products/" target="_blank"><img src={logo14} className="tvslogo" alt="Tvs" /></a> 
                    </div>
                    <div className="brother">
                        <a href="https://www.brother.in/en/products/all-printers" target="_blank"><img src={logo15} className="brotherlogo" alt="brother" /></a> 
                    </div>
                    
                </div>
            </div>  
        <Footer />

    </div>
)

export default Printers




