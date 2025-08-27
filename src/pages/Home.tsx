import React from "react";
import g2Logo from "../assets/g2.svg"; // adjust path if needed
import Features from "../components/Feature";
import CaseStudy from "../components/CaseStudy";
import PartnersStats from "../components/PartnerStats";
import Awards from "../components/Awards";
const Home = ()=>{
  return (
    <main className={`home`}>
      <section className={`hero`}>
        {/* Top tagline */}
        <p className={`hero-tagline`}>
          {`Trusted by more than 50% of the Top 25 Accounting Firms`}
        </p>
        {/* Title */}
        <h1 className={`hero-title`}>
          {`Hello, `}
          <span className={`highlight`}>
            {`accounting`}
          </span>
          {` `}
          <span className={`gradient-text`}>
            {`awesomeness.`}
          </span>
        </h1>
        {/* Subtitle */}
        <p className={`hero-subtitle`}>
          {`From cloud hosting and data security to fully-managed IT support, our`}
          {`easy-to-use tools take the guesswork out of technology so accounting`}
          {`and tax pros can work smarter, safer, and more productively than ever`}
          {`before.`}
        </p>
        {/* Rating */}
        <div className={`hero-rating`}>
          <img alt={`G2 Logo`} className={`rating-logo`} src={g2Logo}/>
          <span className={`stars`}>
            {`★★★★★`}
          </span>
          <span className={`rating-text`}>
            {`4.8 out of 5.0`}
          </span>
        </div>
      </section>
      <Features/>
      <CaseStudy/>
      <PartnersStats/>
      <Awards/>
      {/* Get Started Section */}

      {/* Call to Action */}
    </main>
  );
};
export default Home;
