import React, { Component } from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formName: "Please enter Your name", textArea: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  handleChange(event) {
    this.setState({ formName: event.target.value });
  }
  handleTextAreaChange(event) {
    this.setState({ textArea: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "A name was submitted: " +
        this.state.formName +
        "with an Essay: " +
        this.state.textArea
    );
    event.preventDefault();
  }

  handleInputClick(event) {
    this.setState({ formName: "" });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h2>What's Your Name?</h2>
          <label>
            Name:
            <input
              type="text"
              value={this.state.formName}
              onChange={this.handleChange}
              onClick={this.handleInputClick}
            />
          </label>
          <label>
            Essay:
            <textarea
              value={this.state.textArea}
              onChange={this.handleTextAreaChange}
            />
          </label>
          <input type="submit" value="submit" />
        </form>
        <div className="cointainer">
          {" "}
          Name: {this.state.formName} <br />
          Essay: {this.state.textArea}
        </div>
      </React.Fragment>
    );
  }
}

export default NameForm;
