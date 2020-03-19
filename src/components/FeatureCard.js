import React from 'react';
import Icon from "../images/placeholder.png";


export default function FeatureCard(props){

    let cardStyle = {
        marginTop: "20px",
        padding: "20px",
        boxShadow: "0px 2px 10px #bbb"
    }

    let cardIcon = {
        width: "50px",
        height: "50px",
    }

    return (
        <div style={cardStyle}>
            <img style={cardIcon} className="img-fluid mt-3 mx-auto" src={Icon} alt="card-icon" />
            <h5 className="font-weight-bold mt-4">{props.title}</h5>
            <h6 className="text-secondary font-weight-normal mt-4">{props.description}</h6>
        </div>
    )
}