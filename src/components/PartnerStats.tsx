// src/components/PartnerStats.tsx
import React, { useState, useEffect } from "react";
import thomson from "../assets/A.svg"; 
import wolters from "../assets/B.svg";
import cch from "../assets/C.svg";
import microsoft from "../assets/D.svg";
import quickbooks from "../assets/E.svg";
import xero from "../assets/F.svg";
import bill from "../assets/G.svg";

const PartnersStats: React.FC = () => {
  const [revenueBoost, setRevenueBoost] = useState(40);       // %
  const [years, setYears] = useState(20);                     // years
  const [firms, setFirms] = useState(10000);                  // firms

  // Animate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setRevenueBoost((prev) =>
        prev + (Math.random() > 0.5 ? 1 : -1) // wiggle up/down by 1
      );
      setYears((prev) =>
        prev + (Math.random() > 0.8 ? 1 : 0) // occasionally increase
      );
      setFirms((prev) =>
        prev + Math.floor(Math.random() * 5) // slowly grow
      );
    }, 4000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="partners-stats">
      {/* Partner Logos */}
      <div className="partners">
        <p className="partners-text">
          Rightworks makes the apps you already use even better (and safer).
        </p>
        <div className="partners-logos">
          <img src={thomson} alt="Thomson Reuters" />
          <img src={wolters} alt="Wolters Kluwer" />
          <img src={cch} alt="CCH Access" />
          <img src={microsoft} alt="Microsoft" />
          <img src={quickbooks} alt="QuickBooks" />
          <img src={xero} alt="Xero" />
          <img src={bill} alt="Bill" />
        </div>
      </div>

      {/* Stats Row */}
      <div className="stats">
        <div className="stat-item">
          <h3>{revenueBoost}%</h3>
          <p>
            The right tech can boost revenue <br /> per employee by almost {revenueBoost}%
          </p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h3>{years}+ years</h3>
          <p>
            We’ve been helping accounting <br /> firms succeed for over {years}+ years
          </p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h3>{firms.toLocaleString()}+ firms</h3>
          <p>
            Join the many firms who trust <br /> Rightworks to supercharge their
            business
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersStats;
