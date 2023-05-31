import React from "react";
import homeImage from "../assets/home_meme.jpg";

const HomePage = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="homeContainer">
        <h1>Do you have problems with choosing the image? </h1>
        <img src={homeImage} alt="homepage_image" />
        <h3> Click the top right corner to solve your problems! </h3>
      </div>
    </div>
  );
};

export default HomePage;
