import "./Story.css";
const Story = ()=>{
  return (
    <div>
      {/* Top Section */}
      <div className={`story-container`}>
        <div className={`story-content`}>
          <p className={`story-breadcrumb`}>
            {`About us / Our story`}
          </p>
          <h1 className={`story-heading`}>
            {`The Rightworks story: `}
            <br/>
            {`Helping accounting firms and professionals thrive`}
          </h1>
        </div>
        <div className={`story-image`}>
          <img alt={`Team working together`}
            src={`/assets/Story.webp`}
          />
        </div>
      </div>
      {/* Our Story Section */}
      <div className={`our-story`}>
        <div className={`our-story-header`}>
          <span className={`our-story-icon`}>
            {`☰`}
          </span>
          <h4>
            {`Rightworks`}
          </h4>
        </div>
        <h2 className={`our-story-title`}>
          {`Our story`}
        </h2>
        <div className={`our-story-text`}>
          <p>
            {`Since 2002, we’ve been delivering purpose-built solutions for accounting`}
            {`professionals and their connected clients. Our focus has been clear:`}
            {`To help the profession continually progress by providing secure,`}
            {`advanced and easy-to-use solutions and services—and all with dedicated,`}
            {`expert support.`}
          </p>
          <p>
            {`It all started with HyperRight, our patented hosting technology, built`}
            {`specifically for accounting and tax workflows. For over a decade, we’ve`}
            {`delivered secure hosted environments for the most popular applications—`}
            {`including QuickBooks, Lacerte, ProSeries and Drake software.`}
          </p>
          <p>
            {`In 2017, Joel Hughes, Rightworks CEO, began to look for ways to expand`}
            {`the value of our cloud offering to help firm leaders and staff simplify`}
            {`how they do business via curated technologies and business strategy best`}
            {`practices. He also guided the company in building a trusted, established`}
            {`community of thought leaders and resources that customers could easily`}
            {`access. Since 2017, we have acquired seven companies to help make this`}
            {`vision a reality.`}
          </p>
        </div>
        {/* Dots/Pagination */}
        <div className={`story-pagination`}>
          <span className={`dot active`}>
            {`1`}
          </span>
          <span className={`dot`}>
            {`2`}
          </span>
          <span className={`dot`}>
            {`3`}
          </span>
          <span className={`dot`}>
            {`4`}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Story;
