import React from "react";
import "./Partners.css";

const Partners: React.FC = () => {
  return (
    <div className="partners-page">
      {/* ---------- HERO SECTION ---------- */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>
            Partner opportunities <br />
            <span>with Rightworks</span>
          </h1>
          <p>
            Grow your business, improve customer experience, and improve
            profitability – today. Team up with the unrivaled leader in
            intelligent cloud solutions designed exclusively for the accounting
            profession.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="/assets/PT1.webp"
            alt="Rightworks partnership"
          />
        </div>
      </section>

      {/* ---------- WHY PARTNER WITH US ---------- */}
      <section className="why-partner">
        <h4 className="subtitle">Rightworks partners</h4>
        <h2>Why partner with us?</h2>
        <p className="why-desc">
          At Rightworks, we believe in the strength of partnership. We’re
          dedicated to fostering meaningful connections with like-minded
          organizations to achieve mutual success and make a greater
          impact—together. Our partner network represents a diverse ecosystem of
          innovative companies and industry leaders that share our vision and
          values. Our partnerships deliver solutions that enable accounting
          firms and small businesses to modernize, scale and efficiently operate
          their businesses from the cloud.
        </p>

        <div className="why-grid">
          <div className="why-card">
            <img src="/assets/icons/P1.svg" alt="Collaboration" className="card-icon" />
            <h3>Collaborative solutions</h3>
            <p>
              By joining forces, we can combine our unique strengths and
              expertise to deliver comprehensive solutions that address complex
              challenges. Together, we can achieve more.
            </p>
          </div>

          <div className="why-card">
            <img src="/assets/icons/P2.svg" alt="Reach" className="card-icon" />
            <h3>Expanded reach</h3>
            <p>
              Partnering with Rightworks offers you growth opportunities and
              expansion of your market reach. Collaborate with us to tap into a
              network of potential customers.
            </p>
          </div>

          <div className="why-card">
            <img src="/assets/icons/P3.svg" alt="Marketing" className="card-icon" />
            <h3>Co-marketing opportunities</h3>
            <p>
              As a valued partner, we’ll actively collaborate on marketing
              initiatives, co-create content and promote each other’s solutions.
            </p>
          </div>

          <div className="why-card">
            <img src="/assets/icons/P4.svg" alt="Portfolio" className="card-icon" />
            <h3>Lucrative portfolio expansion</h3>
            <p>
              Expand your solutions portfolio while enhancing revenue streams
              and strategic value to customers by reselling Rightworks
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- FEATURED OFFERS ---------- */}
      <section className="featured-offers">
        <h2>Featured offers from our partners</h2>
        <p className="offers-desc">
          Rightworks partners with top-tier companies in the accounting and tax
          profession to offer our customers the technology and services they
          need to run a modern, thriving and secure business.
        </p>

        <div className="offers-grid">
          <div className="offer-card">
            <img src="/assets/PT2.svg" alt="Canopy" />
            <h3>Transcripts and notices</h3>
            <p>
              Get 15% off Canopy’s transcripts & notices for the first
              subscription year.
            </p>
            <button>Learn More →</button>
          </div>

          <div className="offer-card">
            <img src="/assets/PT3.svg" alt="Botkeeper" />
            <h3>Bookkeeping</h3>
            <p>
              Receive $100 off per-entity fees for two months, plus free
              implementation.
            </p>
            <button>Learn More →</button>
          </div>

          <div className="offer-card">
            <img src="/assets/PT4.webp" alt="Source Advisors" />
            <h3>Tax credits, deductions and incentives</h3>
            <p>Take advantage of a 10% reduction in project fees.</p>
            <button>Learn More →</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
