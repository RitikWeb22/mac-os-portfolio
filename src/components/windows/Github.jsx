import React from "react";
import MacWindows from "./MacWindows";
import githubData from "../../assets/github.json";
import "./github.scss";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={data.image} alt={data.title} loading="lazy" />
        <div className="card-overlay"></div>
        {data.tags[0] && <span className="featured-tag">{data.tags[0]}</span>}
      </div>

      <div className="card-content">
        <div className="text-section">
          <h1>{data.title}</h1>
          <p className="description">{data.description}</p>
        </div>

        <div className="tags">
          {data.tags.slice(1).map((tag, index) => (
            <span key={`${data.id}-tag-${index}`} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="urls">
          <a
            href={data.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-btn"
          >
            Source Code
          </a>
          {data.demoLink && (
            <a
              href={data.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-btn"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Github = ({ windowName, windowState, setWindowState }) => {
  return (
    <MacWindows
      windowName={windowName}
      windowState={windowState}
      setWindowState={setWindowState}
    >
      <div className="github-scroll-container">
        <div className="cards-grid">
          {githubData.projects.map((project, idx) => (
            <Card key={project.id || idx} data={project} />
          ))}
        </div>
      </div>
    </MacWindows>
  );
};

export default Github;
