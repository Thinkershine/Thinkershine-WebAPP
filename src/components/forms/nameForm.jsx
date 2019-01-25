import React, { Component } from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Please enter Your name",
      nameClicked: false,
      messageArea: "Here You Can Write an message.",
      messageClicked: false,
      submitted: { name: "", message: "", submitted: false }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameInputClick = this.handleNameInputClick.bind(this);
    this.handlemessageAreaChange = this.handlemessageAreaChange.bind(this);
    this.handlemessageAreaClick = this.handlemessageAreaClick.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handlemessageAreaChange(event) {
    this.setState({ messageArea: event.target.value });
  }

  handlemessageAreaClick(event) {
    this.setState({ messageArea: "" });
  }

  handleSubmit(event) {
    console.log("SUBMIT");
    this.setState({
      submitted: {
        name: this.state.name,
        message: this.state.messageArea,
        submitted: true
      }
    });
    event.preventDefault();
  }

  handleNameInputClick(event) {
    this.setState({ name: "" });
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
                value={this.state.messageArea}
                placeholder={this.state.messageArea}
                onChange={this.handlemessageAreaChange}
                onClick={this.handlemessageAreaClick}
              />
            </label>
          </div>
          <input type="submit" value="submit" className="btn btn-success" />
        </form>
        {this.state.submitted.submitted && (
          <div className="cointainer">
            {" "}
            Name: {this.state.submitted.name} <br />
            message: {this.state.submitted.message}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default NameForm;
