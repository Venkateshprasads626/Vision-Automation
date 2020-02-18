import React from 'react';
import './aboutus.css'
import Header from '../../components/header';
import Footer from '../../components/footer';
import Testimony from '../../components/Testimony'


const Aboutus = () => (
    <div>
        <Header/>
            <div className="Aboutuspage">
            <h1 className="banner-header">About Us</h1>
                <div className="aboutpage-content">
                        <p className="ab1">Since its inception in 2018, VISION AUTOMATION is pioneer in providing IT <br /></p>
                        <p className="ab2">products and services. With each passing year VISION AUTOMATION has tried<br /></p>
                        <p className="ab3">to bring in innovative products and services which can bring happiness to our <br /></p>
                        <p className="ab4">customers. Today it stands offering exclusive IT Hardware services among<br /></p>
                        <p className="ab5">exclusive business visitors. The team consists of smart professionals with a <br /></p>
                        <p className="ab6">desire to succeed and be the best. And we are a One Stop Solution for all your<br /></p>
                        <p className="ab7">IT hardware and peripharals needs, we have one of the best team to handle the<br /></p>
                        <p className="ab8"> after sale service requirement.</p> 
                </div>
                <div className="">
                    <Testimony />
                </div>
            </div>
        
        <Footer/>    
    </div>
);

export default Aboutus;

