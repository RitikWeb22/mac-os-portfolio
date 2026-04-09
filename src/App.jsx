import React, { useState } from "react";
import "./app.scss";
import "remixicon/fonts/remixicon.css";
import Docks from "./components/Docks";
import Clock from "./components/Clock";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
import VideoResume from "./components/windows/VideoResume";
// 1. Import your new Linkedin component
import Linkedin from "./components/windows/Linkedin";
import StickyNotes from "./components/widgets/StickyNotes";
import Achievements from "./components/Achievements";

const App = () => {
  const [windowState, setWindowState] = useState({
    github: false,
    linkedin: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    videoResume: false,
    achievements: false,
  });

  return (
    <main className="desktop-shell">
      <Nav />
      <Clock />
      <Docks windowState={windowState} setWindowState={setWindowState} />
      {windowState.github && (
        <Github
          windowName="github"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      {windowState.linkedin && (
        <Linkedin
          windowName="linkedin"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      {windowState.note && (
        <Note
          windowName="note"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      {windowState.resume && (
        <Resume
          windowName="resume"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      {windowState.spotify && (
        <Spotify
          windowName="spotify"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      {windowState.cli && (
        <Cli
          windowName="cli"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      {windowState.videoResume && (
        <VideoResume
          windowName="videoResume"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      {windowState.achievements && (
        <Achievements
          windowName="achievements"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      <StickyNotes
        initialText="Drop ideas, links, and reminders here."
        initialColor="#77abfe"
      />
    </main>
  );
};

export default App;
