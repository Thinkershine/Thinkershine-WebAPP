import React, { Component } from "react";

const Project = ({
  title,
  image,
  description,
  techStack,
  githubURL,
  demoURL
}) => {
  return (
    <div className="col project">
      <h3>{title}</h3>
      {image && <img src={image} style={{ width: 250, height: 150 }} />}
      <p>{description}</p>
      <p>Tech : {techStack}</p>
      <p>
        {githubURL && (
          <a href={githubURL} target="_blank">
            {title} on GitHub
          </a>
        )}
        <br />
        {demoURL && (
          <a href={demoURL} target="_blank">
            Demo On-Line
          </a>
        )}
      </p>
      {/* On Click >>> SHOW THIS PROJECT BIGGER */}
    </div>
  );
};

export default Project;
