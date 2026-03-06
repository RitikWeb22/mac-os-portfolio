import React from "react";
import MacWindows from "./MacWindows";
import "./resume.scss";
const Resume = ({ windowName, windowState, setWindowState }) => {
  return (
    <MacWindows
      windowName={windowName}
      windowState={windowState}
      setWindowState={setWindowState}
    >
      <div className="resume-container">
        <iframe
          src="https://ik.imagekit.io/3wi7dthyny/mac-os/resume.pdf"
          frameborder="0"
        ></iframe>{" "}
      </div>
    </MacWindows>
  );
};

export default Resume;
