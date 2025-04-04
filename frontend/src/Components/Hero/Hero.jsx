import React from "react";
import './Hero.css'
import hand_icon from "../Assests/8.png"
import arrow_icon from "../Assests/arrow.png"
//import hero_image from "../Assests/hero_image.png"
import hero_image from "../Assests/hero2.png"
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>New Fur-iends Here!</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>Find</p>
                        <img src={hand_icon} alt=""/>
                </div>
                <p>Your</p>
                <p> New Best friend  </p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=""/>
        </div>
        </div>
        <div className="hero-right">
        <img src={hero_image} alt=""/>
            </div>
            </div>
    )
}

export default Hero