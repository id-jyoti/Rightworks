import "./ResourceHub.css";
const ResourceHub = ()=>{
  return (
    <>
      {/* Hero Section */}
      <section className={`resource-hub`}>
        <div className={`resource-content`}>
          <h2 className={`resource-title`}>
            {`Rightworks Resource Library`}
          </h2>
          <p className={`resource-description`}>
            {`Discover the latest information about cloud technology, security best`}
            {`practices, firm-improvement strategies and more—right here.`}
          </p>
        </div>
        <div className={`resource-image`}>
          <img alt={`Smiling woman holding laptop`}
            src={`/assets/RH1.webp`}
          />
        </div>
      </section>
      {/* Featured Resources Section */}
      <section className={`featured-resources`}>
        <h3 className={`featured-title`}>
          {`Featured Resources`}
        </h3>
        <div className={`featured-grid`}>
          {/* Card 1 */}
          <div className={`featured-card`}>
            <img alt={`AI Trends in Accounting`}
              className={`featured-thumbnail`}
              src={`/assets/RH2.webp`}
            />
            <div className={`featured-info`}>
              <span className={`featured-tag`}>
                {`eBooks`}
              </span>
              <h4 className={`featured-heading`}>
                {`AI Trends in Accounting`}
              </h4>
            </div>
          </div>
          {/* Card 2 */}
          <div className={`featured-card`}>
            <img alt={`Cloud readiness guide`}
              className={`featured-thumbnail`}
              src={`/assets/RH3.webp`}
            />
            <div className={`featured-info`}>
              <span className={`featured-tag`}>
                {`eBooks`}
              </span>
              <h4 className={`featured-heading`}>
                {`Is Your Firm Cloud-Ready? The Complete Assessment Guide`}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ResourceHub;
