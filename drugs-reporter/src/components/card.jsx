import React from 'react';
import './card.css';
function Card(props) {
  return (
    <div className="row">
      <div className="col-2 tab">{props.name}</div>
      <div className="col-2 tab">{props.email}</div>
      <div className="col-2 tab">{props.location}</div>
      <div className="col-2 tab">{props.pincode}</div>
      <div className="col-2 tab">{props.type}</div>
      <div className="col-2 tab">{props.description}</div>
    </div>
  );
}

export default Card;
