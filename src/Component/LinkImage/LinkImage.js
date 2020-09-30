import React from "react";
import BoundingBox from "../BoundingBox/BoundingBox";

const LinkImage = ({ showImage, blueBox }) => {
  console.log({blueBox});
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={showImage} width="500px" height="auto" />
        {blueBox.map((box, i) => (
          <BoundingBox box={box} key={i} />
        ))}
      </div>
    </div>
  );
};

export default LinkImage;
