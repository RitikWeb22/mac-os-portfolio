import React from "react";
import "./dock.scss";

const Docks = ({ windowState, setWindowState }) => {
  const dockItems = [
    { id: "github", label: "GitHub", icon: "github.png" },
    { id: "linkedin", label: "LinkedIn", icon: "linkedin.png" }, // New LinkedIn Window
    { id: "note", label: "Notes", icon: "notepad.png" },
    { id: "resume", label: "Resume", icon: "pdf.png" },
    { id: "videoResume", label: "Video", icon: "video-calling.png" },
    { id: "spotify", label: "Spotify", icon: "music-player.png" },
    { id: "cli", label: "Terminal", icon: "terminal.png" },
  ];

  const handleOpen = (id) => {
    setWindowState((state) => ({ ...state, [id]: true }));
  };

  return (
    <footer className="dock-container">
      <div className="dock-wrapper">
        {dockItems.map((item) => (
          <div
            key={item.id}
            className={`icon-box ${windowState[item.id] ? "active" : ""}`}
            onClick={() => handleOpen(item.id)}
          >
            <img src={`./doc-icons/${item.icon}`} alt={item.label} />
            <span className="tooltip">{item.label}</span>
            {/* The little dot below active apps */}
            {windowState[item.id] && <div className="indicator" />}
          </div>
        ))}

        <div className="divider"></div>

        {/* External Links */}
        <div
          className="icon-box"
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=ritikweb30@gmail.com",
              "_blank",
            )
          }
        >
          <img src="./doc-icons/gmail.png" alt="mail" />
          <span className="tooltip">Gmail</span>
        </div>
      </div>
    </footer>
  );
};

export default Docks;
