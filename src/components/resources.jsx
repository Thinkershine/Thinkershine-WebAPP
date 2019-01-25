import React from "react";

const Resources = () => {
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
          <li className="list-group-item">
            <a
              href="https://github.com/enaqx/awesome-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Awesome React
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="https://developmentarc.gitbooks.io/react-indepth/content/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React in Depth
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
              href="https://github.com/axios/axios"
              target="_blank"
              rel="noopener noreferrer"
            >
              Axios - Promise based HTTP client for the browser and node.js
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
      <div>
        <h2>Databases & Data Management</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <a
              href="https://devcenter.heroku.com/categories/heroku-postgres"
              target="_blank"
              rel="noopener noreferrer"
            >
              Heroku Postgress
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="https://docs.mlab.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MongoDB mLab
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
