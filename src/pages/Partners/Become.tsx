import React from "react";
import "./Become.css";
import { Phone, Calendar } from "lucide-react";

const Become: React.FC = () => {
  return (
    <div className="become-container">
      {/* Hero Section */}
       <section className="become-hero">
        <div className="become-hero-text">
          <h1>Rightworks referral partner</h1>
          <p>
            Thanks for your interest in becoming a Rightworks referral partner!
          </p>
          <p>
            Rightworks thrives on collaborating with leading companies to
            promote complementary products and services to firms and small to
            medium-sized businesses in the accounting and tax profession. Our
            Referral Partner Program is based on revenue sharing—and together,
            we can expand our market reach and deliver even greater value to
            Rightworks customers.
          </p>
        </div>
        <div className="become-hero-image">
          <img
            src="/assets/RP1.webp"
            alt="Referral Partner"
          />
        </div>
      </section>

      {/* Form + Contact Section */}
      <section className="become-contact">
        <div className="become-form">
          <h2>Connect with us today</h2>
          <p className="required">"*” indicates required fields</p>
          <form>
            <div className="form-row">
              <input type="text" placeholder="First name*" required />
              <input type="text" placeholder="Last name*" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Business name*" required />
              <input type="email" placeholder="Email*" required />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Phone*" required />
            </div>
            <button type="submit" className="submit-btn">
              SUBMIT →
            </button>
          </form>
        </div>

        <div className="become-info">
          <div className="info-card">
            <div className="icon-circle">
              <Phone size={28} strokeWidth={2} color="#6a00ff" />
            </div>
            <div>
              <h3>Call us today</h3>
              <p>We’re here to help!</p>
              <a href="tel:8669314770">866.931.4770</a>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-circle">
              <Calendar size={28} strokeWidth={2} color="#6a00ff" />
            </div>
            <div>
              <h3>Accounting firms</h3>
              <button className="calendar-btn">
                VIEW CALENDAR <Calendar size={16} />
              </button>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-circle">
              <Calendar size={28} strokeWidth={2} color="#6a00ff" />
            </div>
            <div>
              <h3>Small businesses</h3>
              <button className="calendar-btn">
                VIEW CALENDAR <Calendar size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Become;
