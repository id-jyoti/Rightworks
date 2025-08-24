import React from "react";
import "./Podcasts.css";

const Podcast = () => {
  return (
    <div className="podcast">
      <div className="podcast-container">
        {/* Left Section */}
        <div className="podcast-content">
          <p className="podcast-subtitle">🎙 The Modern Firm podcast</p>
          <h1 className="podcast-title">
            Hard-hitting convos on the hottest topics to accountants
          </h1>
          <p className="podcast-description">
            The hot-topic podcast where firms, thought leaders, influencers, and
            research nerds converge, collaborate, speak out and dig into common
            challenges impacting accounting firms. We ask the critical questions
            on topics that matter—from the pipeline shortage and security threats
            to the “how–the–hell–can–anyone–keep–up” pace of technology change—and
            then work to amplify actionable guidance and takeaways for firms.
            Join Darren Root, Dr. Kristy Short, John Mitchell and other dedicated
            industry champions who all have a single, focused goal: Moving the
            profession forward.
          </p>
          <button className="podcast-btn">WATCH EPISODES</button>
        </div>

        {/* Right Section */}
        <div className="podcast-image">
          <img
            src="/assets/PD1.webp"
            alt="The Modern Firm Podcast"
          />
        </div>
      </div>

      {/* Search + Filter Row */}
      <div className="podcast-filters">
        <input type="text" placeholder="Search ..." className="podcast-search" />
        <select className="podcast-select">
          <option>All Topics</option>
          <option>Technology</option>
          <option>Accounting</option>
          <option>Leadership</option>
        </select>
        <select className="podcast-select">
          <option>All Roles</option>
          <option>Partner</option>
          <option>Manager</option>
          <option>Staff</option>
        </select>
        <button className="podcast-filter-btn">FILTER ⚙️</button>
      </div>
    </div>
  );
};

export default Podcast;
