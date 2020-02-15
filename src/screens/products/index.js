import React from 'react';
import './products.css'
import Header from '../../components/header';
import Footer from '../../components/footer';
import type1 from '../../Images/type1.svg';
import type2 from '../../Images/type2.svg';
import type3 from '../../Images/type3.svg';
import type4 from '../../Images/type4.svg';
import type5 from '../../Images/type5.svg';
import type6 from '../../Images/type6.svg';
import type7 from '../../Images/type7.svg';
import type8 from '../../Images/type8.svg';
import type9 from '../../Images/type9.svg';
import { Link } from 'react-router-dom'


const products = () => (
    <div>
        <Header/>
            <div className="Productpage">
                <h1 className="producttext1">All</h1>
                <h1 className="producttext2" style={{color:"red"}}>Categories</h1>
                <p className="producttext3">Pharetra risus velit rutrum id at ultrices mus arcu.</p>
                <div className="listof-products">
                    <div className="cards2">
                        <div className="card11">
                            <Link to="/Motherboard">
                            <img src={type1} className="producttype1" alt="motherboard" />
                            <h6 style={{textAlign: "center"}}>MOTHER BOARDS</h6>
                            </Link>
                        </div>
                      
                        <div className="card22">
                            <Link to="/Monitor">
                                <img src={type2} className="producttype2" alt="moniter" />
                                <h6 style={{textAlign: "center"}}>MONITORS</h6>
                            </Link>
                        </div>
                        <div className="card33">
                            <Link to="/Printers">
                                <img src={type3} className="producttype3" alt="printers" />
                                <h6 style={{textAlign: "center"}}>PRINTERS</h6>
                            </Link>
                        </div>
                        <div className="card44">
                            <Link to="/computerperipherals">
                                <img src={type4} className="producttype4" alt="computer peripherals" />
                                <h6  className="caption"style={{textAlign: "center"}}>COMPUTER PERIPHERALS</h6> 
                            </Link>
                        </div>
                        <div className="card55">
                            <Link to="/Moniter">
                                <img src={type5} className="producttype5" alt="motherboard" />
                                <h6 style={{textAlign: "center",marginTop: "70px"}}>PROJECTORS</h6>
                            </Link>
                        </div>
                        <div className="card66">
                            <Link to="/Moniter">
                                <img src={type6} className="producttype6" alt="motherboard" />
                                <h6 style={{textAlign: "center"}}>NETWORKING</h6>
                            </Link>
                        </div>
                        <div className="card77">
                            <Link to="/Moniter">
                                <img src={type7} className="producttype7" alt="motherboard" />
                                <h6 style={{textAlign: "center",marginTop: "50px"}}>CABLES & CONNECTORS</h6>
                            </Link>
                        </div>
                        <div className="card88">
                            <Link to="/Moniter">
                                <img src={type8} className="producttype8" alt="motherboard" />
                                <h6 style={{textAlign: "center"}}>LIFESTYLE PRODUCTS</h6>
                            </Link>
                        </div>
                        <div className="card99">
                            <Link to="/Moniter">
                                <img src={type9} className="producttype1" alt="motherboard" />
                                <h6 style={{textAlign: "center"}}>SERVER & WORKSTATION</h6>
                            </Link>
                        </div>
                       
                    </div>
                </div>
            </div>
        
        <Footer/>
    </div>
);

export default products;