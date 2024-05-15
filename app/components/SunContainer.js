"use client"; // This is a client component 
import React, {useState, useEffect} from "react";
import Sun from "./Sun";

const SunContainer = () => {
  const [sunData, setSunData] = useState(null);

  useEffect (() => {
    const fetchSunData = async () => {
      try {
        const response = await fetch ('https://api.sunrise-sunset.org/json?formatted=0&lat=40.7128&lng=-74.0060');
        const data = await response.json ();
        setSunData (data.results);
        console.log (sunData.sunrise);
        console.log (setSunData(data.results));
        setLoading(false);
      } catch (error) {
        console.log ("Error fetching sun data: ", error);
      }
    };
    fetchSunData();
  }, []);
  return (
    <div className="sunContainer">
      {sunData && sunData.sunrise && sunData.sunset && (
     // <Sun  />
      )}
    </div> 
  );
};

export default SunContainer;