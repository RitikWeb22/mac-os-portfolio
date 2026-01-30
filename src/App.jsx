import React, { useEffect, useState } from "react";
import "./app.scss";
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

const App = () => {
  // 2. Added linkedin: false to the initial state
  const [windowState, setWindowState] = useState({
    github: false,
    linkedin: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    videoResume: false,
  });

  return (
    <main>
      <Nav />
      <Clock />
      {/* 3. Passing windowState to Docks for active indicators */}
      <Docks windowState={windowState} setWindowState={setWindowState} />
      {/* WINDOW RENDERING SECTION */}
      {windowState.github && (
        <Github
          windowName="github"
          windowState={windowState}
          setWindowState={setWindowState}
        />
      )}
      {/* 4. Render the LinkedIn Window */}
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
      <StickyNotes
        initialText="Welcome to my Portfolio! 🚀"
        initialColor="#77abfe"
      />
    </main>
  );
};

export default App;
