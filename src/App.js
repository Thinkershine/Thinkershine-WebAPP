import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import TicTacToe from "./components/games/ticTacToe";
import Quotes from "./components/common/quotes";
import Skills from "./components/skills";
import "./App.css";
import Coins from "./components/coins";

const home = () => {
  return <h1>Thinkershine WebAPP</h1>;
};

const projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="row">
        <h2>Current Open-Source Projects</h2>
        <div className="col">
          <h3>MovieRental APP</h3>
          <p>Image</p>
          <p>Description</p>
          <p>Tech : REACT</p>
          <p>URL with Icons : GitHub Repo - OnLine Version</p>
          {/* On Click >>> SHOW THIS PROJECT BIGGER */}
        </div>
        <div className="col">
          <h3>GetRICH APP</h3>
          <p>Image</p>
          <p>Description</p>
          <p>Tech : REACT</p>
          <p>
            URL:
            <a
              href="https://riches.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GetRICH
            </a>
            <span>
              GitHub :
              <a
                href="https://github.com/thinkershine/getrich"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </span>
          </p>
        </div>
        <div className="col">
          <h3>Thinkershine WebAPP</h3>
          <p>Image</p>
          <p>Description</p>
          <p>Tech : REACT</p>
          <p>URL with Icons : GitHub Repo - OnLine Version</p>
        </div>
        <p>
          OLD PROJECT >>> HAVENOM KINGDOMS >>> With UNITY and C# --> GUI,
          writing, quests AND BACKEND I MADE ,,, but I abandoned the project...
          it grew to big to do it alone and I got frustrated... deleting all the
          work with source code... if you're curious you can checkout the blog
          at HAVENOM WIZARDS... But - PHOTOS Are Not Loading Anymore...
        </p>
      </div>
    </div>
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

const resources = () => {
  return (
    <div className="resources">
      <h1>Resources</h1>

      <div>
        <h2>JavaScript in Depth</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <a
              href="https://hacks.mozilla.org/category/es6-in-depth/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript in Depth
            </a>
          </li>
          <li className="list-group-item">
            {" "}
            <a
              href="https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Destructuring
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="https://hacks.mozilla.org/2015/05/es6-in-depth-rest-parameters-and-defaults/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rest Parameters and Defaults
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>React</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <a
              href="https://www.taniarascia.com/getting-started-with-react/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Getting Started with React
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>REST</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
              target="_blank"
              rel="noopener noreferrer"
            >
              FETCH API - MSDN
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="https://github.github.io/fetch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FETCH API - GitHub
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="https://alligator.io/js/fetch-api/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FETCH API - by Alligator
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Using FETCH
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
              target="_blank"
              rel="noopener noreferrer"
            >
              CORS
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work/10636765#10636765"
              target="_blank"
              rel="noopener noreferrer"
            >
              HOW CORS WORK
            </a>
          </li>
        </ul>
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
      displayQuotesOn: false
    };
    this.state.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.state.displayQuotes = this.displayQuotes.bind(this);
    this.state.closeQuotes = this.closeQuotes.bind(this);
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
              className="btn btn-success"
              type="button"
            >
              Get Programmer's Quotes
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
            <Route path="/projects" component={projects} />
            <Route path="/skills" component={skills} />
            <Route path="/games" component={games} />
            <Route path="/resources" component={resources} />
            <Route path="/contact" component={contact} />
            <Route path="/" exact component={home} />
            <Route path="/" component={NotFound} />
          </Switch>

          <div id="widgets" className="col">
            {this.state.displayQuotesOn && (
              <Quotes onClose={this.state.closeQuotes} />
            )}
            <Coins />
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
