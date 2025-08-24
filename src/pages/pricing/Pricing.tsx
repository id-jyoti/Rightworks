import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing">
      {/* Left Content */}
      <div className="pricing-content">
        <p className="pricing-subtitle">Pricing Overview</p>
        <h2 className="pricing-title">
          Products (and prices) <br /> that accounting & tax pros love
        </h2>
        <p className="pricing-description">
          From cloud hosting and data security to QuickBooks® access and more,
          our products are built for firms and businesses of every size—choose
          the one that’s right for you
        </p>
      </div>

      {/* Right Side Image */}
      <div className="pricing-image">
        <img src="/assets/P1.webp" alt="Laptop with dashboard" />
      </div>
    </section>
  );
};

export default Pricing;
