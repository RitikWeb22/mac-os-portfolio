import React, { useEffect, useState } from "react";
import MacWindows from "./MacWindows";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { decco, vsDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import "./note.scss";
import { ocean } from "react-syntax-highlighter/dist/cjs/styles/hljs";
const Note = ({ windowName, windowState, setWindowState }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <MacWindows
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
          <p>Loading</p>
        )}
      </div>
    </MacWindows>
  );
};

export default Note;
