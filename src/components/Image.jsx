//with UnsplashPage
import React from "react";

const Image = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <p className="photographer">{data.user.name}</p>
        <a target="_blank" href={data.links.download}>
          <img src={data.urls.regular} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Image;
