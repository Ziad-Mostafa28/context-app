import React, { useEffect, useState } from "react";
import "./App.css";
import { homeContext } from "./store/homeContext";
import axios from "axios";
// import "bootstrap";
import Home from "./pages/Home/Home";

const App = () => {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    async function getHomeData() {
      const response = await axios.get(
        "https://uat-iconcreations.com/2022/gem/public/api/web/home"
      );
      setHomeData(response.data.data);
      console.log(response.data.data);
    }
    getHomeData();
  }, []);

  return (
    <homeContext.Provider value={homeData}>
      <Home />
    </homeContext.Provider>
  );
};

export default App;
