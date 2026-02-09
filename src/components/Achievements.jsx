import React, { useState } from "react";
import { Rnd } from "react-rnd";
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
    name: "My Amazing Event",
    date: "February 2024",
    photos: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop",
        caption: "Photo 1",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
        caption: "Photo 2",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
        caption: "Photo 3",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop",
        caption: "Photo 4",
      },
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
        caption: "Photo 5",
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop",
        caption: "Photo 6",
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
