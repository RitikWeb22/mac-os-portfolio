import React, { useState } from "react";
import "./achievements.scss";
import MacWindows from "./windows/MacWindows";

const Achievements = ({
  windowName,
  windowState,
  setWindowState,
  activeWin,
  setActiveWin,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClose = () => {
    setWindowState((state) => ({ ...state, [windowName]: false }));
  };

  const event = {
    name: "Guest Speaker - JavaScript Workshop",
    date: "Sarvodaya Bal & Kanya Vidyalaya, Dwarka Sec 1",
    photos: [
      {
        id: 1,
        image: "/achivements/1.webp",
        caption: "Invited as a guest speaker for JavaScript",
      },
      {
        id: 2,
        image: "/achivements/2.jpg",
        caption: "Session highlights with students",
      },
      {
        id: 3,
        image: "/achivements/3.jpg",
        caption: "Hands-on learning moments",
      },
      {
        id: 4,
        image: "/achivements/4.avif",
        caption: "Guest lecture at the school",
      },
    ],
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % event.photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? event.photos.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentPhoto = event.photos[currentIndex];

  return (
    <MacWindows
      windowName={windowName}
      windowState={windowState}
      setWindowState={setWindowState}
      activeWin={activeWin}
      setActiveWin={setActiveWin}
    >
      <div className="achievements-container">
        <div className="achievements-content">
          <div className="event-header">
            <div className="event-title">
              <h2 className="event-name">{event.name}</h2>
              <p className="event-date">{event.date}</p>
            </div>
          </div>

          <div className="photo-display">
            <div className="main-photo">
              <img src={currentPhoto.image} alt={currentPhoto.caption} />
              <span className="photo-counter">
                {currentIndex + 1} / {event.photos.length}
              </span>
            </div>

            {/* Navigation Controls */}
            <div className="photo-nav">
              <button className="nav-btn prev-btn" onClick={prevSlide}>
                ←
              </button>

              <div className="dots-container">
                {event.photos.map((_, index) => (
                  <div
                    key={index}
                    className={`dot ${index === currentIndex ? "active" : ""}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>

              <button className="nav-btn next-btn" onClick={nextSlide}>
                →
              </button>
            </div>
          </div>

          {/* Photo Thumbnails */}
          <div className="photo-thumbnails">
            {event.photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`thumbnail ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              >
                <img src={photo.image} alt={photo.caption} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MacWindows>
  );
};

export default Achievements;
