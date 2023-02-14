

import React from "react";
import "./MyItemCard.scss";
import icon from"../../assets/images/5.png"


const MyItemCard = (props)=> {

  return (
    
    <div className="card-container" key={props.key} >
      <img src={icon} className="card-container__delete" onClick={() => props.openModal(props.id)}/>
      <img src={`http://localhost:8080/${props.url}`} className="card-container__image"/>
      <div className="card-container__text">
        <h3 className="my-item-title">{props.title}</h3>
        <p className="my-item-description">{props.description}</p>
      </div>
    </div>
    
  )
}

export default MyItemCard;