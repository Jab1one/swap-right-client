
import "./SwapMain.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import MainMenu from "../../components/MainMenu/MainMenu";
import heart from "../../assets/images/2.png";
import cross from "../../assets/images/5.png";

const SwapMain = () => {

  const [loading, setLoading] = useState(true);

  const [items, setItems] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handlePrevImage = () => {
    setCurrentImageIndex(currentImageIndex - 1);
  };
  const handleNextImage = () => {
    setCurrentImageIndex(currentImageIndex + 1);
  };
  
  const handleNextItem = () => {
    if (currentItemIndex === items.length - 1) {
      return;
    }
    setCurrentItemIndex(currentItemIndex + 1);
  };
  const handleNextItemHeart = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const result = await axios.post(
        `http://localhost:8080/likes`,
        { itemId: items[currentItemIndex].item_id },
        { headers }
      );
      console.log(result);
      if (currentItemIndex !== items.length - 1) {
        setCurrentItemIndex(currentItemIndex + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const decoded = jwt_decode(token);
      console.log(decoded);
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.get(
        "http://localhost:8080/items?_expand=images&userId=notMyId",
        { headers }
      );
      setItems(result.data);
      console.log(result.data);
      setLoading(false);
      console.log(result.data);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  let urlbad = items[currentItemIndex]["images_url"];
  let urls = JSON.parse(urlbad);
  urls = urls.map(path => path.replace(/\\/g, '/'));
  urls = urls.map(url => url.replace('public/', ''));
  console.log(urls);

  return (
    <div className="swap-container">
      <MainMenu />
      <div className="swap-card">
        <div className="image-slider">
          <div className="image-slider__image-container">
          
              <img
                src={`http://localhost:8080/${urls[currentImageIndex]}`}
                alt="slider"
                className="slider-image"
              />
          </div>
          <button
            className="left-arrow-button"
            disabled={currentImageIndex === 0}
            onClick={handlePrevImage}
          >
            &#x276E;
          </button>
          <div className="dot-container">
            {urls.reverse().map((image, index) => (
              <span
                key={image}
                className={`dot ${
                  index === currentImageIndex ? "dot-active" : ""
                }`}
              />
            ))}
          </div>
          <button
            className="right-arrow-button"
            disabled={
              currentImageIndex === items[currentItemIndex].images.length 
            }
            onClick={handleNextImage}
          >
            &#x276F;
          </button>
        </div>
        <h3 className="itemt-title">{items[currentItemIndex].title}</h3>
        <p>{items[currentItemIndex].description}</p>
        <div className="choice-container">
          <img src={heart} alt="" className="heart" onClick={handleNextItemHeart} />
          <img src={cross} alt="" className="cross" onClick={handleNextItem} />
        </div>
      </div>
    </div>
  );
};

export default SwapMain;

