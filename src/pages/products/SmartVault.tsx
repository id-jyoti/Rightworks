import "./SmartVault.css";
const SmartVault = ()=>{
  return (
    <div className={`smartvault-container`}>
      {/* Hero Section */}
      <section className={`smartvault-hero`}>
        <div className={`smartvault-hero-text`}>
          <p className={`smartvault-highlight`}>
            {`Rightworks + SmartVault Accounting Pro`}
          </p>
          <h1>
            {`Secure, simple document management`}
          </h1>
          <p className={`smartvault-sub-text`}>
            {`Combine SmartVault Accounting Pro, the No. 1-rated file sharing and`}
            {`client portal solution for accountants, with Rightworks Cloud to`}
            {`simplify document management and increase productivity.`}
          </p>
          <button className={`smartvault-cta-btn`}>
            {`Get Started →`}
          </button>
        </div>
      </section>
      {/* Security Section */}
      <section className={`smartvault-security`}>
        <div className={`smartvault-security-content`}>

          {/* Left Image */}
          <div className={`smartvault-security-image`}>
            <img alt={`Team collaboration`}
              src={`/assets/SV1.webp`}
            />
          </div>
          {/* Right Text */}
          <div className={`smartvault-security-text`}>
            <p className={`smartvault-highlight`}>
              {`Security meets efficiency`}
            </p>
            <h2>
              {`Protect your work with `}
              <br/>
              {`Rightworks + SmartVault Accounting Pro`}
            </h2>
            <p>
              {`When you combine SmartVault Accounting Pro with Rightworks Cloud,`}
              {`you get everything you need to run your accounting practice in the`}
              {`cloud—securely, quickly and efficiently. SmartVault adapts to the`}
              {`tools you already have with integrations and workflows to Lacerte,`}
              {`ProSeries, UltraTax, CCH®, Drake, DocuSign and more. Elevate your`}
              {`workflow game with an integrated system built especially for`}
              {`accounting firms.`}
            </p>
          </div>
        </div>
      </section>
      {/* Operations Section */}
      <section className={`smartvault-operations`}>
        <p className={`smartvault-highlight`}>
          {`Built for accountants, by accountants`}
        </p>
        <h2>
          {`Simplify operations. Securely collaborate with clients. Optimize`}
          {`productivity.`}
        </h2>
        <div className={`smartvault-features`}>
          <div className={`smartvault-feature-card`}>
            <h3>
              {`Branded client portals`}
            </h3>
            <p>
              {`Offer a secure, intuitive place to do business with your clients,`}
              {`where they can easily exchange sensitive documents—anytime and`}
              {`anywhere.`}
            </p>
          </div>
          <div className={`smartvault-feature-card`}>
            <h3>
              {`Secure filing sharing`}
            </h3>
            <p>
              {`With enterprise-grade security, clients rest assured that all`}
              {`documents are encrypted while shared and stored.`}
            </p>
          </div>
          <div className={`smartvault-feature-card`}>
            <h3>
              {`Streamlined workflow`}
            </h3>
            <p>
              {`Seamless integrations with popular solutions like Lacerte,`}
              {`ProSeries and QuickBooks® accelerate productivity by reducing`}
              {`manual work and allowing time to focus on higher-value advisory`}
              {`work.`}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SmartVault;
