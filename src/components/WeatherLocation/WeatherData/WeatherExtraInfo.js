import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => {
    return (
        <Row>
            <Col>
                <span className="extraInfoText">{`Humedad: ${humidity} %`}</span>
            </Col>
            <Col>
                <span className="extraInfoText">{`Viento: ${wind} kt.`}</span>
            </Col>
        </Row>
    );
}

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
}

export default WeatherExtraInfo;