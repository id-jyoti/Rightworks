import React from "react";
import "./PricingFirms.css";

const PricingFirms: React.FC = () => {
  return (
    <section className="pricingfirms">
      <div className="pricingfirms__container">
        <p className="pricingfirms__subtitle">Plans and pricing</p>
        <h1 className="pricingfirms__title">
          Find the cloud plan that’s <br /> right for your firm
        </h1>
        <p className="pricingfirms__description">
          No two accounting firms are alike. That’s why we built our plans to work
          for your unique needs. Check out our plan options below to find the one
          that’s right for you.
        </p>
      </div>

      {/* Pricing Cards Section */}
      <div className="pricingfirms__plans">
        {/* Cloud Protect */}
        <div className="pricingfirms__card">
          <div className="pricingfirms__card-top">
            <h4 className="pricingfirms__card-subtitle">Rightworks</h4>
            <h3 className="pricingfirms__card-title">Cloud Protect</h3>
            <p className="pricingfirms__card-text">
              Get more <span>security and control</span> for your cloud-based apps
            </p>
            <p className="pricingfirms__card-price">
              Starting at $45 per user/month
            </p>
            <button className="pricingfirms__button">BOOK A CALL</button>
          </div>
          <div className="pricingfirms__features">
            <h5>Features</h5>
            <ul>
              <li>Single Sign-On for Cloud-Based Apps: Access client and firm cloud-based applications efficiently and securely with single-sign on.</li>
              <li>No Password Assignment: Staff can securely access client apps such as bank accounts and your firm’s business-critical cloud apps without passwords.</li>
              <li>Granular Control & Reporting: Track logins and create reports on access and activity, including failed login attempts.</li>
              <li>Custom Access Policies: Define access rules by user, location, or time of day.</li>
            </ul>
          </div>
        </div>

        {/* Cloud Hosting */}
        <div className="pricingfirms__card">
          <div className="pricingfirms__card-top">
            <h4 className="pricingfirms__card-subtitle">Rightworks</h4>
            <h3 className="pricingfirms__card-title">Cloud Hosting</h3>
            <p className="pricingfirms__card-text">
              Access <span>QuickBooks Desktop</span> and other desktop apps online
            </p>
            <p className="pricingfirms__card-price">
              Starting at $74 per user/month
            </p>
            <button className="pricingfirms__button">BOOK A CALL</button>
          </div>
          <div className="pricingfirms__features">
            <h5>Features</h5>
            <ul>
              <li>Comprehensive Application Access: Run QuickBooks Desktop plus 100+ cloud-based and desktop apps from anywhere.</li>
              <li>Enterprise-grade Security: Multifactor authentication, secure data storage with 90-day backups, and more.</li>
              <li>Productivity Tools: Get more from QuickBooks with AI insights for efficiency and performance.</li>
              <li>Award-winning Support: 24/7 support backed by deep knowledge in accounting and finance.</li>
            </ul>
          </div>
        </div>

        {/* Cloud Premier */}
        <div className="pricingfirms__card">
          <div className="pricingfirms__card-top">
            <h4 className="pricingfirms__card-subtitle">Rightworks</h4>
            <h3 className="pricingfirms__card-title">Cloud Premier</h3>
            <p className="pricingfirms__card-text">
              Bring all your apps, tools, and IT support into{" "}
              <span>one secure cloud platform</span>
            </p>
            <p className="pricingfirms__card-price">Get your custom quote</p>
            <button className="pricingfirms__button">BOOK A CALL</button>
          </div>
          <div className="pricingfirms__features">
            <h5>Features</h5>
            <ul>
              <li>Web-Based Portal: Access all firm applications (cloud or desktop) in one secure, multifactor authenticated portal.</li>
              <li>Managed Desktop Hosting: High-performance hosting for accounting, tax, and business apps.</li>
              <li>Single Sign-On: Staff can access apps without ever seeing passwords. Plus, insights into access and login rules.</li>
              <li>Data Backups: Two years of secure data backups with hourly snapshots.</li>
              <li>Microsoft App Security: Manage Microsoft 365 (including Exchange email) with licensing and support.</li>
              <li>Device Security: Advanced endpoint protection with detection and response (EDR).</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Logos Section */}
        <div className="pricingfirms__logos">
          <p className="pricingfirms__logos-title">
            Rightworks supports 3,000+ accounting, tax and business apps
          </p>
          <div className="pricingfirms__logos-row">
            <img src="/assets/logos/A.svg" alt="ADP" />
            <img src="/assets/logos/B.svg" alt="Wolters Kluwer" />
            <img src="/assets/logos/C.svg" alt="Expensify" />
            <img src="/assets/logos/D.svg" alt="Microsoft" />
            <img src="/assets/logos/E.svg" alt="Thomson Reuters" />
            <img src="/assets/logos/F.svg" alt="QuickBooks" />
            <img src="/assets/logos/G.svg" alt="Wolters Kluwer" />
            <img src="/assets/logos/H.svg" alt="Xero" />
          </div>
        </div>

       {/* Testimonials Section */}
      <div className="testimonials">
        <h2>Thousands of accounting firms depend on us every day</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              “Rightworks has become a very valuable trusted IT partner and allows
              our staff to easily work between office locations and remotely. Their
              working knowledge of our industry applications provides exceptional
              support.”
            </p>
            <div className="author">
              <img src="/assets/L1.webp" alt="Keith Caldwell" />
              <div>
                <h4>Keith Caldwell</h4>
                <span>COO, Whaley Hammonds Tomasello, P.C.</span>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <p>
              “Rightworks enables me to run my firm efficiently. It's been a game
              changer. I am saving over $10,000 annually compared to maintaining paper
              files and avoiding the need for a $15,000 server.”
            </p>
            <div className="author">
              <img src="/assets/L2.webp" alt="Nathan Wray" />
              <div>
                <h4>Nathan B Wray, EA</h4>
                <span>Founder and President, Wray Enterprises, Inc.</span>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <p>
              “Rightworks is proactive in helping us stay current with upgrades related
              to our software applications and preventive security measures to keep
              our client data safe. Rightworks is an outstanding business partner for
              us!”
            </p>
            <div className="author">
              <img src="/assets/L3.webp" alt="Ellen McCollum" />
              <div>
                <h4>Ellen McCollum</h4>
                <span>Director of Operations, JHM CPAs</span>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-call">📞 Book my call</button>
      </div>

      {/* Security / Stats Section */}
      <div className="security-stats">
        <h2>Trusted by thousands of firms</h2>
        <div className="stats-grid">
          <div className="stat">
            <h3>3,000+</h3>
            <p>Accounting, tax and business apps supported</p>
          </div>
          <div className="stat">
            <h3>99.99%</h3>
            <p>Guaranteed uptime reliability</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>U.S.-based expert support</p>
          </div>
          <div className="stat">
            <h3>5 Stars</h3>
            <p>Trusted reviews from accounting firms</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq">
        <h2>Frequently asked questions</h2>
        <div className="faq-item">
          <h4>What makes your cloud hosting secure?</h4>
          <p>
            We provide enterprise-level security with data encryption, regular
            backups, and proactive monitoring 24/7.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can I upgrade my plan later?</h4>
          <p>
            Yes, you can switch to a higher plan anytime without losing your existing
            data or settings.
          </p>
        </div>
        <div className="faq-item">
          <h4>Do you offer customer support?</h4>
          <p>
            Absolutely. Our U.S.-based experts are available 24/7 to help you with any
            issues.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingFirms;
