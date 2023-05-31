//with PixabayPage
import React from "react";

const Photo = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <p className="photographer">{data.user}</p>
        <a target="_blank" href={data.largeImageURL}>
          <img src={data.largeImageURL} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Photo;
