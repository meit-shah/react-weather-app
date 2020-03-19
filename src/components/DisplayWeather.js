import React from 'react';
import Background from '../images/banner.png';
import Icon from "../images/placeholder.png";
import '../App.css';
import SearchLocation from './searchLocation';
import HumidityIcon from '../images/humidityIcon.png';
import PressureIcon from '../images/PressureIcon.png';

export default function DisplayWeather(props) {

    // localStorage.setItem("Weather Data", JSON.stringify(props.weatherData));

    // let storage = localStorage.getItem("Weather Data");

    // console.log(storage);

    const {location, temperature, feelslike, pressure, visibility, humidity, uvindex, windspeed, description, country} = props.weatherData;

    let WeatherStyle = {
        backgroundImage: `url(${Background})`,
        color: "#000",
        padding: "6rem 3rem"
    }

    let locationStyle = {
        fontSize: "1rem",
        background: "transparant",
        color: "#fff",
        padding: "20px 10px",
        border:"1px solid #eee",
        borderRadius: "10px"
    }

    let horzintalStyle = {
        marginTop: "3rem",
        border: "0.25px solid #eee"
    }

    return (
        <div className="container-fluid"  style={WeatherStyle}>
            <div className="row d-flex align-items-center">
                <div className="col-sm-9">
                    <h2 className="text-left temperatureStyle">{ temperature }<sup>o</sup>C</h2>
                    <h3 className="text-left font-weight-normal text-white mt-4 feelsLikeStyle">Feels Like : {feelslike}<sup>o</sup>C</h3>
                </div>
                <div className="col-sm-3">
                    <h2 style={locationStyle} className="font-weight-bold mt-4"><img src={Icon} className="weather-icons mx-2" alt="location-icon" /> { location }, { country }</h2>
                </div>
            </div>
            <hr style={horzintalStyle} />
            <div className="row">
                <WeatherInfo title="Description" icon={HumidityIcon} data={description} />
                <WeatherInfo title="Humidity" icon={HumidityIcon} data={humidity} label="%" />
                <WeatherInfo title="Wind Speed" icon={HumidityIcon} data={windspeed} label="km / hr" />
                <WeatherInfo title="UV Index" icon={PressureIcon} data={uvindex} />
                <WeatherInfo title="Visibility" icon={PressureIcon} data={visibility} />
                <WeatherInfo title="Pressure" icon={PressureIcon} data={pressure} label="mm" />
            </div>
            <div className="row mt-5">
                <SearchLocation changeLocation={props.changeLocation} changeWeather={props.changeWeather} />
            </div>
        </div>
    )
}

function WeatherInfo(props){
    return (
        <div className="col-sm-2 col-6 mt-5">
            <img src={props.icon} alt="humidity-icon" className="weather-icons" />
            <h2 className="text-white font-weight-bold weather-info">{ props.data } {props.label}</h2>
            <h5 className="mt-3 text-white font-weight-normal ">{props.title}</h5>
        </div>
    )
}