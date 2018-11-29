import React, { Component } from 'react';


import './App.css';
import Weather from './components/Weather';
import Form from './components/Form';
import Titles from './components/Titles';


const sandy = 'Hi';
const KEY = '79d7195b3cd2d703688c107e26713bd8';

class App extends Component {
  state = {
    details: {
      city: undefined,
      country: undefined,
      temp: undefined,
      humidity: undefined,
      windspeed: undefined,
      description: undefined,
      error: undefined
    }
  }


  getWeather = async (e) => {
    e.preventDefault();
    let City = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    e.target.reset();

    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City},${country}&appid=${KEY}&units=metric`);
    const data = await apiCall.json();
    if (City && country) {
      this.setState({
        details: {
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          humidity: data.main.humidity,
          windspeed: data.wind.speed,
          description: data.weather[0].description,
          error: ""

        }
      })
    } else {
      this.setState({
        details: {
          city: undefined,
          country: undefined,
          temp: undefined,
          humidity: undefined,
          windspeed: undefined,
          description: undefined,
          error: "Please enter the city and country"
        }

      })
    }
  }

  render() {
    return (
      <div >
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-5 title-container'>
                  <Titles />
                </div>
                <div className='col-xs-7 form-container'>
                  <Form getWeather={this.getWeather} cityForm={this.state.details.cityForm} />
                  <Weather details={this.state.details} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
