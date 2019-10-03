import React, {Component} from 'react';
import Alert from 'react-bootstrap/Alert';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../constants/weathers';
import { Row, Container, Button } from 'react-bootstrap';

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: "Buenos Aires",
            data: {
                temperature: 25,
                weatherState: SUN,
                humidity: 80.5,
                wind: 25
            }
        }
    }

    updateData = () => {
        this.setState({
            city: "Cordoba",
            data: {
                ...this.state.data,
                temperature: 40,
                weatherState: WINDY
            }
        });
    } 

    render() {
        const {city, data} = this.state;

        return (
            <Alert variant="dark">
                <Location city={city}></Location>
                <hr></hr>
                <WeatherData data={data}></WeatherData>
                <hr></hr>
                <Button onClick={this.updateData}>Refresh !</Button>
            </Alert>
        );
    }
}

export default WeatherLocation;