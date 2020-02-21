import React, { Component } from "react";
import './testimony.css';
import $ from 'jquery'
import Slider from "react-slick"

class Testimony extends Component{
    componentDidMount = () =>{
        $('.slider2').each(function() {
          var $this = $(this);
          var $group = $this.find('.slide_group');
          var $slides = $this.find('.slide');
          var bulletArray = [];
          var currentIndex = 0;
          var timeout;
          
          function move(newIndex) {
            var animateLeft, slideLeft;
            
            advance();
            
            if ($group.is(':animated') || currentIndex === newIndex) {
              return;
            }
            
            bulletArray[currentIndex].removeClass('active');
            bulletArray[newIndex].addClass('active');
            
            if (newIndex > currentIndex) {
              slideLeft = '100%';
              animateLeft = '-100%';
            } else {
              slideLeft = '-100%';
              animateLeft = '100%';
            }
            
            $slides.eq(newIndex).css({
              display: 'block',
              left: slideLeft
            });
            $group.animate({
              left: animateLeft
            }, function() {
              $slides.eq(currentIndex).css({
                display: 'none'
              });
              $slides.eq(newIndex).css({
                left: 0
              });
              $group.css({
                left: 0
              });
              currentIndex = newIndex;
            });
          }
          
          function advance() {
            clearTimeout(timeout);
            timeout = setTimeout(function() {
              if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
              } else {
                move(0);
              }
            }, 4000);
          }
          
          $('.next_btn').on('click', function() {
            if (currentIndex < ($slides.length - 1)) {
              move(currentIndex + 1);
            } else {
              move(0);
            }
          });
          
          $('.previous_btn').on('click', function() {
            if (currentIndex !== 0) {
              move(currentIndex - 1);
            } else {
              move(3);
            }
          });
          
          $.each($slides, function(index) {
            var $button = $('<a class="slide_btn">&bull;</a>');
            
            if (index === currentIndex) {
              $button.addClass('active');
            }
            $button.on('click', function() {
              move(index);
            }).appendTo('.slide_buttons');
            bulletArray.push($button);
          });
          
          advance();
        }); 
      }




    render() {
        return(
            <div>
            <div className="slider2">
                <div className="slide_viewer">
                    <div class="slide_group">
                    <div class="slide">
                       
                        <div className="testimony-data">
                          <div className="testidata">
                            <p className="testi1">My experience working with Mr Hitesh Jain Vision Automation is very much a positive  <br/></p>
                            <p className="testi2">one from 2010 to till date.I will be appreciating his professionalism towards </p><br/>
                            <p className="testi3">swift service and quality product supplying. I look forward to many</p>
                            <p className="testi44">more business opportunities in the future.</p>
                            <p className="testi4" style={{color: "green"}}>- Mr Shreenivas, Manager IT operations</p>
                          </div>
                        </div>
                    </div>
                        <div class="slide">
                        <div className="testimony-data2">
                            <p className="testi5">Its been long time we are working with Vision Automation,<br/></p>
                            <p className="testi6">It is a privilege for us to have Vision Automation as a valuable vendor partner.  </p><br/>
                            <p className="testi7">I would like to appreciate you from the bottom of my heart for your significant support and</p>
                            <p className="testi8">service to achieve all procurement activity (quality product ontime delivery and best price)</p>
                            <p className="testi9"> which is commendable.I am very appreciative of your</p>
                            <p className="testi99">assistance and am looking forward to continuing to work together.</p>
                            <p className="testi10" style={{color: "green"}}>- Mr Pradeep P, Senior Procurement Manager</p>
                        </div>
                        </div>
                        <div class="slide">
                          <div className="testimony-data3">
                            <p className="testi11">Have known VISION AUTOMATION for 10 years, They are fab in terms of the job, <br/></p>
                            <p className="testi12">result oriented and always executed their deliverables on time.  </p><br/>
                            <p className="testi13">Very reliable & trustworthy it's a pleasure & joy to interact wuth them. </p>
                            <p className="testi114" style={{color: "green"}}>-Mr Devi Prasad, Senior VP, IT operations and Building management services.</p>
                          </div>  
                        </div>
                        
                    </div>
                </div>
            </div>

            <div class="slide_buttons"></div>
            </div>
        );
    }
}

export default Testimony










