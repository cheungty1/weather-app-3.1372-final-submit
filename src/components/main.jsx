// Import packages from React and React-Bootstrap
import React, { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';

// Main function - Destructure data state nested object properties
function Main(props) {
  const { results, results2, query } = props;

  // saves component state and store functions to handle functionality of buttons
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (data) => {
    setModalData(data)
    setShow(true);
  }

  // WeatherSymbol function - to store correct weather symbols that correspond to fetched result from API
  let symbol;
  const weatherSymbol = (description) => {
    switch (description) {
      case 'Sunny':
        symbol = '☀️';
        return symbol;
      case 'Light rain':
        symbol = '🌦';
        return symbol;
      case 'Light rain shower':
        symbol = '🌦';
        return symbol;
      case 'Partly cloudy':
        symbol = '⛅️';
        return symbol;
      case 'Moderate snow':
        symbol = '❄️';
        return symbol;
      case 'Clear':
        symbol = '🌞';
        return symbol;
      default:
        symbol = '';
        return symbol;
    }
  };

  // WeekDay Array - to show weather correct weekdate for weather forecast
  const weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Create new variable from Date object. Date() constructor can create a Date instance or return a string representing the current time
  const d = new Date();

  // CSS style - of background image that corresponds to searched city
  const containerStyle = {
    width: '100vw',
    height: '53vh',
    backgroundImage: "url('http://source.unsplash.com/1600x900/?" + query + "')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  // Main page - text description and show fetched weather forecasts/results
  return (
    <React.Fragment>
      <div className="container-fluid" style={containerStyle}></div>
      <div className="container">
        <div className="row">
          <div className="col mt-2">
            <div className="weather-info">
              <h1 className="weather-description">{results.description}</h1>
              <h1 className="weather-symbol">{weatherSymbol(results.description)}</h1>
              <h1 className="weather-temp">{results.temperature}</h1>
              <h1 className="weather-wind">{results.wind}</h1>
              <hr></hr>
            </div>

            {/* Weather forecasts - map over results and display weather forecasts in bootstrap cards
             */}
            {results2 &&
              results2.map((weatherData, index) => (
                <div key={index} className="card" data-testid={`weatherFact-${index}`}>
                  <div className="card-body">
                    <h5 className="card-title">{weekday[d.getDay() + index++]}</h5>
                    <h6 className="card-title">{'Day ' + weatherData.day}</h6>
                    <p className="card-text">{'Temperature: ' + weatherData.temperature}</p>
                    <p className="card-text">{'Wind Speed: ' + weatherData.wind}</p>
                    <>
                      <Button variant="primary" onClick={() => handleShow(weatherData)}>
                        More info
                      </Button>
                    </>
                  </div>
                </div>
              ))}

            {/* Bootstrap modal - showing the corresponding forecasts of each day*/}
            <>
              <div className="card">
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title><h5 className="card-title">Forecast</h5></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <h6 className="card-title">{'Day ' + modalData.day}</h6>
                    <p className="card-text">{'Temperature: ' + modalData.temperature}</p>
                    <p className="card-text">{'Wind Speed: ' + modalData.wind}</p>
                    </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;
