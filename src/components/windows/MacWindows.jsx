import { Rnd } from "react-rnd";
import "./window.scss";
const MacWindows = ({
  children,
  width = "40vw",
  height = "70vh",
  windowName,
  windowState,
  setWindowState,
}) => {
  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 200,
        y: 50,
      }}
    >
      <div className="windows">
        <div className="nav">
          <div className="dots">
            <div
              onClick={() =>
                setWindowState((state) => ({ ...state, [windowName]: false }))
              }
              className="dot red"
            >
              <i class="ri-close-fill"></i>
            </div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>Ritik -zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindows;
