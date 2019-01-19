import React, { Component } from "react";
import {
  getProgrammingQuoteByIndex,
  getProgrammingQuotes
} from "./../../services/fakeQuoteService";

class Quotes extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.state = {
      programmerQuotes: [],
      currentQuote: "",
      currentAuthor: "",
      whoHeIs: ""
    };
  }

  componentDidMount() {
    const programmerQuotes = getProgrammingQuotes();
    console.log("QUOTES", programmerQuotes);
    const currentQuote = programmerQuotes[0];
    const currentAuthor = currentQuote.author;
    const whoHeIs = currentQuote.whoHeIs;
    this.setState({ programmerQuotes, currentQuote, currentAuthor, whoHeIs });
  }

  render() {
    return (
      <div id="quotes">
        <div className="programmers-quotes-header">
          <h3>Programmer's Quotes</h3>
          <h4>Wisdom Nuggets</h4>
        </div>
        <div className="programmers-quotes">
          <blockquote>
            <p>{this.state.currentQuote.quote}</p>
          </blockquote>
          <cite>
            <span>~{this.state.currentAuthor}</span>
            <br />
            {this.state.whoHeIs}
          </cite>
        </div>
      </div>
    );
  }
}

export default Quotes;
