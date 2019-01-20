import React, { Component } from "react";
import ProgressBar from "./common/progressBar";

class Skills extends Component {
  state = {};

  render() {
    return (
      <div id="skills">
        <h1>Skills</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 px-1">
              <div className="sticky-top flex-grow-1">
                <ul className="list-group">
                  <li className="list-group-item">
                    <span style={{ fontSize: 25 }}>LEGEND</span>
                  </li>
                  <li className="list-group-item">
                    <div
                      className="bg-primary"
                      style={{
                        width: 25,
                        height: 25,
                        float: "left",
                        margin: 2
                      }}
                    />
                    <h5 className="mb-1">Main Interest</h5>
                  </li>
                  <li className="list-group-item">
                    <div
                      className="bg-secondary"
                      style={{
                        width: 25,
                        height: 25,
                        float: "left",
                        margin: 2
                      }}
                    />
                    <h5 className="mb-1">Lot to Learn</h5>
                  </li>
                  <li className="list-group-item">
                    <div
                      className="bg-success"
                      style={{
                        width: 25,
                        height: 25,
                        float: "left",
                        margin: 2
                      }}
                    />
                    <h5 className="mb-1">Important</h5>
                  </li>

                  <li className="list-group-item">
                    <div
                      className="bg-info"
                      style={{
                        width: 25,
                        height: 25,
                        float: "left",
                        margin: 2
                      }}
                    />
                    <h5 className="mb-1">Always Improve</h5>
                  </li>
                  <li className="list-group-item">
                    <div
                      className="bg-warning"
                      style={{
                        width: 25,
                        height: 25,
                        float: "left",
                        margin: 2
                      }}
                    />
                    <h5 className="mb-1">Dedication</h5>
                  </li>
                  <li className="list-group-item">
                    <div
                      className="bg-danger"
                      style={{
                        width: 25,
                        height: 25,
                        float: "left",
                        margin: 2
                      }}
                    />
                    <h5 className="mb-1">Awaiting</h5>
                  </li>
                </ul>

                <ul className="list-group">
                  <li className="list-group-item">
                    <span style={{ fontSize: 25 }}> CURRENT</span>
                  </li>
                  <li className="list-group-item">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                      style={{
                        width: 25,
                        height: 25,
                        float: "left",
                        margin: 2
                      }}
                    />
                    <div className="justify-content-between">
                      <h5 className="mb-1">React & Redux</h5>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                      style={{
                        width: 25,
                        height: 25,
                        float: "left",
                        margin: 2
                      }}
                    />
                    <div className="justify-content-between">
                      <h5 className="mb-1">Tutorials</h5>
                    </div>
                  </li>
                  <li className="list-group-item">
                    {" "}
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                      style={{
                        width: 25,
                        height: 25,
                        float: "left",
                        margin: 2
                      }}
                    />
                    <div className="justify-content-between">
                      <h5 className="mb-1">Learning</h5>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                      style={{
                        width: 25,
                        height: 25,
                        float: "left",
                        margin: 2
                      }}
                    />
                    <div className="justify-content-between">
                      <h5 className="mb-1">Polishing</h5>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                      style={{
                        width: 25,
                        height: 25,
                        float: "left",
                        margin: 2
                      }}
                    />
                    <div className="justify-content-between">
                      <h5 className="mb-1">Mastering</h5>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                      style={{
                        width: 25,
                        height: 25,
                        float: "left",
                        margin: 2
                      }}
                    />
                    <div className="justify-content-between">
                      <h5 className="mb-1">No Time</h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col col-sm">
              <div className="row">
                <div className="col">
                  <h2>Web Development</h2>
                  <ProgressBar
                    title="HTML 5 & CSS 3"
                    levelToDisplay={""}
                    percentageOfCompletion={72}
                    currentValue={72}
                    maxValue={100 + " Always Improve"}
                    badge={"info"}
                    bgColor={"light"}
                    isAnimated={false}
                    isStriped={false}
                  />
                  <ProgressBar
                    title="React & Redux"
                    levelToDisplay={""}
                    percentageOfCompletion={45}
                    currentValue={45}
                    maxValue={100 + " Learning"}
                    badge={"success"}
                    bgColor={"light"}
                    isAnimated={true}
                    isStriped={true}
                  />
                  <ProgressBar
                    title=".Net Core"
                    levelToDisplay={""}
                    percentageOfCompletion={58}
                    currentValue={58}
                    maxValue={100 + " Always Improve"}
                    badge={"info"}
                    bgColor={"light"}
                  />
                </div>
                <div className="col">
                  <h2>Languages</h2>
                  <ProgressBar
                    title="C#"
                    levelToDisplay={""}
                    percentageOfCompletion={82}
                    currentValue={82}
                    maxValue={100 + " Dedication"}
                    badge={"warning"}
                    bgColor={"light"}
                  />
                  <ProgressBar
                    title="JavaScript & TypeScript"
                    levelToDisplay={""}
                    percentageOfCompletion={50}
                    currentValue={50}
                    maxValue={100 + " Polishing"}
                    badge={"info"}
                    bgColor={"light"}
                    isAnimated={true}
                    isStriped={true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h2>Soft Skills</h2>
                  <ProgressBar
                    title="Team Player"
                    levelToDisplay={""}
                    percentageOfCompletion={90}
                    currentValue={90}
                    maxValue={100 + " Important"}
                    badge={"success"}
                    bgColor={"light"}
                  />
                  <ProgressBar
                    title="Communicator"
                    levelToDisplay={""}
                    percentageOfCompletion={70}
                    currentValue={70}
                    maxValue={100 + " Important"}
                    badge={"success"}
                    bgColor={"light"}
                  />
                  <ProgressBar
                    title="Helper"
                    levelToDisplay={""}
                    percentageOfCompletion={85}
                    currentValue={85}
                    maxValue={100 + " Important"}
                    badge={"success"}
                    bgColor={"light"}
                  />
                </div>
                <div className="col">
                  <h2>Design</h2>
                  <ProgressBar
                    title="UI"
                    levelToDisplay={""}
                    percentageOfCompletion={65}
                    currentValue={65}
                    maxValue={100 + " Always Improve"}
                    badge={"info"}
                    bgColor={"light"}
                  />
                  <ProgressBar
                    title="UX"
                    levelToDisplay={""}
                    percentageOfCompletion={55}
                    currentValue={55}
                    maxValue={100 + " Always Improve"}
                    badge={"info"}
                    bgColor={"light"}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h2>Paradigms</h2>
                  <ProgressBar
                    title="Object Oriented Programming"
                    levelToDisplay={""}
                    percentageOfCompletion={75}
                    currentValue={75}
                    maxValue={100 + " Important"}
                    badge={"success"}
                    bgColor={"light"}
                  />
                  <ProgressBar
                    title="Functional Programming"
                    levelToDisplay={""}
                    percentageOfCompletion={55}
                    currentValue={55}
                    maxValue={100 + " Learning"}
                    badge={"success"}
                    bgColor={"light"}
                    isAnimated={true}
                    isStriped={true}
                  />
                  <h2>Tools</h2>
                  <ProgressBar
                    title="GIT"
                    levelToDisplay={""}
                    percentageOfCompletion={55}
                    currentValue={55}
                    maxValue={100 + " Polishing"}
                    badge={"info"}
                    bgColor={"light"}
                    isAnimated={true}
                    isStriped={true}
                  />
                  <ProgressBar
                    title="Command Line (npm, git, heroku)"
                    levelToDisplay={""}
                    percentageOfCompletion={60}
                    currentValue={60}
                    maxValue={100 + " Polishing"}
                    badge={"info"}
                    bgColor={"light"}
                    isAnimated={true}
                    isStriped={true}
                  />
                  <ProgressBar
                    title="Visual Studio & Visual Studio Code"
                    levelToDisplay={""}
                    percentageOfCompletion={75}
                    currentValue={75}
                    maxValue={100 + " Mastering"}
                    badge={"warning"}
                    bgColor={"light"}
                    isAnimated={true}
                    isStriped={true}
                  />
                </div>
                <div className="col">
                  <h2>Knowledge</h2>
                  <ProgressBar
                    title="Algorightms & Data Structures"
                    levelToDisplay={""}
                    percentageOfCompletion={45}
                    currentValue={45}
                    maxValue={100 + " Lot to Learn"}
                    badge={"secondary"}
                    bgColor={"light"}
                  />
                  <ProgressBar
                    title="Software Architecture"
                    levelToDisplay={""}
                    percentageOfCompletion={40}
                    currentValue={40}
                    maxValue={100 + " Lot to Learn"}
                    badge={"secondary"}
                    bgColor={"light"}
                  />
                  <ProgressBar
                    title="Clean Code & Refactoring"
                    levelToDisplay={""}
                    percentageOfCompletion={80}
                    currentValue={80}
                    maxValue={100 + " Polishing"}
                    badge={"info"}
                    bgColor={"light"}
                    isAnimated={true}
                    isStriped={true}
                  />
                  <ProgressBar
                    title="SOLID Principles"
                    levelToDisplay={""}
                    percentageOfCompletion={40}
                    currentValue={40}
                    maxValue={100 + " Lot to learn"}
                    badge={"secondary"}
                    bgColor={"light"}
                  />

                  <ProgressBar
                    title="Developing REST APIs"
                    levelToDisplay={""}
                    percentageOfCompletion={30}
                    currentValue={30}
                    maxValue={100 + " Lot to learn"}
                    badge={"secondary"}
                    bgColor={"light"}
                  />
                  <ProgressBar
                    title="Cloud Services and Hosting"
                    levelToDisplay={""}
                    percentageOfCompletion={35}
                    currentValue={35}
                    maxValue={100 + " Lot to Learn"}
                    badge={"secondary"}
                    bgColor={"light"}
                  />
                  <ProgressBar
                    title="SQL Database & ORM (Entity Framerwork)"
                    levelToDisplay={""}
                    percentageOfCompletion={35}
                    currentValue={35}
                    maxValue={100 + " Lot to Learn"}
                    badge={"secondary"}
                    bgColor={"light"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
