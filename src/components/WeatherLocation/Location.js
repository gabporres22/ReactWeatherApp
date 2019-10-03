import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

const Location = ({city}) => (
    <Row>
        <h1>{city}</h1>
    </Row>
);

Location.propTypes = {
    city: PropTypes.string.isRequired
};

export default Location;