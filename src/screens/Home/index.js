import React from 'react';
import './home.css'
import $ from 'jquery'
import Header from '../../components/header';
import Footer from '../../components/footer';

import Group1 from '../../Images/Group1.svg';
import Group2 from '../../Images/Group2.svg';
import Group3 from '../../Images/Group3.svg';
import Group4 from '../../Images/Group4.svg';
import type1 from '../../Images/type1.svg';
import type2 from '../../Images/type2.svg';
import type3 from '../../Images/type3.svg';
import type4 from '../../Images/type4.svg';

   

const Home = () => (
        
        
    <div>
        <Header/>
            <div className="Homepage">
            <div class="slider">
                <div class="slide_viewer">
                    <div class="slide_group">
                    <div class="slide">
                      <img src={Group1} className="Groupimage" alt="" />
                    </div>
                    <div class="slide">
                    <img src={Group2} className="Groupimage" alt="" />
                    </div>
                    <div class="slide">
                    <img src={Group3} className="Groupimage" alt="" />
                    </div>
                    <div class="slide">
                    <img src={Group4} className="Groupimage" alt="" />
                    </div>
                    </div>
                </div>
            </div>
            <div className="About" style={{padding: "30px"}}>
              <h2 className="cardh1">About-Us</h2>
              <div className="card"></div>
              <div className="aboutustext">
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere</p>
                <p className=""> amet, amet, vitae hac euismod convallis lacus, euismod. Hac eget</p>
                <p className=""> pellentesque sollicitudin est. Laoreet mattis et in mattis mi eu</p>
                <p className="t">hendrerit sit. Dui suscipit in cras eget pellentesque interdum</p>
                <p className=""> eget facilisis. Cras purus donec lacus nec. Vehicula aliquam vitae</p>
                <p className="">ultricies placerat quam. Aenean sem non dignissim maecenas</p>
                <p className="">cras purus accumsan. Mi turpis sit aenean in. Ultricies malesuada</p>
                <p className=""> ornare </p>
                <p className="tt">accumsan, phasellus neque. Dui enim tellus sed ipsum. Habitant</p>
                <p className=""> sit sit feugiat feugiat quis facilisis sapien sed fringilla. Risus </p>
                <p className="">vulputate purus fermentum nullam quam. Euismod orci facilisis </p>
                <p className="">euismod sodales turpis vivamus tincidunt nulla dignissim.</p>
                <p className=""> Vehicula nibh et convallis turpis</p>
              </div>
            </div>
            <div className="categories">
                <h1 className="categoriestext1">Shop by</h1>
                <h1 className="categoriestext2" style={{color:"red"}}>Categories</h1>
                <p className="categoriestext3">Pharetra risus velit rutrum id at ultrices mus arcu.</p>
                <div className="cards">
                    <div className="card1">
                        <img src={type1} className="producttype1" alt="motherboard" />
                    </div>
                    <div className="card2">
                        <img src={type2} className="producttype2"  alt="moniters" />
                    </div>
                    <div className="card3">
                        <img src={type3} className="producttype3"  alt="printers" />
                    </div>
                    <div className="card4">
                        <img src={type4} className="producttype4"  alt="keyboard" />
                    </div>
                    <a href="/"><button className="button" type="button">MORE</button></a>  
                </div>
                
            </div>


            </div>
        
        <Footer/>
    </div>
);

export default Home;