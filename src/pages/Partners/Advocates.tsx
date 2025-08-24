import React from "react";
import "./Advocates.css";

const Advocates: React.FC = () => {
  return (
    <div className="advocates">
      {/* Hero Section */}
      <section className="advocates-hero">
        <div className="advocates-hero-text">
          <p className="advocates-breadcrumb">Partners / Advocates program</p>
          <h1>Rightworks Customer Advocates Program</h1>
          <p>
            Unlock discounts, earn rewards and start saving money by referring
            Rightworks OneSpace solutions. Sign up today.
          </p>
          <button className="advocates-btn">LEARN MORE →</button>
        </div>
        <div className="advocates-hero-image">
          <img src="/assets/AP1.webp" alt="Man on laptop" />
        </div>
      </section>

      {/* How it Works Section */}
      <section className="advocates-how">
        <h2>How it works</h2>
        <div className="advocates-steps">
          <div className="advocates-step">
            <h3>1</h3>
            <h4>Join the Advocates Program</h4>
            <p>
              Create your PartnerStack account <a href="#">here</a> to get
              started.
            </p>
          </div>
          <div className="advocates-step">
            <h3>2</h3>
            <h4>Start referring</h4>
            <p>
              Get your unique referral link and share it with anyone you’d like
              to refer.
            </p>
          </div>
          <div className="advocates-step">
            <h3>3</h3>
            <h4>Save money</h4>
            <p>
              Use your custom portal to track referral applicants, share
              information and watch your rewards multiply.
            </p>
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="advocates-qualification">
        <h2>
          Wondering if you qualify for the Rightworks Customer Advocates
          Program?
        </h2>
        <div className="advocates-qualify-cards">
          <div className="advocates-card">
            <div className="advocates-icon">👩‍💼</div>
            <p>
              You’re an accounting, tax, bookkeeping firm or small business.
            </p>
          </div>
          <div className="advocates-card">
            <div className="advocates-icon">💻</div>
            <p>
              You use one of these Rightworks solutions:
              <br />
              QuickBooks Desktop Cloud
              <br />
              QuickBooks Business Cloud
              <br />
              QuickBooks Application Cloud
              <br />
              OneSpace
              <br />
              OneSpace Firm
            </p>
          </div>
          <div className="advocates-card">
            <div className="advocates-icon">👍</div>
            <p>You qualify!</p>
          </div>
        </div>
      </section>

      {/* Advocate Programs Section */}
      <section className="advocates-programs">
        <h2>Ready to become an Advocate?</h2>
        <div className="advocates-program-cards">
          <div className="advocates-program-card">
            <img src="/assets/AP2.webp" alt="OneSpace referral" />
            <div className="advocates-program-text">
              <h3>OneSpace referral program</h3>
              <p>
                Unlock discounts, earn credits on your Rightworks bill and start
                saving money by referring Rightworks OneSpace products to other
                businesses. Sign up today.
              </p>
              <button className="advocates-btn">LEARN MORE →</button>
            </div>
          </div>

          <div className="advocates-program-card">
            <img src="/assets/AP3.webp" alt="Cloud Premier referral" />
            <div className="advocates-program-text">
              <h3>Cloud Premier referral program</h3>
              <p>
                Unlock savings when referring OneSpace Firm to friends and peers
                at other firms today by clicking the button below.
              </p>
              <button className="advocates-btn">LEARN MORE →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advocates;
