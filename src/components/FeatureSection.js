import React from 'react';
import FeatureCard from './FeatureCard';
import { Link } from "react-router-dom";

export default function FeatureSection(props){

    let sectionStyle = {
        padding: "6rem 1rem"
    }
  
    let sectionTitle = {
        fontSize: "2.5rem"
    }

    return (
        <section style={sectionStyle}>
            <h2 style={sectionTitle}>{props.title}</h2>
            <h6 className="text-secondary mt-4">{props.subTitle}</h6>
            <div className="container my-5">
                <div className="row">
                <div className="col-sm-4">
                    <Link to="/weather"><FeatureCard title="Find Weather" description="Check weather statistics" /></Link>
                </div>
                <div className="col-sm-4">
                    <FeatureCard title="Weather History" description="Check past days weather" />
                </div>
                <div className="col-sm-4">
                    <Link to="/searchhistory"><FeatureCard title="Past Query" description="Check your search history" /></Link>
                </div>
                </div>
            </div>
        </section>
    )
}