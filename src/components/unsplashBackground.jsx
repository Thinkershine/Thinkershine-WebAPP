import React, { Component } from "react";
import Unsplash, { toJson } from "unsplash-js";

class UnsplashBackground extends Component {
  state = {};

  constructor(props) {
    super(props);

    const unsplash = new Unsplash({
      applicationID:
        "4a0419ad170152be097521dd673281b786d34fc36c2958bba544bdf33c73dfc6",
      secret:
        "189fc829d9bb954f2057299d3c39fd3c603e389d508e128af4b2e3f740caa7cf",
      headers: {
        Authorization:
          "4a0419ad170152be097521dd673281b786d34fc36c2958bba544bdf33c73dfc6"
      }
    });

    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      "public",
      "read_user",
      "write_user",
      "read_photos",
      "write_photos"
    ]);

    this.state = {
      unsplash: unsplash,
      authenticationURL: authenticationUrl,
      userPhotos: "raulrosas",
      siteHeight: 0,
      siteWidth: 0
    };
  }

  getRandomPhoto() {
    this.state.unsplash.photos
      .getRandomPhoto(this.state.userPhoto)
      .then(toJson)
      .then(json => {
        console.log("PHOTO?", json);
      });
  }

  renderRandomPhotoForBG() {
    return "https://source.unsplash.com/collection/827743/1920x1080/daily";
  }

  render() {
    return (
      <div id="full-bg">
        <img src={this.renderRandomPhotoForBG()} />
      </div>
    );
  }
}

export default UnsplashBackground;
