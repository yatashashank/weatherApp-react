import React, { Component } from 'react';


class Weather extends Component {
    render() {
        return (
            <div className="weather__info">
                {
                    this.props.details.city && this.props.details.country && <p className="weather__key">Place:
                    <span className="weather__value">{this.props.details.city},{this.props.details.country}</span>
                    </p>
                }
                {
                    this.props.details.temp && <p className="weather__key">Temperature:
                    <span className="weather__value">{this.props.details.temp}</span>
                    </p>
                }
                {
                    this.props.details.humidity && <p className="weather__key">Humidity:
                    <span className="weather__value">{this.props.details.humidity}</span>
                    </p>
                }
                {
                    this.props.details.windspeed && <p className="weather__key">WindSpeed:
                    <span className="weather__value">{this.props.details.windspeed}</span>
                    </p>
                }
                {
                    this.props.details.description && <p className="weather__key">Description:
                    <span className="weather__value">{this.props.details.description}</span>
                    </p>
                }
                {
                    this.props.details.error && <p className="weather__key">
                        <span className="weather__error">{this.props.details.error}</span>
                    </p>
                }
            </div>

        );
    }
}

export default Weather;
