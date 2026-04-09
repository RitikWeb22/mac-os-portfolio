import React, { useEffect, useState } from "react";
import MacWindows from "./MacWindows";
import SyntaxHighlighter from "react-syntax-highlighter";
import { ocean } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import "./note.scss";

const Note = ({ windowName, windowState, setWindowState }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch(() => setMarkdown("Unable to load notes right now."));
  }, []);

  return (
    <MacWindows
      width="50vw"
      height="72vh"
      minWidth={420}
      minHeight={320}
      windowTitle="Notes"
      windowName={windowName}
      windowState={windowState}
      setWindowState={setWindowState}
    >
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter language="typescript" style={ocean}>
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p className="note-loading">Loading profile notes...</p>
        )}
      </div>
    </MacWindows>
  );
};

export default Note;
