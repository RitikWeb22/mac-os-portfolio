import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./stickynotes.scss";

const StickyNotes = ({
  initialText = "New Note...",
  initialColor = "#fff9b1",
}) => {
  const [color, setColor] = useState(initialColor);
  const [text, setText] = useState(initialText);
  const [isVisible, setIsVisible] = useState(true);

  const colors = [
    { name: "yellow", value: "#fff9b1" },
    { name: "blue", value: "#caf0f8" },
    { name: "green", value: "#d2f8d2" },
    { name: "pink", value: "#ffc4ff" },
    { name: "orange", value: "#ffd8b1" },
  ];

  if (!isVisible) return null;

  return (
    <Rnd
      default={{ x: 100, y: 150, width: 250, height: 250 }}
      minWidth={150}
      minHeight={150}
      dragHandleClassName="note-header"
      bounds="window"
    >
      <div className="sticky-note" style={{ backgroundColor: color }}>
        {/* Modern Header with Color Options */}
        <div className="note-header">
          <div className="note-dots">
            <span className="close" onClick={() => setIsVisible(false)}></span>
          </div>
          <div className="color-palette">
            {colors.map((c) => (
              <div
                key={c.name}
                className={`color-dot ${color === c.value ? "active" : ""}`}
                style={{ backgroundColor: c.value }}
                onClick={() => setColor(c.value)}
              />
            ))}
          </div>
        </div>

        <div className="note-content">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
            spellCheck="false"
          />
        </div>

        {/* Subtle resizing handle icon can be added via CSS */}
        <div className="resize-handle"></div>
      </div>
    </Rnd>
  );
};

export default StickyNotes;
