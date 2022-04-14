import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [data, setData] = useState();
  const secret = process.env.REACT_APP_OPEN_WEATHER_APP_SECRET;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${state},${country}&APPID=${secret}`
    );
    setData(res);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="state"
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="country"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <input type="submit" value="send" onClick={handleSubmit} />
      </form>

      <h3>Weather update for {data?.data?.name}</h3>
      <h3>Temperature update for {data?.data?.main?.temp}</h3>
    </div>
  );
};

export default App;
