import React, { Component } from "react";
import logo from "./logo.svg";
import bootstrap from "bootstrap/dist/js/bootstrap";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import "./App.css";

const home = () => {
  return <h1>Home</h1>;
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
            <a href="https://riches.herokuapp.com" target="_blank">
              GetRICH
            </a>
            <span>
              GitHub :
              <a href="https://github.com/thinkershine/getrich" target="_blank">
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={home} />
        </Switch>
        <header>
          <div className="container">
            <h1>Thinkershine WebAPP</h1>

            {/* Navigation */}
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
            <Route path="/projects" component={projects} />
          </div>
        </header>

        <footer>
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
