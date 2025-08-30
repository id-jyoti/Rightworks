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
            {`Rightworks Cloud Premier`}
          </p>
          <h1>
            {`Future-proof your firm `}
            <br/>
            {` `}
            {`with`}
            <span>
              {`Cloud Premier`}
            </span>
          </h1>
          <p className={`description`}>
            {`Built for accounting and tax professionals, Cloud Premier brings all`}
            {`your apps, tools, and IT support into one secure cloud platform, so`}
            {`you can work smarter and build a more modern firm.`}
          </p>
          <div className={`cta-buttons`}>
            <a className={`btn-primary`} href={`/#`}>
              {`View Plans →`}
            </a>
            <a className={`btn-outline`} href={`/#`}>
              {`Get Cloud Premier →`}
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
          {`Work with the tools you already trust`}
        </p>
        <div className={`trusted-logos`}>
          <img alt={`Thomson Reuters`} src={`/assets/logos/A.svg`}/>
          <img alt={`Wolters Kluwer`} src={`/assets/logos/B.svg`}/>
          <img alt={`CCH Access`} src={`/assets/logos/C.svg`}/>
          <img alt={`Microsoft`} src={`/assets/logos/D.svg`}/>
          <img alt={`QuickBooks`} src={`/assets/logos/E.svg`}/>
          <img alt={`Xero`} src={`/assets/logos/F.svg`}/>
          <img alt={`Bill`} src={`/assets/logos/G.svg`}/>
        </div>
        <div className={`trusted-btn`}>
          <a className={`btn-outline`}
            href={`/#`}
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
          <img alt={`Simplify app access`} src={`../assets/CP2.webp`}/>
        </div>
        <div className={`simplify-content`}>
          <h2>
            {`Simplify app access in one safe space`}
          </h2>
          <ul>
            <li>
              {`Get safe access to 3,000+ tax and accounting apps like Thomson`}
              {`Reuters® CS Professional Suite, CCH® ProSystem fx® and CCH`}
              {`Access™ Suite, QuickBooks® Desktop, and QuickBooks Online`}
            </li>
            <li>
              {`Work from anywhere with single sign-on for cloud-based apps`}
              {`without assigning credentials, plus work seamlessly with desktop`}
              {`apps, all from one location`}
            </li>
            <li>
              {`Get single-click cloud-app lockout to work securely with`}
              {`outsourced or offshore users`}
            </li>
            <li>
              {`Have Rightworks manage your Microsoft Office apps and users with streamlined administration, oversight, and email security`}
            </li>
          </ul>
        </div>
      </section>
      {/* Simplify App Access Section 2 */}
      <section className={`simplify-section`}>
        <div className={`simplify-content`}>
          <h2>
            {`Streamline growth with a platform that scales`}
          </h2>
          <ul>
            <li>
              {`Hire from anywhere without worry`}
            </li>
            <li>
              {`Merge firms or add locations without the headaches`}
            </li>
            <li>
              {`Keep costs under control with predictable monthly pricing`}
            </li>
            <li>
              {`Get 24/7 support from pros who understand accounting`}
            </li>
          </ul>
        </div>
        <div className={`simplify-image`}>
          <img alt={`Simplify app access`} src={`../assets/CP3.webp`}/>
        </div>
      </section>
      {/* Simplify App Access Section 3*/}
      <section className={`simplify-section`}>
        <div className={`simplify-image`}>
          <img alt={`Simplify app access`} src={`../assets/CP4.webp`}/>
        </div>
        <div className={`simplify-content`}>
          <h2>
            {`Work smarter with tools designed for productivity`}
          </h2>
          <ul>
            <li>
              {`Avoid disruptions and updates during tax season with tools built for accounting workflows`}
            </li>
            <li>
              {`Onboard new staff quickly and easily`}
            </li>
            <li>
              {`Save time with built-in AI tools designed for secure research and collaboration`}
            </li>
            <li>
              {`Rely on award-winning support available 24/7`}
            </li>
          </ul>
        </div>
      </section>
      {/* Simplify App Access Section 4*/}
      <section className={`simplify-section`}>
        <div className={`simplify-content`}>
          <h2>
            {`Protect your firm with next-level security`}
          </h2>
          <ul>
            <li>
              {`Gain peace of mind with hourly data snapshots and data backups stored for two years`}
            </li>
            <li>
              {`Reduce employee-driven incidents with antivirus, cloud-managed firewall, device backup, encryption, and security awareness training`}
            </li>
            <li>
              {`Get advanced threat protection for your Microsoft Exchange email`}
            </li>
            <li>
              {`Stay protected 24/7 with threat monitoring and quick responses, plus access your WISP right from your portal`}
            </li>
          </ul>
        </div>
        <div className={`simplify-image`}>
          <img alt={`Simplify app access`} src={`../assets/CP5.webp`}/>
        </div>
      </section>
      {/* ✅ Testimonial Section */}
      <section className={`testimonial`}>
        <div className={`testimonial-content`}>
          <span className={`quote-icon`}>
            {`“`}
          </span>
          <p className={`testimonial-text`}>
            {`It means that we can work anywhere, anytime, in a secured environment,`}
            {`and that is so important in our industry.`}
          </p>
          <p className={`testimonial-author`}>
            <strong>
              {`Shelly Lingor`}
            </strong>
            <br/>
            {`CEO & Partner, Financial Solutions Advisors`}
          </p>
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
      {/* ✅ Final CTA Section */}
      <section className={`final-cta`}>
        <h2>
          {`Work smarter, grow faster, and make life easier with Cloud Premier.`}
        </h2>
        <a className={`cta-btn`} href={`/#`}>
          {`GET CLOUD PREMIER →`}
        </a>
      </section>
    </>
  );
};
export default CloudPremier;
