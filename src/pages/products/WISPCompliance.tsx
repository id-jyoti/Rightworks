import React from "react";
import "./WISPCompliance.css";

const WISPCompliance: React.FC = () => {
  return (
    <section className="wisp">
      {/* Left Content */}
      <div className="wisp-content">
        <h1 className="wisp-title">
          <span className="highlight">Need a WISP?</span> We’ll handle everything.
        </h1>
        <p className="wisp-desc">
          Save time and stay compliant with IRS and FTC requirements by letting
          Rightworks create your Written Information Security Plan (WISP) for
          you. We make it fast and easy!
        </p>

        <div className="wisp-buttons">
          <button className="wisp-btn-primary">BUY NOW →</button>
          <button className="wisp-btn-secondary">BOOK A MEETING →</button>
        </div>
      </div>

      {/* Right Image */}
      <div className="wisp-image">
        <img
          src="/assets/WISP1.webp"
          alt="WISP Compliance"
          className="wisp-img"
        />
      </div>
    </section>
  );
};

export default WISPCompliance;
