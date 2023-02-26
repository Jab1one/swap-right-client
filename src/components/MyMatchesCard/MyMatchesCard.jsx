import React from "react";
import "./MyMatchesCard.scss";
import icon from "../../assets/images/5.png";
import match from "../../assets/images/match.png";

const MyMatchesCard = (props) => {
  const handleCardClick = () => {
    window.location.href = `mailto:${props.email}`;
  };
  return (
    <div
      className="match-card-container"
      key={props.keyid}
      onClick={handleCardClick}
    >
      <img
        src={icon}
        className="match-card-container__delete"
        onClick={() => props.openModal(props.id)}
      />
      <img src={match} className="match-card-container__image" />
      <p className="my-match-title">
        You matched with one of {props.name}'s item. Click on this card to get
        in touch with {props.name}{" "}
      </p>
    </div>
  );
};

export default MyMatchesCard;
