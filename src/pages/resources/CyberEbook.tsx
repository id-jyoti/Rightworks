import React from "react";
import "./CyberEbook.css";

const CyberEbook = () => {
  return (
    <section className="cyber-ebook">
      {/* Top Purple Header */}
      <div className="cyber-ebook-card">
        <p className="cyber-ebook-subtitle">eBook</p>
        <h1 className="cyber-ebook-title">
          The Ultimate Cybersecurity Guide For the Modern Accountant
        </h1>
        <p className="cyber-ebook-description">
          Learn how to secure your clients' data and your practice's reputation
          with this comprehensive cybersecurity guide.
        </p>
      </div>

      {/* Content + Form Section */}
      <div className="cyber-ebook-content">
        {/* Social + Left Content */}
        <div className="cyber-ebook-left">
          {/* Floating Social Share */}
          <div className="social-share">
            <p>SHARE</p>
            <a href="#">f</a>
            <a href="#">X</a>
            <a href="#">in</a>
          </div>

          {/* Text Content */}
          <div className="ebook-text">
            <h2>Protect your firm’s most valuable asset: Your clients’ trust</h2>
            <p>
              Whether you run a small practice or a large firm, your clients
              trust you to not only manage their financials but also to
              successfully guard their data from cyberthreats. Cybersecurity can
              be complicated, but we can help empower your firm with strategies,
              best practices and resources to strengthen the way you protect
              your firm’s data.
            </p>
            <p>In this guide, you’ll explore:</p>
            <ul>
              <li>
                Common cybersecurity threats and challenges facing accounting
                firms.
              </li>
              <li>
                Best practices and essential measures that go beyond basic
                compliance.
              </li>
              <li>How to build a security-first culture.</li>
              <li>Actionable insights and real-world examples.</li>
            </ul>
            <p className="ebook-cta">Download the guide now.</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="cyber-ebook-form">
          <p className="required-text">"*" indicates required fields</p>
          <form>
            <div className="form-row">
              <input type="text" placeholder="First name*" required />
              <input type="text" placeholder="Last name*" required />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email*" required />
              <input type="tel" placeholder="Phone*" required />
            </div>
            <div className="form-row">
              <select required>
                <option>United States or US Territory</option>
                <option>India</option>
                <option>Other</option>
              </select>
              <input type="text" placeholder="Company*" required />
            </div>
            <div className="form-row">
              <select required>
                <option>Which describes you?</option>
                <option>Accountant</option>
                <option>Firm Owner</option>
                <option>Other</option>
              </select>
            </div>
            <div className="consent">
              <input type="checkbox" id="consent" />
              <label htmlFor="consent">
                Sign me up to receive news, product updates and event invites
                from <strong>Rightworks</strong>. See{" "}
                <a href="#">Privacy Policy</a>.
              </label>
            </div>
            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CyberEbook;
