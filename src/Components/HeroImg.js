import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hero from "../assets/images/heroimg.png";
import Hero1 from "../assets/images/hero1.jpeg";
import Hero2 from "../assets/images/hero2.jpeg";

const HeroImg = () => {
  return (
    <>
       <Carousel infiniteLoop useKeyboardArrows autoPlay interval={1000}>
        <div>
          <img src={Hero1} alt="" srcset="" />
        </div>
        <div>
          <img src={Hero} alt="" srcset="" />
        </div>
        <div>
          <img src={Hero2} alt="" srcset="" />
        </div>
       </Carousel>
    </>
  );
};

export default HeroImg;
