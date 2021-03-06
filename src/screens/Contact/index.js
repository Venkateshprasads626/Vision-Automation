import React from 'react';
import './Contact.css'
import Header from '../../components/header';
import Footer from '../../components/footer';
import pic from '../../Images/pic.svg'


const Contact = () => (
    <div>
        <Header/>
            <div className="Contact">
            <div className="formbox">
                <div className="formcontent">
                    <h1 className="formhead">Get connected</h1>
                    <hr className="formhr"></hr>
                    <img src={pic} className="pic"/>
                    <div className="vl5"></div>
                        <div className="register-box">
                            <form>
                                <p>Name</p>
                                <input type="text" placeholder="Enter Name" name="name" className="name" />
                                <p>Mobile No</p>
                                <input type="number" placeholder="Enter Mobile No" name="phone" className="phone" />
                                <i className="fa fa-phone phone1" aria-hidden="true"></i>
                                <p>Email Address</p>
                                <input type="email" placeholder="Enter Email Address" name="email" className="email"/>

                                <p>Organization</p>
                                <input type="text" placeholder="Enter your Organization Details" name="text" className="org"/>
                                <button type="submit" value="submit" className="submitbtn">Submit</button>
                            </form>
                        </div>
                        </div>
                </div>
            </div>
        
        <Footer/>    
    </div>
);

export default Contact;