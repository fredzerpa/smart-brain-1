import React from "react";
import Icon from "./Icon.png";
import Tilt from "react-tilt";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="pa4">
      <Tilt
        className="Tilt pa3 shadow-2 br4"
        options={{ max: 30 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img className="" src={Icon} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
