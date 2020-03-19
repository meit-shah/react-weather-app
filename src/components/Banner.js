import React from 'react';

import Background from '../images/banner.png';
import { Link } from "react-router-dom";

export default function Banner(props){
    let bannerStyle = {
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
    }

    return (
        <div style={bannerStyle} className="container-fluid">
            <div className="row py-5">
                <div className="col my-5">
                    <h1 className="mt-5 pt-4 mb-3 font-weight-bold text-center text-white">{props.title}</h1>
                    <h3 className="lead my-5 text-center text-white">{props.subTitle}</h3>
                    <Link to="/weather"><button className="btn btn-lg btn-success">{props.buttonText}</button></Link>
                </div>
            </div>
        </div>
    )
}