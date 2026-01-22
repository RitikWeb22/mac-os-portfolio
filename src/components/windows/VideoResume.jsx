import React from "react";
import MacWindows from "./MacWindows";
import "./videoResume.scss";

const VideoResume = ({ windowName, windowState, setWindowState }) => {
  return (
    <MacWindows
      windowName={windowName}
      windowState={windowState}
      setWindowState={setWindowState}
    >
      <div className="videoResume-window">
        <video
          src="./video.mp4"
          controls
          loop
          autoPlay
          muted
          className="resume-video"
        ></video>
      </div>
    </MacWindows>
  );
};

export default VideoResume;
