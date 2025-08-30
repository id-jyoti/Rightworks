import "./PricingBusiness.css";
const PricingBusiness = ()=>{
  return (
    <div>
      {/* Hero Section */}
      <section className={`pricingbusiness`}>
        <div className={`pricingbusiness__container`}>
          <h1 className={`pricingbusiness__title`}>
            {`Find the cloud plan that’s `}
            <br/>
            {` `}
            {`right for your business`}
          </h1>
          <p className={`pricingbusiness__description`}>
            {`No two businesses are alike. That’s why we built our products to work`}
            {`for your unique needs. Check out our plan options below to find the one`}
            {`that’s right for you.`}
          </p>
        </div>
      </section>
      {/* Plans Section */}
      <section className={`plans`}>
        <h2 className={`plans__heading`}>
          {`Explore our plans for businesses`}
        </h2>
        <div className={`plans__grid`}>
          {/* Card 1 */}
          <div className={`plan-card`}>
            <h4 className={`plan-card__brand`}>
              {`Rightworks`}
            </h4>
            <h3 className={`plan-card__title`}>
              {`Cloud for QuickBooks Online`}
            </h3>
            <p className={`plan-card__desc`}>
              {`Add more protection for `}
              <span>
                {`QuickBooks Online`}
              </span>
              {`, BILL, ADP and more…`}
            </p>
            <p className={`plan-card__price`}>
              {`Starting at $28 per user/month`}
            </p>
            <button className={`btn btn--primary`}>
              {`BOOK A CALL`}
            </button>
            <button className={`btn btn--secondary`}>
              {`BUY NOW`}
            </button>
            <div className={`plan-card__features`}>
              <h5>
                {`Key Features`}
              </h5>
              <ul>
                <li>
                  {`Advanced Security: Encrypted data transmission, MFA, secure data storage`}
                </li>
                <li>
                  {`Scalability for growing businesses`}
                </li>
                <li>
                  {`24/7 support team`}
                </li>
              </ul>
            </div>
          </div>
          {/* Card 2 */}
          <div className={`plan-card`}>
            <h4 className={`plan-card__brand`}>
              {`Rightworks`}
            </h4>
            <h3 className={`plan-card__title`}>
              {`Cloud Hosting`}
            </h3>
            <p className={`plan-card__desc`}>
              {`Access `}
              <span>
                {`QuickBooks Desktop`}
              </span>
              {` `}
              {`and other desktop & cloud-based apps from anywhere`}
            </p>
            <p className={`plan-card__price`}>
              {`Starting at $74 per user/month`}
            </p>
            <button className={`btn btn--primary`}>
              {`BOOK A CALL`}
            </button>
            <button className={`btn btn--secondary`}>
              {`BUY NOW`}
            </button>
            <div className={`plan-card__features`}>
              <h5>
                {`Key Features`}
              </h5>
              <ul>
                <li>
                  {`Comprehensive Application Access: Run QuickBooks Desktop + 100+ apps`}
                </li>
                <li>
                  {`Enterprise-grade security`}
                </li>
                <li>
                  {`Dedicated backups & disaster recovery`}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default PricingBusiness;
