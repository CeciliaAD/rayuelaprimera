import React from "react";
import styles from "./starBackground.module.css";

const StarBackground = () => {

const generateRandomStars = (numStars) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(
      <div 
        key={i}
        className={styles.star}
        style={{
          top: `${Math.floor(Math.random() * 100)}vh`,
          left: `${Math.floor(Math.random() * 100)}vw`,
          animationDelay: `${Math.random() * 10 }s`, 
        }}
        ></div>
    );
  }
  return stars;
}
return <div className={styles.starrySky}>{generateRandomStars(100)}</div>;
};

export default StarBackground;