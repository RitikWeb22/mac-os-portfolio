import React from "react";
import MacWindows from "./MacWindows";
import "./resume.scss";
const Resume = ({ windowName, windowState, setWindowState }) => {
  return (
    <MacWindows
      width="64vw"
      height="82vh"
      minWidth={520}
      minHeight={360}
      windowTitle="Resume"
      windowName={windowName}
      windowState={windowState}
      setWindowState={setWindowState}
    >
      <div className="resume-container">
        <iframe
          src="https://ik.imagekit.io/3wi7dthyny/mac-os/resume.pdf"
          frameBorder="0"
        ></iframe>
      </div>
    </MacWindows>
  );
};

export default Resume;
