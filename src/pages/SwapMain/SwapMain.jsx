import "./SwapMain.scss";
import React, { useState } from "react";
import axios from "axios";
import MainMenu from "../../components/MainMenu/MainMenu";
import heart from "../../assets/images/2.png"
import cross from "../../assets/images/5.png"

let images = ["https://picsum.photos/id/237/450/450", "https://picsum.photos/id/239/450/450", "https://picsum.photos/id/238/450/450"]
const SwapMain = () => {
 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handlePrevImage = ()=> {
    setCurrentImageIndex(currentImageIndex -1);
  }
  const handleNextImage = ()=> {
    setCurrentImageIndex(currentImageIndex +1);
  }
  
  

  return (
    <div className="swap-container">
      <MainMenu />
      <div className="swap-card">
        <div className="image-slider">
          <div className="image-slider__image-container">
            <img src={images[currentImageIndex]} alt="slider" className="slider-image" />
          </div>
            <button className="left-arrow-button" disabled={currentImageIndex === 0} onClick={handlePrevImage} >
            &#x276E;
            </button>
            <div className="dot-container">
              {images.reverse().map((image, index) => (
                <span key={image} className= {`dot ${index === currentImageIndex ? 'dot-active' : ''}`} />
              ))}
            </div>
            <button className="right-arrow-button" disabled={currentImageIndex === images.length -1} onClick={handleNextImage} >
            &#x276F;
            </button>
        </div>
        <h3 className="itemt-title">This is a test</h3>
        <p>This is a long drawn description of the listed item for styling purposes blahh blahh blahh yadiaydiya sdhfgkjshdfgkjhskdjhfgkjhsdfg klsdjfhg
        jasdhfkjashdjfh askjdhf asdjkfhas dfjhasd khsdf hj ajsdhf aksdf kjdf kasdhf 
        </p>
        <div className="choice-container">
          <img src={heart} alt="" className="heart"/>
          <img src={cross} alt="" className="cross"/>
        </div>
      </div>
    </div>
  );
};

export default SwapMain;
