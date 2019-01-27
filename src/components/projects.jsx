import React from "react";
import Project from "./project";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <h2>Current Open-Source Projects</h2>
      <small>Well, Learning Projects...</small>
      <div className="row">
        <Project
          title="MovieRental APP"
          description="OpenMovieDatabaseAPI WebAPP Where You Can Rent Thousands of Videos."
          techStack="React"
          githubURL="https://github.com/Thinkershine/MovieRentalAPP"
        />
        <Project
          title="GetRICH APP"
          description="Online Game Powered by REACT Where You Can Get RICH by MINING GOLD"
          techStack="React, PostgreSQL"
          githubURL="https://github.com/Thinkershine/GetRich"
          demoURL="https://riches.herokuapp.com"
        />
        <Project
          title="Thinkershine WebAPP"
          description="That's This Site, my Main Page to Gather Resources and Learn REACT"
          techStack="React"
          githubURL="https://github.com/Thinkershine/Thinkershine-WebAPP"
          demoURL="https://thinkershine.herokuapp.com"
        />
        <Project
          title="Wizards of Havenom"
          description="RPG Style Game, Unfortunately Abandoned."
          techStack="Unity, C#"
          demoURL="https://wizardsofhavenom.blogspot.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
