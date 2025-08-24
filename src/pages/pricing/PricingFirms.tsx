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
    </section>
  );
};

export default PricingFirms;
