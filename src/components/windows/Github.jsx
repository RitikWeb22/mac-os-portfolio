import React from "react";
import MacWindows from "./MacWindows";
import githubData from "../../assets/github.json";
import "./github.scss";

const Card = ({
  data = {
    id: "",
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>
      <div className="tags">
        {data.tags.map((tag) => (
          <p className="tag">{tag}</p>
        ))}
      </div>
      <div className="urls">
        <a href={data.repoLink}>Repositories</a>
        {data.demoLink && <a href={data.demoLink}>Demo Link</a>}
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
      <div className="cards">
        {githubData.projects.map((project, idx) => {
          return <Card data={project} />;
        })}
      </div>
    </MacWindows>
  );
};

export default Github;
