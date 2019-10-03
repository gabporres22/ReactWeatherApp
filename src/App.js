import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import WeatherLocation from './components/WeatherLocation';

function App() {
  return (
    <Container fluid={true}>
      <Row className="App">
        <Col>
            <Row>
              <h3>Weather City</h3>
            </Row>
            <WeatherLocation></WeatherLocation>
        </Col>

        <Col>
          <h3>Weather Prediction</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
