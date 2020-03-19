import React from 'react';
import './App.css';
import Axios from 'axios';
import DisplayWeather from './components/DisplayWeather';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';
import MainPage from './Pages/MainPage';
import Login from './Pages/Login';
import SearchHistory from './Pages/SearchHistory';


class App extends React.Component {

  state = {
    coords: {
      latitude: 55,
      longitude: 70
    },
    data: {},
    locationInput: "",
    localDataStorage: []
  }

  componentDidMount(){
    // get device location
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        let updatedCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }

        this.setState({coords: updatedCoords});

        //Axios Call
        Axios.get(`http://api.weatherstack.com/current?
        access_key=b826b47625a0029a26bc88d4c0545efe&query=${this.state.coords.latitude},
        ${this.state.coords.longitude}`).then(res => {

          // console.log(res.data);

          let weatherData = {
            location: res.data.location.name,
            temperature: res.data.current.temperature,
            feelslike: res.data.current.feelslike,
            humidity: res.data.current.humidity,
            pressure: res.data.current.pressure,
            visibility: res.data.current.visibility,
            uvindex: res.data.current.uv_index,
            windspeed: res.data.current.wind_speed,
            description: res.data.current.weather_descriptions[0],
            region: res.data.location.region,
            country: res.data.location.country,
            img: res.data.current.weather_icons
          }

          this.setState({ data: weatherData });

        }
        );
      });
    } else {
      console.log("geolocation is not supported");
    }
  }

 // input location changing 
  change = (location) => {
    this.setState({ locationInput : location })
  }

  changeWeather = (event) => {
    event.preventDefault();
     //Axios Call
    Axios.get(`http://api.weatherstack.com/current?
    access_key=b826b47625a0029a26bc88d4c0545efe&query=${this.state.locationInput}`).then(res => {

    let weatherData = {
      location: res.data.location.name,
      temperature: res.data.current.temperature,
      feelslike: res.data.current.feelslike,
      humidity: res.data.current.humidity,
      windspeed: res.data.current.wind_speed,
      visibility: res.data.current.visibility,
      uvindex: res.data.current.uv_index,
      pressure: res.data.current.pressure,
      description: res.data.current.weather_descriptions[0],
      region: res.data.location.region,
      country: res.data.location.country,
      img: res.data.current.weather_icons
    }

    this.setState({ data: weatherData });

    // entering locations into localstorage as JSON objects

    // localStorage.setItem("localData", JSON.stringify(this.state.data));
    // let localData = localStorage.getItem("localData");
    let appendLocalData = this.state.localDataStorage.concat(JSON.stringify(this.state.data));
    this.setState({ localDataStorage: appendLocalData });
    
    })
  } 

  render(){
    return (
      <div className="App">
        <Navbar data={this.state.data} brandName="Weather App" username="Meit" />
        <Router>
          <Switch>
            <Route exact path = "/"> <Login /> </Route>
            <Route exact path="/home"> <MainPage data={this.state.data} /> </Route>
            <Route exact path="/weather">
              <DisplayWeather weatherData={this.state.data} changeWeather={this.changeWeather} changeLocation={this.change} />
            </Route>
            <Route exact path="/searchhistory">
              <SearchHistory localData={this.state.localDataStorage} />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;