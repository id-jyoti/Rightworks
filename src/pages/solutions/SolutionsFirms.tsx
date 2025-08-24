
import React from "react";
import "./SolutionsFirms.css";

const SolutionsFirms: React.FC = () => {
  return (
    <section className="solutions-firms">
      {/* Left Content */}
      <div className="solutions-text">
        <h1>
          Cloud solutions <br />
          purpose-built to <br />
          prepare you for <br />
          tomorrow
        </h1>
        <p>
          Simplify, secure and optimize your firm for growth. Join the thousands
          of firms who have embraced today’s hybrid work model and
          tech-dependent landscape to prepare your firm for what’s next.
        </p>
        <button className="btn-started">
          GET STARTED <span className="arrow">→</span>
        </button>
      </div>

      {/* Right Image */}
      <div className="solutions-image">
        <img src="/assets/SF1.webp" alt="Solutions Firms" />
      </div>
    </section>
  );
};

export default SolutionsFirms;
