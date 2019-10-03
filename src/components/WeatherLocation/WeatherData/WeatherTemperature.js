import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../../constants/weathers';
import { Row, Col } from 'react-bootstrap';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
}

const getWeatherIcon = weatherState => {
    var icon = icons[weatherState]
    var iconSize = "2x";

    if(!icon) icon = icons[SUN];

    return <WeatherIcons className = "wicon" name={icon} size={iconSize}></WeatherIcons>
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <Row>
        <Col>
            {getWeatherIcon(weatherState)}
        </Col>
        <Col>
            <span className="temperature">{temperature}</span>
            <span className="temperatureType">Cº</span>
        </Col>
    </Row>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;