import React, { useState } from "react";
import MacWindows from "./MacWindows";
import "./videoResume.scss";

const VideoResume = ({
  windowName,
  windowState,
  setWindowState,
  activeWin,
  setActiveWin,
}) => {
  // Playlist data
  const playlist = [
    {
      id: 1,
      title: "Introduction Video",
      src: "./video.mp4",
      thumb:
        "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Project Demo - E-commerce",
      src: "./project1.mp4",
      thumb:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Technical Skills Showcase",
      src: "./skills.mp4",
      thumb:
        "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(playlist[0]);

  return (
    <MacWindows
      windowName={windowName}
      windowState={windowState}
      setWindowState={setWindowState}
      activeWin={activeWin}
      setActiveWin={setActiveWin}
    >
      <div className="videoResume-window">
        {/* Top Section: Title */}
        <div className="video-header">
          <h2>{currentVideo.title}</h2>
        </div>

        {/* Middle Section: Main Video */}
        <div className="main-video-container">
          <video
            key={currentVideo.src} // Key change se video reload hogi
            src={currentVideo.src}
            controls
            autoPlay
            className="resume-video"
          ></video>
        </div>

        {/* Bottom Section: Playlist Thumbnails */}
        <div className="video-playlist">
          {playlist.map((video) => (
            <div
              key={video.id}
              className={`playlist-item ${currentVideo.id === video.id ? "active" : ""}`}
              onClick={() => setCurrentVideo(video)}
            >
              <div className="thumb-wrapper">
                {/* Agar thumbnails nahi hain toh video hi dikha sakte hain ya placeholder image */}
                <img src={video.thumb} alt={video.title} />
                <div className="play-overlay">▶</div>
              </div>
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </MacWindows>
  );
};

export default VideoResume;
