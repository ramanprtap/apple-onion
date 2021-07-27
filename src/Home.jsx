import React from 'react';
import Slider from './CommonSlider';
import IntrestedSlider from './IntrestedSlider';
const Home =() =>{
  return(
    <>
    <div className="hero-container">
      <video src={`${process.env.PUBLIC_URL}/video/large.mp4`} autoPlay muted></video>
      <div className="detailsWrapper">
      <h1>It’s a leap year.</h1>
      <a className="buttonForHome">Explore Now</a>
    </div>
    </div>
    <Slider/>
    <IntrestedSlider/>
    </>
  )
}

export default Home;