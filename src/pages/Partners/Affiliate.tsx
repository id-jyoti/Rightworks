import "./Affiliate.css";
const Affiliate = ()=>{
  return (
    <div className={`affiliate`}>

      {/* Hero Section */}
      <section className={`affiliate-hero`}>
        <div className={`affiliate-hero-text`}>
          <h1>
            {`Share the benefits and reap the rewards... start earning today`}
          </h1>
          <button className={`apply-btn`}>
            {`APPLY TODAY`}
          </button>
        </div>
        <div className={`affiliate-hero-image`}>
          <img alt={`Affiliate Hero`} src={`/assets/AF1.webp`}/>
        </div>
      </section>
      {/* Elite Affiliate Program */}
      <section className={`affiliate-program`}>
        <div className={`affiliate-program-image`}>
          <img alt={`Affiliate Program`} src={`/assets/AF2.webp`}/>
        </div>
        <div className={`affiliate-program-text`}>
          <h4>
            {`Transaction Pro Elite Affiliate Program`}
          </h4>
          <h2>
            {`Start earning with the Elite Affiliate Program`}
          </h2>
          <p>
            {`The Transaction Pro Elite Affiliate Program is designed to help you`}
            {`unlock the potential of earning referral fees on every sale. As an`}
            {`approved affiliate partner, you can participate in three membership`}
            {`levels—Silver, Gold and Elite—and earn up to a 20% referral fee on`}
            {`each sale.`}
          </p>
          <p>
            {`Want to join? Simply click the button below, complete the application`}
            {`and we’ll let you know once you’re approved.`}
          </p>
          <button className={`apply-btn`}>
            {`APPLY NOW`}
          </button>
        </div>
      </section>
      {/* How it Works */}
      <section className={`affiliate-how`}>
        <div className={`affiliate-how-text`}>
          <h2>
            {`How it works`}
          </h2>
          <p>
            {`As an affiliate partner, you’ll receive:`}
          </p>
          <ul>
            <li>
              {`✔ A unique URL to use on your website and in upcoming promotions.`}
            </li>
            <li>
              {`✔ Access to sales promotions on Transaction Pro products.`}
            </li>
            <li>
              {`✔ Digital assets to help you sell Transaction Pro.`}
            </li>
            <li>
              {`✔ Up to a 20% referral fee on every purchase made from your unique URL.`}
            </li>
          </ul>
        </div>
        <div className={`affiliate-how-image`}>
          <img alt={`How it works`} src={`/assets/AF3.webp`}/>
        </div>
      </section>
      {/* FAQ Section */}
      <section className={`affiliate-faq`}>
        <div className={`faq-container`}>
          {/* Left Column */}
          <div className={`faq-left`}>
            <h2>
              {`FAQs:`}
            </h2>
            <p>
              {`Have additional questions about getting started? Contact us today at`}
              {` `}
              <a href={`mailto:tproaffiliates@rightworks.com`}>
                {`tproaffiliates@rightworks.com`}
              </a>
            </p>
          </div>
          {/* Right Column */}
          <div className={`faq-right`}>
            <details open>
              <summary>
                {`Is the Elite Affiliate Program free?`}
              </summary>
              <p>
                {`Yes, the program is free to all approved affiliate partners.`}
              </p>
            </details>
            <details>
              <summary>
                {`How does this program track sales?`}
              </summary>
              <p>
                {`Sales are tracked using your unique referral URL.`}
              </p>
            </details>
            <details>
              <summary>
                {`How much will I earn?`}
              </summary>
              <p>
                {`You can earn up to 20% referral fee depending on membership level.`}
              </p>
            </details>
            <details>
              <summary>
                {`How do I get paid?`}
              </summary>
              <p>
                {`Payments are issued based on tracked sales via your affiliate account.`}
              </p>
            </details>
          </div>
        </div>
      </section>

    </div>
  );
};
export default Affiliate;
