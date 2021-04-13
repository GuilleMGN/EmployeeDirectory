import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <div className="card">
            <div><img src={props.image} alt="profile-img"/></div>
            <div>{props.first} {props.last}</div>
            <div>{props.phone}</div>
            <div>{props.email}</div>
            <div>{props.age}</div>
        </div>
    );
}

export default Card;