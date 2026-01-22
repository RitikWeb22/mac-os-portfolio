import React, { useEffect, useState } from "react";
import "./app.scss";
import Docks from "./components/Docks";
import Clock from "./components/Clock";
import Nav from "./components/nav";
import MacWindows from "./components/windows/MacWindows";
import Github from "./components/windows/Github";
import Note from "./components/windows/note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
import CalendarWidget from "./components/widgets/CalendarWidget";
import VideoResume from "./components/windows/VideoResume";

const App = () => {
  const [windowState, setWindowState] = useState({
    github: false,
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

      <Docks windowState={windowState} setWindowState={setWindowState} />
      {windowState.github && (
        <Github
          windowName="github"
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

      <CalendarWidget />
    </main>
  );
};

export default App;
