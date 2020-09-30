import React from "react";
import "./LinkImage.css";
import BoundingBox from "../BoundingBox/BoundingBox";

const LinkImage = ({ showImage, blueBox }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="image" alt="" src={showImage} width="700px" height="auto" />
        {blueBox.map((box, i) => (
          <BoundingBox box={box} key={i} />
        ))}
      </div>
    </div>
  );
};

export default LinkImage;
