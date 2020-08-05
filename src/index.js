import React, { useState, useEffect } from "react";
import { BrowserRouter as Route } from 'react-router-dom';
import { Switch} from 'react-router-dom';
import ReactDOM from "react-dom";
import axios from "axios";

import About from "./components/About";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <Navbar />
      <Switch>
      <Route path='/about'>
        <About />
      </Route>

      <Route exact path='/'>
        <Charts coinData={coinData} />
      </Route>
      </Switch>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Route><App /></Route>, rootElement);
