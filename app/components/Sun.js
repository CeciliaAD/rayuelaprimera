"use client"; // This is a client component 
import React, {useEffect, useState } from "react";
import "./sunContainer.module.css";

const Sun = ({ sunrise, sunset }) => {
  const [currentTime, setCurrentTime] = useState (new Date());

  useEffect (() => {
    const timer = setInterval (() => {
      setCurrentTime (new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const totalMinutes = (date) => date.getHours () * 60 + date.getMinutes();
  const sunriseMinutes = totalMinutes (new Date (sunrise));
  const sunsetMinutes = totalMinutes (new Date(sunset));
  const currenMinutes = totalMinutes (currentTime);

  let sunPosition = "0%";
  if (currenMinutes < sunriseMinutes || currenMinutes > sunsetMinutes) {
    sunPosition = "50%";
    console.log(sunPosition);
  } else if (currenMinutes >= sunriseMinutes && currenMinutes <= sunsetMinutes) {
    const daylightDuration = sunsetMinutes - sunriseMinutes;
    const currentDaylightElapsed = currenMinutes - sunriseMinutes;
    const percentageOfDayLightElapsed = (currentDaylightElapsed / daylightDuration) * 100;
    sunPosition = `${percentageOfDayLightElapsed}%`;
   
  }
  return (
      <div className="sun" style={{ left: sunPosition }}>
         <img src="../../public/luna.jpg" alt="Luna"/>
      </div>
 
  );
};

export default Sun;