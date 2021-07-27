import React, { Component } from "react";
import Slider from "react-slick";

export default class CommonSlider extends Component {
  render() {
    const settings = {
      dots: false,
      autoplay: true,
      speed:500,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      loop:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.03,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
      <div className="col-10 mx-auto mb-5 mt-5 sliderwrapper">
        <h2>Trending Offers</h2>
        <Slider {...settings}>
          <div className="img-item">
            <a href="">
            <img src={`${process.env.PUBLIC_URL}/images/slider/1.png`} alt={`${process.env.PUBLIC_URL}/images/slider/1.png`} />
            </a>
          </div>
          <div className="img-item">
            <a href="">
            <img src={`${process.env.PUBLIC_URL}/images/slider/2.png`} alt={`${process.env.PUBLIC_URL}/images/slider/2.png`} />
            </a>
          </div>
          <div className="img-item">
            <a href="">
            <img src={`${process.env.PUBLIC_URL}/images/slider/3.png`} alt={`${process.env.PUBLIC_URL}/images/slider/3.png`} />
            </a>
          </div>
          <div className="img-item">
            <a href="">
            <img src={`${process.env.PUBLIC_URL}/images/slider/4.png`} alt={`${process.env.PUBLIC_URL}/images/slider/4.png`} />
            </a>
          </div>
          <div className="img-item">
            <a href="">
            <img src={`${process.env.PUBLIC_URL}/images/slider/5.png`} alt={`${process.env.PUBLIC_URL}/images/slider/5.png`} />
            </a>
          </div>
        </Slider>
      </div>
      </>
    );
  }
}