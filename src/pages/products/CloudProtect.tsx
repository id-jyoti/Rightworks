import React from "react";
import "./CloudProtect.css";

const CloudProtect: React.FC = () => {
  return (
    <section className="cloudprotect">
      <div className="cloudprotect-content">
        <h5 className="cp-subtitle">Rightworks Cloud Protect</h5>
        <h1 className="cp-title">
          Lock down your apps with{" "}
          <span className="highlight">Cloud Protect</span>
        </h1>
        <p className="cp-desc">
          Cloud Protect secures your cloud-based apps, simplifies access,
          and supports flexible work, so you can operate with confidence.
        </p>

        <div className="cp-buttons">
          <button className="btn-primary">GET CLOUD PROTECT →</button>
          <button className="btn-secondary">VIEW PLANS →</button>
        </div>
      </div>

      <div className="cloudprotect-image">
        <div className="laptop-frame">
          <img
            src="/assets/RCP1.webp"
            alt="Cloud Protect dashboard"
          />
        </div>
      </div>
    </section>
  );
};

export default CloudProtect;
