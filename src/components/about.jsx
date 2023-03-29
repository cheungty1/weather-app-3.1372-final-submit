// Import packages from React
import React, { Component } from 'react';

// Create - About Commponent
class About extends Component {
  state = {};

  // Store TwitterName as prop
  render() {
    const { twitterName } = this.props;
    
// About page - text description
    return (
      <div className="container p-3">
        <div className="row">
          <div className="col-sm-8 col-md-7 py-4 about-info">
            <h4>About</h4>
            <p className="text-muted">
             Using ReactJS and linked to a public weather + unsplash image API, this weather app allows users to search for current weather and 3 day forecasts for major cities around the world.
            </p>
            <a
              href="https://github.com/robertoduessmann/weather-api"
              className="p-1 font-weight-normal"
             >API: WeatherAPI - Github</a>
          </div>
          <div className="col-sm-4 offset-md-1 py-4 about-info">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="http://www.twitter.com"
                  className="p-1 font-weight-normal"
                >
                  Follow on Twitter @{twitterName}
                </a>
              </li>
              <li>
                <a
                  href="mailto:cheungty1@hotmail.com"
                  className="p-1 font-weight-normal"
                >
                  Email me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
