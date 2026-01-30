import React from "react";
import MacWindows from "./MacWindows";
import data from "../../assets/linkedin.json";
import "./linkedin.scss";

const Linkedin = ({ windowName, windowState, setWindowState }) => {
  const { profile, experience, skills } = data;

  return (
    <MacWindows
      windowName={windowName}
      windowState={windowState}
      setWindowState={setWindowState}
    >
      <div className="linkedin-wrapper">
        <div className="linkedin-content">
          {/* Profile Header */}
          <div className="profile-header">
            <div
              className="banner"
              style={{ backgroundImage: `url(${profile.banner})` }}
            ></div>
            <div className="profile-info">
              <img src={profile.avatar} alt="Profile" className="avatar" />
              <div className="info-text">
                <h1>{profile.name}</h1>
                <p className="headline">{profile.headline}</p>
                <p className="location">
                  {profile.location} •{" "}
                  <span className="conn-count">
                    {profile.connections} connections
                  </span>
                </p>

                {/* Updated Action Links */}
                <div className="actions">
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    View LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Body Sections */}
          <div className="profile-body">
            <section className="section">
              <h2>About</h2>
              <p>{profile.about}</p>
            </section>

            <section className="section">
              <h2>Skills</h2>
              <div className="skills-grid">
                {skills.map((skill, i) => (
                  <span key={i} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </MacWindows>
  );
};

export default Linkedin;
