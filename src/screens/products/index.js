import React from 'react';
import './products.css'
import Header from '../../components/header';
import Footer from '../../components/footer';
import type1 from '../../Images/type1.svg';
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
                            <Link to="/Moniter">
                            <img src={type1} className="producttype1" alt="motherboard" />
                            </Link>
                        </div>
                      
                        <div className="card22">
                            
                        </div>
                        <div className="card33">
                            
                        </div>
                        <div className="card44">
                            
                        </div>
                        <div className="card55">
                            
                        </div>
                        <div className="card66">
                            
                        </div>
                        <div className="card77">
                            
                        </div>
                        <div className="card88">
                            
                        </div>
                        <div className="card99">
                            
                        </div>
                        <div className="card10">
                            
                        </div>
                    </div>
                </div>
            </div>
        
        <Footer/>
    </div>
);

export default products;