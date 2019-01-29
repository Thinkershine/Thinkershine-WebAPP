import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class GuestBookForm extends Form {
  state = {
    data: { name: "", message: "" },
    errors: ""
  };

  schema = {
    name: Joi.string()
      .required()
      .min(5)
      .max(30)
      .label("Name"),
    message: Joi.string()
      .required()
      .min(5)
      .max(250)
      .label("Message")
  };

  doSubmit = () => {
    const { data } = this.state;
    const message = {
      name: data.name,
      message: data.message
    };
    console.log("You've Got New Message", message);
  };

  render() {
    return (
      <div>
        <h1>Guest Book</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("message", "Message")}
          {this.renderButton("Leave a Message")}
        </form>
      </div>
    );
  }
}

export default GuestBookForm;
