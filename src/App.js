import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import TicTacToe from "./components/games/ticTacToe";
import Quotes from "./components/common/quotes";
import Skills from "./components/skills";
import Coins from "./components/coins";
import Resources from "./components/resources";
import Projects from "./components/projects";
import Confetti from "./components/common/confetti";
import "./App.css";

const home = () => {
  return (
    <React.Fragment>
      <h1>Thinkershine WebAPP</h1>
      <Confetti
        text="Have a Nice Day :)"
        particlesAmount={55}
        animate={false}
        particleTypes={["circle"]} // "triangle", "line", "circle",
        particleSize={25}
      />
    </React.Fragment>
  );
};

const skills = () => {
  return <Skills />;
};

const games = () => {
  return (
    <div className="games">
      <h1>Games</h1>

      <div>
        <h2>Tic Tac Toe</h2>
        <TicTacToe />
      </div>
    </div>
  );
};

const contact = () => {
  return <h1>Contact</h1>;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      displayQuotesOn: false,
      displayCoinsOn: false
    };
    this.state.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.state.displayQuotes = this.displayQuotes.bind(this);
    this.state.closeQuotes = this.closeQuotes.bind(this);
    this.state.displayCoins = this.displayCoins.bind(this);
    this.state.closeCoins = this.closeCoins.bind(this);
  }

  componentDidMount() {
    // this.updateWindowDimensions();// window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    // window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    // this.setState({
    //   width: window.innerWidth,
    //   height: window.innerHeight
    // });
  }

  displayQuotes() {
    this.setState({ displayQuotesOn: !this.state.displayQuotesOn });
  }

  closeQuotes() {
    console.log("CLOSE");
    this.setState({ displayQuotesOn: false });
  }

  displayCoins() {
    console.log("Show Coins");
    this.setState({ displayCoinsOn: !this.state.displayCoinsOn });
  }

  closeCoins() {
    console.log("CLOSE");
    this.setState({ displayCoinsOn: false });
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
        </header>

        <div id="sidebar" className="row">
          <div className="btn-group-vertical col" role="group">
            <button
              onClick={this.state.displayQuotes}
              className="btn btn-warning"
              type="button"
            >
              Get Programmer's Quotes
            </button>
            <button
              onClick={this.state.displayCoins}
              className="btn btn-success"
              type="button"
            >
              Get Cryptocurrencies
            </button>
          </div>
        </div>

        <div className="container" role="main">
          {/* FUN-PlugIns */}
          {/* - Mining ?
            - Get Gold ?  */}

          {/* BLOG */}
          {/* Contact */}
          {/* LinkedIn */}
          {/* GitHub */}
          {/* SKILLS  --> TECH STACK , Languages, etc. */}

          {/* Play TIC TAC TOE */}
          {/* Play Tetris */}
          {/* Play Snake */}
          {/* Play Asteroids */}
          {/* Play GetRich */}
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={skills} />
            <Route path="/games" component={games} />
            <Route path="/resources" component={Resources} />
            <Route path="/contact" component={contact} />
            <Route path="/" exact component={home} />
            <Route path="/" component={NotFound} />
          </Switch>

          <div id="widgets" className="col">
            {this.state.displayQuotesOn && (
              <Quotes onClose={this.state.closeQuotes} />
            )}
            {this.state.displayCoinsOn && (
              <Coins onClose={this.state.closeCoins} />
            )}
          </div>
        </div>

        <footer className="footer">
          <p>
            Made with Love by{" "}
            <a href="https://thinkershine.herokuapp.com">Thinkershine</a> using
            REACT LINK - HOSTED ON - HEROKU LINK
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
