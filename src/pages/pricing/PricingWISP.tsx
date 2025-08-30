import "./PricingWISP.css";
const PricingWISP = ()=>{
  return (
    <section className={`pricingwisp`}>
      {/* Left Content */}
      <div className={`pricingwisp-content`}>
        <h1>
          <span className={`highlight`}>
            {`Ensure compliance`}
          </span>
          {` `}
          <br/>
          {`with a Written `}
          {` `}
          <br/>
          {` `}
          {`Information Security Plan`}
        </h1>
        <ul>
          <li>
            {`Paid tax preparers must have a WISP per IRS requirements.`}
          </li>
          <li>
            {`To renew your PTIN, firms need to have a data security plan in place`}
          </li>
          <li>
            {`Non-compliance could result in serious penalties`}
          </li>
        </ul>
        <div className={`pricingwisp-buttons`}>
          <button className={`btn-buy`}>
            {`BUY NOW`}
          </button>
          <button className={`btn-meeting`}>
            {`BOOK A MEETING →`}
          </button>
        </div>
      </div>
      {/* Right Side Image */}
      <div className={`pricingwisp-image`}>
        <img alt={`Man working on laptop`} src={`/assets/WISP2.webp`}/>
        {/* Floating labels */}
        <div className={`label label-top-left`}>
          {`Prevent cyberattacks`}
        </div>
        <div className={`label label-bottom-left`}>
          {`Protect client data`}
        </div>
      </div>
    </section>
  );
};
export default PricingWISP;
