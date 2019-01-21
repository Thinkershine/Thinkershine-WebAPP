import React from "react";

const Projects = () => {
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

export default Projects;
