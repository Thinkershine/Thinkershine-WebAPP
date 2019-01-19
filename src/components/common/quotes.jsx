import React, { Component } from "react";
import {
  getProgrammingQuotes,
  getRandomProgrammingQuote
} from "./../../services/fakeQuoteService";

class Quotes extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.state = {
      programmerQuotes: getProgrammingQuotes(),
      currentQuote: {},
      currentQuoteIndex: 2
    };
    this.state.prevQuote = this.prevQuote.bind(this);
    this.state.randomQuote = this.randomQuote.bind(this);
    this.state.nextQuote = this.nextQuote.bind(this);
  }

  componentDidMount() {
    const currentQuote = this.state.programmerQuotes[
      this.state.currentQuoteIndex
    ];

    this.setState({ currentQuote });
  }

  componentWillUnmount() {}

  prevQuote() {
    let newQuoteIndex = this.state.currentQuoteIndex;
    if (newQuoteIndex === 0) {
      newQuoteIndex = this.state.programmerQuotes.length - 1;
    } else {
      newQuoteIndex -= 1;
    }
    const currentQuote = this.state.programmerQuotes[newQuoteIndex];

    this.setState({
      currentQuoteIndex: newQuoteIndex,
      currentQuote
    });
  }

  nextQuote() {
    let newQuoteIndex = this.state.currentQuoteIndex;
    if (newQuoteIndex === this.state.programmerQuotes.length - 1) {
      newQuoteIndex = 0;
    } else {
      newQuoteIndex += 1;
    }

    const currentQuote = this.state.programmerQuotes[newQuoteIndex];

    this.setState({
      currentQuoteIndex: newQuoteIndex,
      currentQuote
    });
  }

  randomQuote() {
    const currentQuote = getRandomProgrammingQuote();
    const newQuoteIndex = currentQuote.id;

    this.setState({ currentQuoteIndex: newQuoteIndex, currentQuote });
  }

  render() {
    return (
      <div id="quotes" className="col">
        <div className="programmers-quotes-header">
          <h3>Programmer's Quotes</h3>
          <h4>Wisdom Nuggets</h4>
        </div>

        <div className="programmers-quotes">
          <blockquote>
            <p>{this.state.currentQuote.quote}</p>
          </blockquote>
          <cite>
            <span>~{this.state.currentQuote.author}</span>
            <br />
            {this.state.currentQuote.whoHeIs}
          </cite>
        </div>
        <div style={{ float: "right" }}>
          <button onClick={this.state.prevQuote} className="btn btn-success">
            {"<"}
          </button>
          <button onClick={this.state.randomQuote} className="btn btn-success">
            Get Random Quote
          </button>
          <button onClick={this.state.nextQuote} className="btn btn-success">
            {">"}
          </button>
        </div>
      </div>
    );
  }
}

export default Quotes;
