// src/components/Awards.tsx
import React from "react";
import { Link } from "react-router-dom";

import highPerformer from "../assets/2.webp";
import bestSupport from "../assets/3.webp";
import easiestUse from "../assets/4.webp";
import gridLeader from "../assets/5.webp";
import gridLeaderSmall from "../assets/6.webp";
import usersLoveUs from "../assets/7.webp";
import g2Icon from "../assets/1.webp"; // small G2 logo

const Awards: React.FC = () => {
  return (
    <section className="awards">
      <div className="awards-rating">
        <Link to="/reviews">
          <img src={g2Icon} alt="G2 Icon" />
        </Link>
        <span className="stars">★★★★★</span>
        <Link to="/reviews">
          <img src={highPerformer} alt="High Performer" />
        </Link>
      </div>

      <div className="awards-badges">
        <Link to="/reviews">
          <img src={bestSupport} alt="Best Support" />
        </Link>
        <Link to="/reviews">
          <img src={easiestUse} alt="Easiest to Use" />
        </Link>
        <Link to="/reviews">
          <img src={gridLeader} alt="Grid Leader" />
        </Link>
        <Link to="/reviews">
          <img src={gridLeaderSmall} alt="Grid Leader Small Business" />
        </Link>
        <Link to="/reviews">
          <img src={usersLoveUs} alt="Users Love Us" className="big-badge" />
        </Link>
      </div>
    </section>
  );
};

export default Awards;
