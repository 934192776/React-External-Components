import React from "react";
import ReactDOM from "react-dom";
import ReactAnimatedWeather from "react-animated-weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React External Components</h1>

      <h3>Challenge 1</h3>
      <p>
        Import and render this component{" "}
        <a href="https://www.npmjs.com/package/react-animated-weather">
          https://www.npmjs.com/package/react-animated-weather
        </a>
      </p>
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        size={48}
        animate={true}
        color="red"
      />

      <br />
      <h3>Challenge 2</h3>
      <p>
        Display 3 different icons and change the properties for each of them{" "}
      </p>

      <ReactAnimatedWeather
        icon="WIND"
        size={78}
        animate={true}
        color="green"
      />

      <ReactAnimatedWeather
        icon="PARTLY_CLOUDY_DAY"
        size={58}
        animate={true}
        color="blue"
      />

      <ReactAnimatedWeather
        icon="SNOW"
        size={80}
        animate={true}
        color="purple"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
