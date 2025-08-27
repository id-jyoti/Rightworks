import React from "react";
import "./Offers.css";
const Offers = ()=>{
  return (
    <div className={`offers-container`}>
      {/* Hero Section */}
      <section className={`offers-hero`}>
        <div className={`offers-hero-text`}>
          <p className={`offers-breadcrumb`}>
            {`Partners / Featured offers`}
          </p>
          <h1>
            {`Featured offers from Rightworks partners`}
          </h1>
          <p>
            {`To achieve your goals and take your business to the next level—take`}
            {`advantage of these exclusive featured offers from Rightworks`}
            {`partners today.`}
          </p>
        </div>
        <div className={`offers-hero-image`}>
          <img alt={`Rightworks Partner`} src={`/assets/FO1.webp`}/>
        </div>
      </section>
      {/* Featured offers for accounting firms */}
      <section className={`offers-section`}>
        <h2>
          {`Featured offers for accounting firms`}
        </h2>
        <p>
          {`Start running a modern, thriving and secure practice with these`}
          {`exclusive, featured offers from Rightworks partners.`}
        </p>
        <div className={`offers-grid`}>
          <div className={`offer-card`}>
            <img alt={`Source Advisors`} src={`/assets/FO2.webp`}/>
            <h3>
              {`Get 10% off Source Advisors’ project fees`}
            </h3>
            <p>
              {`Maximize your clients’ tax incentive strategy, help them save`}
              {`money, create cash flow and drive overall growth with Source`}
              {`Advisors.`}
            </p>
            <button>
              {`Learn More →`}
            </button>
          </div>
          <div className={`offer-card`}>
            <img alt={`Botkeeper`} src={`/assets/FO3.svg`}/>
            <h3>
              {`Get $100 off Botkeeper`}
            </h3>
            <p>
              {`Experience cloud-based, lightning-fast bookkeeping automation. Get`}
              {`$100 off per-entity fees for two months, plus free implementation.`}
            </p>
            <button>
              {`Learn More →`}
            </button>
          </div>
          <div className={`offer-card`}>
            <img alt={`CPACharge`} src={`/assets/FO5.svg`}/>
            <h3>
              {`Try CPACharge with zero monthly fees`}
            </h3>
            <p>
              {`Simplify billing processes with user-friendly payment features and`}
              {`all the reporting tools you’ll need for fast, easy reconciliation.`}
            </p>
            <button>
              {`Learn More →`}
            </button>
          </div>
          <div className={`offer-card`}>
            <img alt={`Bill`} src={`/assets/FO6.svg`}/>
            <h3>
              {`Get 10% off AP & AR automation`}
            </h3>
            <p>
              {`BILL provides a financial operations platform that delivers`}
              {`integrated and automated software solutions for AP, AR, and spend`}
              {`and expense.`}
            </p>
            <button>
              {`Learn More →`}
            </button>
          </div>
          <div className={`offer-card`}>
            <img alt={`SafeSend`} src={`/assets/FO7.webp`}/>
            <h3>
              {`Automate your tax processes with 10% off`}
            </h3>
            <p>
              {`SafeSend offers automation technology for tax and accounting`}
              {`firms. Engagement letters, e-sign, file exchange and more—all in`}
              {`one.`}
            </p>
            <button>
              {`Learn More →`}
            </button>
          </div>
          <div className={`offer-card`}>
            <img alt={`ADP`} src={`/assets/FO8.webp`}/>
            <h3>
              {`Get 20% off Rightworks Cloud Premier`}
            </h3>
            <p>
              {`Exclusive offer for ADP firms—get 20% off your monthly`}
              {`subscription for one year when you purchase Rightworks Cloud`}
              {`Premier with Total Security. Mention ADP20.`}
            </p>
            <button>
              {`Learn More →`}
            </button>
          </div>
        </div>
      </section>
      {/* Featured offers for small businesses */}
      <section className={`offers-section`}>
        <h2>
          {`Featured offers for small businesses`}
        </h2>
        <p>
          {`Start running a modern, thriving and secure practice with these`}
          {`exclusive, featured offers from Rightworks partners.`}
        </p>
        <div className={`offers-grid`}>
          <div className={`offer-card`}>
            <img alt={`Bill Free Offer`} src={`/images/bill.png`}/>
            <h3>
              {`Get a free 3-month BILL subscription`}
            </h3>
            <p>
              {`BILL provides a financial operations platform that delivers`}
              {`integrated and automated software solutions for AP, AR, and spend`}
              {`and expense. Try it free for three months today.`}
            </p>
            <button>
              {`Learn More →`}
            </button>
          </div>
        </div>
      </section>
      {/* Help Section */}
      <section className={`offers-help`}>
        <h2>
          {`Have questions? We’re here to help.`}
        </h2>
        <p>
          {`Give us a call at `}
          <a href={`tel:8666914291`}>
            {`866.691.4291`}
          </a>
          {`.`}
        </p>
        <div className={`help-buttons`}>
          <button className={`btn-accounting`}>
            {`Accounting Firms →`}
          </button>
          <button className={`btn-small`}>
            {`Small Businesses →`}
          </button>
        </div>
      </section>
    </div>
  );
};
export default Offers;
