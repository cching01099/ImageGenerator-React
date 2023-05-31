//with HomePage
import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <p className="photographer">{data.photographer}</p>
        <a target="_blank" href={data.src.large}>
          <img src={data.src.large} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Picture;
