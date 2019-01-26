import React, { Component } from "react";

class GuestBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Please enter Your name",
      nameClicked: false,
      messageArea: "Here You Can Write an message.",
      messageClicked: false,
      howYouLikeThisSite: "I'll Tell About It To My Friends!",
      submitted: {
        name: "",
        message: "",
        submitted: false,
        howYouLikeThisSite: ""
      },
      iWillReturn: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameInputClick = this.handleNameInputClick.bind(this);
    this.handleMessageAreaChange = this.handleMessageAreaChange.bind(this);
    this.handleMessageAreaClick = this.handleMessageAreaClick.bind(this);
    this.handleSiteLike = this.handleSiteLike.bind(this);
  }

  handleChange(event) {
    console.log("CHANGE");
    const target = event.target;

    const nameValue =
      target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      name: event.target.nameInput,
      message: event.target.message
    });
  }

  handleMessageAreaChange(event) {
    this.setState({ messageArea: event.target.value });
  }

  handleMessageAreaClick(event) {
    this.setState({ messageArea: "" });
  }

  handleSubmit(event) {
    console.log("SUBMIT");
    this.setState({
      submitted: {
        name: this.state.name,
        message: this.state.messageArea,
        howYouLikeThisSite: this.state.howYouLikeThisSite,
        submitted: true
      }
    });
    event.preventDefault();
  }

  handleNameInputClick(event) {
    this.setState({ name: "" });
  }

  handleSiteLike(event) {
    this.setState({ howYouLikeThisSite: event.target.value });
    console.log("Handle Site Like", event.target.value);
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h1>GuestBook</h1>
          <h2>What's Your Name?</h2>
          <div className="form-group">
            <label>
              Name:
              <input
                className="form-control"
                name="nameInput"
                type="text"
                value={this.state.name}
                placeholder={this.state.name}
                onChange={this.handleChange}
                onClick={this.handleNameInputClick}
              />
              <small className="form-text text-muted">Say Hi!</small>
            </label>
          </div>
          <div className="form-group">
            <label>
              Message:
              <textarea
                className="form-control"
                name="message"
                value={this.state.messageArea}
                placeholder={this.state.messageArea}
                onChange={this.handleMessageAreaChange}
                onClick={this.handleMessageAreaClick}
              />
            </label>
          </div>
          <div className="form-group">
            <select
              value={this.state.howYouLikeThisSite}
              onChange={this.handleSiteLike}
              className="form-control"
            >
              <option value="It's Awesome!">It's Awesome!</option>
              <option value="Fun Site!">Fun Site!</option>
              <option value="I'll Bookmark It Right Now!">
                I'll Bookmark It Right Now!
              </option>
              <option value="I'll Tell About It To My Friends!">
                I'll Tell About It To My Friends!
              </option>
            </select>
          </div>
          <div className="form-group">
            <input type="file" />
          </div>
          <div className="form-check">
            <label className="form-check-label">I am Going to Return</label>
            <input
              className="form-check-input"
              name="iWillReturn"
              type="checkbox"
              checked={this.state.iWillReturn}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="submit" className="btn btn-success" />
        </form>
        {this.state.submitted.submitted && (
          <div className="cointainer">
            {" "}
            Name: {this.state.submitted.name} <br />
            Message: {this.state.submitted.message}
            <br />
            Your Thoughts on This Site:{" "}
            {this.state.submitted.howYouLikeThisSite}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default GuestBook;
