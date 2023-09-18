import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Slider  from "react-slick";

function Slide() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
          speed: 3500,
          autoplaySpeed: 2000,
          cssEase: "linear",
          pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          }
        ]
      };
  return (
    <>
        <div className='hero'>
        <Slider {...settings}>
          <div className='divs'>
            <img src='1.jpg'/>
          </div>
          <div className='divs'>
                <img src='2.png'/>      
          </div>
          <div className='divs'>
                <img src='3.png'/>      
          </div>
          <div className='divs'>
                <img src='4.png'/>      
          </div>
          <div className='divs'>
                 <img src='5.jpg'/>      
          </div>
        </Slider>
        </div>
    </>
  )
}

export default Slide