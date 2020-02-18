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

                        </div>
                        <div class="slide">

                        </div>
                        <div class="slide">

                        </div>
                        <div class="slide">

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