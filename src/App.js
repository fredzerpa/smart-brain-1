import React, { Component } from "react";
import Clarifai from "clarifai";
import "./App.css";
import Navigation from "./Component/Navigation/Navigation";
import LinkImage from "./Component/LinkImage/LinkImage";
import Logo from "./Component/Logo/Logo";
import ImageLinkSearch from "./Component/ImageLinkSearch/ImageLinkSearch";
import Particles from "react-particles-js";
import Rank from "./Component/Rank/Rank";

const app = new Clarifai.App({
  apiKey: "7dd8f6db05334094a7d9c28a1cebeba0",
});

const particlesOption = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 900,
      },
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 5,
    },
    retina_detect: {
      enable: true,
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageLink: "",
      box: {},
    };
  }

  detectFaceLocation = (data) => {
    const image = document.getElementById("image");
    const width = Number(image.width);
    const height = Number(image.height);
    const allFaceLocation = data.outputs[0].data.regions;
    const boundingBoxes = allFaceLocation.map((element) => {
      const faceLocation = element.region_info.bounding_box;
      return {
        leftCol: faceLocation.left_col * width,
        topRow: faceLocation.top_row * height,
        rightCol: width - faceLocation.right_col * width,
        bottomRow: height - faceLocation.bottom_row * height,
      };
    });
    return boundingBoxes;
  };

  detectFaceUsingLocation = (box) => {
    console.log(this.state.box);
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonClick = () => {
    this.setState({ imageLink: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
        this.detectFaceUsingLocation(this.detectFaceLocation(response))
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Particles params={particlesOption} className="particles" />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkSearch
          onInputChange={this.onInputChange}
          onButtonClick={this.onButtonClick}
        />
        <LinkImage blueBox={this.state.box} showImage={this.state.imageLink} />
      </div>
    );
  }
}

export default App;
