import React, { Component } from "react";
import Unsplash from "unsplash-js";

class UnsplashBackground extends Component {
  state = {};

  constructor(props) {
    super(props);

    const unsplash = new Unsplash({
      applicationID:
        "4a0419ad170152be097521dd673281b786d34fc36c2958bba544bdf33c73dfc6",
      secret: "189fc829d9bb954f2057299d3c39fd3c603e389d508e128af4b2e3f740caa7cf"
    });
  }
  render() {
    return <h>Unsplash</h>;
  }
}

export default UnsplashBackground;
