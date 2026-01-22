import React from "react";
import "./dock.scss";

const Docks = ({ windowState, setWindowState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => setWindowState((state) => ({ ...state, github: true }))}
        className="icon github"
      >
        <img src="./doc-icons/github.png" alt="github" />
        <span className="tooltip">GitHub</span>
      </div>
      <div
        onClick={() => setWindowState((state) => ({ ...state, note: true }))}
        className="icon note"
      >
        <img src="./doc-icons/notepad.png" alt="note" />
        <span className="tooltip">Note</span>
      </div>
      <div
        onClick={() => setWindowState((state) => ({ ...state, resume: true }))}
        className="icon pdf"
      >
        <img src="./doc-icons/pdf.png" alt="resume" />
        <span className="tooltip">Resume</span>
      </div>

      <div
        onClick={() =>
          setWindowState((state) => ({ ...state, videoResume: true }))
        }
        className="icon video"
      >
        <img src="./doc-icons/video-calling.png" alt="video resume" />
        <span className="tooltip">Video Resume</span>
      </div>
      <div
        onClick={() => window.open("mailto:ritikweb30@gmail.com", "_blank")}
        className="icon mail"
      >
        <img src="./doc-icons/gmail.png" alt="mail" />
        <span className="tooltip">Mail</span>
      </div>
      <div
        onClick={() => setWindowState((state) => ({ ...state, spotify: true }))}
        className="icon music"
      >
        <img src="./doc-icons/music-player.png" alt="spotify" />
        <span className="tooltip">Fav Music</span>
      </div>

      <div
        onClick={() => window.open("https://calendar.google.com", "_blank")}
        className="icon calendar"
      >
        <img src="./doc-icons/google-calendar.png" alt="calendar" />

        <span className="tooltip">Calendar</span>
      </div>
      <div
        onClick={() =>
          window.open("https://www.linkedin.com/in/ritik-03b8aa288/", "_blank")
        }
        className="icon links"
      >
        <img src="./doc-icons/linkedin.png" alt="link" />
        <span className="tooltip">LinkedIn</span>
      </div>
      <div
        onClick={() => setWindowState((state) => ({ ...state, cli: true }))}
        className="icon cli"
      >
        <img src="./doc-icons/terminal.png" alt="cli" />
        <span className="tooltip">Cli</span>
      </div>
    </footer>
  );
};

export default Docks;
