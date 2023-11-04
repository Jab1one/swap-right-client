import "./SwapMain.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import MainMenu from "../../components/MainMenu/MainMenu";
import heart from "../../assets/images/2.png";
import cross from "../../assets/images/5.png";
import ppl from "../../assets/images/ppl.png";

let url = process.env.REACT_APP_SERVER_URL;

const SwapMain = () => {
  const [loading, setLoading] = useState(true);

  const [items, setItems] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [newMatch, setNewMatch] = useState(null);

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
        `${url}likes`,
        { itemId: items[currentItemIndex].item_id },
        { headers }
      );

      if (result.data.user1_name && result.data.user2_name) {
        setNewMatch(result.data);
      }

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

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.get(
        `${url}items?_expand=images&userId=notMyId`,
        { headers }
      );
      setItems(result.data);

      setLoading(false);
    };

    fetchData();
  }, []);

  // if (loading) {
  //   return (
  //   <>
  //     <MainMenu />
  //     <div className="swap-load">Loading...</div>
  //   </>
  //   )
  // }

  let urlbad = items[currentItemIndex]["images_url"];
  let urls = JSON.parse(urlbad);
  urls = urls.map((path) => path.replace(/\\/g, "/"));
  urls = urls.map((url) => url.replace("public/", ""));

  return (
    <div className="swap-container">
      <MainMenu />
      <div className="swap-card">
        {newMatch && (
          <div className="custom-alert">
            <img src={ppl} className="custom-alert__image" />
            <h2 className="custom-alert__title">AWESOME!</h2>
            <p className="custom-alert__text">
              You and {newMatch.user2_name} liked each other's item. go to the
              Matches tab to get in touch and finalize a swap!
            </p>
            <p
              className="custom-alert__button"
              onClick={() => setNewMatch(null)}
            >
              Got it
            </p>
          </div>
        )}
        <div className="image-slider">
          <div className="image-slider__image-container">
            <img
              src={`${url}${urls[currentImageIndex]}`}
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

          {urls.length > 1 && (
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
          )}
          <button
            className="right-arrow-button"
            disabled={currentImageIndex === urls.length - 1}
            onClick={handleNextImage}
          >
            &#x276F;
          </button>
        </div>
        <h3 className="itemt-title">{items[currentItemIndex].title}</h3>
        <p>{items[currentItemIndex].description}</p>
        <div className="choice-container">
          <img
            src={heart}
            alt=""
            className="heart"
            onClick={handleNextItemHeart}
          />
          <img src={cross} alt="" className="cross" onClick={handleNextItem} />
        </div>
      </div>
    </div>
  );
};

export default SwapMain;
