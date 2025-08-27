import React from "react";
import "./CloudPremier.css";
const CloudPremier = ()=>{
  const revenueBoost = 40;
  const years = 20;
  const firms = 10000;
  return (
    <>
      {/* Hero Section */}
      <section className={`cloud-premier`}>
        <div className={`cloud-premier-content`}>
          <p className={`tagline`}>
            {`Rightworks Cloud Hosting`}
          </p>
          <h1>
            {`Access your desktop apps from `}
            <span>
              {`anywhere`}
            </span>
          </h1>
          <p className={`description`}>
            {`Cloud Hosting lets you host your desktop accounting and business apps in the cloud, so your team can work easily, securely, and productively from anywhere.`}
          </p>
          <div className={`cta-buttons`}>
            <a className={`btn-primary`} href={`#`}>
              {` `}
              {`BUSINESS PLANS`}
              {` `}
            </a>
            <a className={`btn-outline`} href={`#`}>
              {` `}
              {`FIRM PLANS`}
              {` `}
            </a>
          </div>
        </div>
        <div className={`cloud-premier-image`}>
          <img alt={`Example workspace`} src={`../assets/CP1.webp`}/>
        </div>
      </section>
      {/* Trusted Tools Section */}
      <section className={`trusted-tools`}>
        <p className={`trusted-text`}>
          {`Host the appls you already rely on`}
        </p>
        <div className={`trusted-logos`}>
          <img alt={`ADP`} src={`/assets/logos/H.svg`}/>
          <img alt={`bill`} src={`/assets/logos/I.svg`}/>
          <img alt={`microsoft`} src={`/assets/logos/J.svg`}/>
          <img alt={`intuit`} src={`/assets/logos/K.svg`}/>
          <img alt={`expensify`} src={`/assets/logos/L.svg`}/>
          <img alt={`smart vault`} src={`/assets/logos/M.svg`}/>
          <img alt={`xero`} src={`/assets/logos/F.svg`}/>
          <img alt={`intuit`} src={`/assets/logos/E.svg`}/>
        </div>
        <div className={`trusted-btn`}>
          <a className={`btn-outline`}
            href={``}
            rel={`noopener noreferrer`}
            target={`_blank`}
          >
            {`View App Directory →`}
          </a>
        </div>
      </section>
      {/* Simplify App Access Section 1 */}
      <section className={`simplify-section`}>
        <div className={`simplify-image`}>
          <img alt={`Simplify app access`} src={`../assets/CH2.webp`}/>
        </div>
        <div className={`simplify-content`}>
          <h2>
            {`Simplify your tech tools with one secure workspace`}
          </h2>
          <ul>
            <li>
              {`Work across desktop and cloud-based apps from one dashboard`}
            </li>
            <li>
              {`Reduce redundancy and task-switching with a unified interface`}
            </li>
            <li>
              {`Easily share files, data, and insights with your team and clients`}
            </li>
            <li>
              {`Lighten the load with AI tools for communication and analytics`}
            </li>
          </ul>
        </div>
      </section>
      {/* Simplify App Access Section 2 */}
      <section className={`simplify-section`}>
        <div className={`simplify-content`}>
          <h2>
            {`Protect your firm or business with enterprise-grade security`}
          </h2>
          <ul>
            <li>
              {`Enhance security for vital apps with multifactor authentication and encrypted datay`}
            </li>
            <li>
              {`Easily access granular Rewind Backups for QuickBooks Online`}
            </li>
            <li>
              {`Keep your data safe and your apps running with automated updates`}
            </li>
            <li>
              {`Minimize downtime and ensure your business stays up and running`}
            </li>
          </ul>
        </div>
        <div className={`simplify-image`}>
          <img alt={`Simplify app access`} src={`../assets/CH3.webp`}/>
        </div>
      </section>
      {/* Simplify App Access Section 3*/}
      <section className={`simplify-section`}>
        <div className={`simplify-image`}>
          <img alt={`Simplify app access`} src={`../assets/CH4.webp`}/>
        </div>
        <div className={`simplify-content`}>
          <h2>
            {`Power productivity with secure desktop access`}
          </h2>
          <ul>
            <li>
              {`Provide controlled, secure access to your desktop tools`}
            </li>
            <li>
              {`Seamlessly collaborate across locations, time zones, and teams`}
            </li>
            <li>
              {`Switch between apps without losing focus or time`}
            </li>
            <li>
              {`Support hybrid and remote teams with ease`}
            </li>
          </ul>
        </div>
      </section>
      {/* Simplify App Access Section 4*/}
      <section className={`simplify-section`}>
        <div className={`simplify-content`}>
          <h2>
            {`Work with a team that understands accounting`}
          </h2>
          <ul>
            <li>
              {`Get 24/7 support from accounting tech specialists`}
            </li>
            <li>
              {`Partner with a team that knows your tools and workflow`}
            </li>
            <li>
              {`Join 10,000+ firms and 60,000+ businesses relying on Rightworks`}
            </li>
            <li>
              {`Count on decades of experience in accounting-focused cloud solutions`}
            </li>
          </ul>
        </div>
        <div className={`simplify-image`}>
          <img alt={`Simplify app access`} src={`../assets/CH5.webp`}/>
        </div>
      </section>
      {/* Simplify App Access Section 3*/}
      <section className={`simplify-section`}>
        <div className={`simplify-image`}>
          <img alt={`Simplify app access`} src={`../assets/CH6.webp`}/>
        </div>
        <div className={`simplify-content`}>
          <h2>
            {`Access Your Desktop Apps from Anywhere with Cloud Hosting`}
          </h2>
          <ul>
            <li>
              {`Watch how Cloud Hosting keeps your apps safe, simplifies access, and supports your team.`}
            </li>
            <a className={`video-link`} href={`#`}>
              {`Watch the video →`}
            </a>
          </ul>
        </div>
      </section>
      {/* ✅ Testimonial Section */}
      <section className={`testimonial`}>
        <div className={`testimonial-content`}>
          <span className={`quote-icon`}>
            {`“`}
          </span>
          <p className={`testimonial-text`}>
            {`“Rightworks is a great team member. They’re so ingrained in what we do and how we work.”`}
          </p>
          <p className={`testimonial-author`}/>
          <strong>
            {`Sutton Frost Cary LLP`}
          </strong>
          <br/>
        </div>
      </section>
      {/* ✅ Stats Row */}
      <section className={`stats`}>
        <div className={`stat-item`}>
          <h3>
            {revenueBoost}
            {`%`}
          </h3>
          <p>
            {`The right tech can boost revenue `}
            <br/>
            {`per employee by almost `}
            {revenueBoost}
            {`%`}
          </p>
        </div>
        <div className={`stat-divider`}/>
        <div className={`stat-item`}>
          <h3>
            {years}
            {`+ years`}
          </h3>
          <p>
            {`We’ve been helping accounting `}
            <br/>
            {`firms succeed for over `}
            {years}
            {` `}
            {`years`}
          </p>
        </div>
        <div className={`stat-divider`}/>
        <div className={`stat-item`}>
          <h3>
            {firms.toLocaleString ()}
            {`+ firms`}
          </h3>
          <p>
            {`Join the many firms who trust `}
            <br/>
            {`Rightworks to supercharge their business`}
          </p>
        </div>
      </section>
      <section className={`final-cta alt`}>
        <h2>
          {`Host your desktop apps in the cloud and work smarter, safer, and faster.`}
        </h2>
        <div className={`cta-buttons`}>
          <a className={`cta-btn primary`} href={`#`}>
            {`GET CLOUD HOSTING →`}
          </a>
          <a className={`cta-btn secondary`} href={`#`}>
            {`VIEW PLANS →`}
          </a>
        </div>
      </section>
    </>
  );
};
export default CloudPremier;
