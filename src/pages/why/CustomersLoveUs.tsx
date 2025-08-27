import React from "react";
import "./CustomersLoveUs.css";
const CustomersLoveUs = ()=>{
  return (
    <section className={`customers-love-us`}>
      {/* Section 1 - Image Right */}
      <div className={`customer-block`}>
        <div className={`customer-text`}>
          <h2>
            {`Meet our customers: `}
            <br/>
            {`Disrupting the status quo`}
          </h2>
          <p>
            {`Thousands of accounting firms and small to mid-sized businesses`}
            {`nationwide count on us to help run their operations every day. And`}
            {`we take that trust seriously.`}
          </p>
        </div>
        <div className={`customer-image`}>
          <img alt={`Customers group`} src={`/assets/C1.webp`}/>
        </div>
      </div>
      {/* Section 2 - Image Left */}
      <div className={`customer-block image-left`}>
        <div className={`customer-image`}>
          <img alt={`Customer testimonial`} src={`/assets/C2.webp`}/>
        </div>
        <div className={`customer-text`}>
          <h2>
            {`Customer testimonials`}
          </h2>
          <p>
            {`But don’t take our word for it… read the latest customer testimonials.`}
          </p>
          <button className={`btn-purple`}>
            {`READ CUSTOMER STORIES →`}
          </button>
        </div>
      </div>
      {/* Section 3 - Image Right */}
      <div className={`customer-block`}>
        <div className={`customer-text`}>
          <h2>
            {`Customer reviews`}
          </h2>
          <p>
            {`We take pride in our award-winning customer care team. Read all about`}
            {`the team’s accolades and access company reviews.`}
          </p>
          <button className={`btn-purple`}>
            {`READ REVIEWS →`}
          </button>
        </div>
        <div className={`customer-image`}>
          <img alt={`Customer review`} src={`/assets/C3.webp`}/>
        </div>
      </div>
    </section>
  );
};
export default CustomersLoveUs;
