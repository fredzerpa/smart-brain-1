import React from "react";
import "./ImageLinkSearch.css";

const ImageLinkSearch = ({ onInputChange, onButtonClick }) => {
  return (
    <div>
      <p className="f3">
        {`This Magic Mind will detect faces in your pictures. Give it a try...`}
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            className="bw0 f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="bw0 w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonClick}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkSearch;
