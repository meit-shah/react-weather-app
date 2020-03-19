import React from 'react';
import FeatureSection from '../components/FeatureSection';
import Banner from '../components/Banner';

export default function MainPage(props){
    return (
        <div>
            <Banner data={props.data} title="Climate is what we expect. Weather is what we get." subTitle="We provide best possible weather analysis across the globe" buttonText="Check Weather" />
            <FeatureSection title="We Provide You With Various Features" subTitle="Get current location weather, past queries, history from our application" />
        </div>
    )
}