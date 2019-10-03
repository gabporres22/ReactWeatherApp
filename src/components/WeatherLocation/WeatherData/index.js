import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => {
    return (
        <Row>
            <Col>
                <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
            </Col>
            <Col>
                <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
            </Col>
        </Row>
    );
}

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired
    })
};

export default WeatherData;