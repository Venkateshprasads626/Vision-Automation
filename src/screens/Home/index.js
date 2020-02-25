import React from 'react';
import './home.css'
import $ from 'jquery'
import Header from '../../components/header';
import Footer from '../../components/footer';

import type1 from '../../Images/type1.svg';
import type2 from '../../Images/type2.svg';
import type3 from '../../Images/type3.svg';
import type4 from '../../Images/type4.svg';
import whatsapp from '../../Images/whatsapp.png';
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'   

const Home = () => (
        
        
    <div>
        <Header/>
            <div className="Homepage">
            <Banner />
            <div className="About">
              <h2 className="cardh1">About-Us</h2>
             
              <div className="aboutustext">
                    <p className="ab1">Since its inception in 2018, VISION AUTOMATION is pioneer in providing IT <br /></p>
                    <p className="ab2">products and services. With each passing year VISION AUTOMATION has tried<br /></p>
                    <p className="ab3">to bring in innovative products and services which can bring happiness to our <br /></p>
                    <p className="ab4">customers. Today it stands offering exclusive IT Hardware services among<br /></p>
                    <p className="ab5">exclusive business visitors. The team consists of smart professionals with a <br /></p>
                    <p className="ab6">desire to succeed and be the best. And we are a One Stop Solution for all your<br /></p>
                    <p className="ab7">IT hardware and peripharals needs, we have one of the best team to handle the<br /></p>
                    <p className="ab8"> after sale service requirement.</p> 
              </div>
            </div>
            <div className="categories">
                <h1 className="categoriestext1">Product</h1>
                <h1 className="categoriestext2" style={{color:"red"}}>Categories</h1>
               
                <div className="cards">
                    <Link to="/Motherboard">
                    <div className="card1">
                        <img src={type1} className="producttype1" alt="motherboard" />
                        <h6 className="caption1" style={{textAlign: "center"}}>MOTHER BOARDS</h6>
                    </div>
                    </Link>
                    <Link to="/Monitor">
                    <div className="card2">
                        <img src={type2} className="producttype2"  alt="moniters" />
                        <h6 className="caption2" style={{textAlign: "center"}}>MONITORS</h6>
                    </div>
                    </Link>
                    <Link to="/Printers">
                    <div className="card3">
                        <img src={type3} className="producttype3"  alt="printers" />
                        <h6 className="caption3" style={{textAlign: "center"}}>PRINTERS</h6>
                    </div>
                    </Link>
                    <Link to="/computerperipherals">
                    <div className="card4">
                        <img src={type4} className="producttype4"  alt="keyboard" />
                        <h6  className="caption323" style={{textAlign: "center"}}>COMPUTER<br/>PERIPHERALS</h6> 
                    </div>
                    </Link>
                    <Link to="/products"><button className="button" type="button">MORE</button></Link>  
                </div>
                <div className="whatsapp1">
                    <a href="https://wa.me/919482824000" target="_blank">
                        <p className="whatsapp-text">To place Order/Queries</p><i class="fa fa-arrow-right" aria-hidden="true"></i>
                        <img src={whatsapp} className="whatsapp-image" />
                    </a>
                </div>
            </div>
          

            </div>
        
        <Footer/>
    </div>
);

export default Home;
