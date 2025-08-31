import "./BuiltForPros.css";
const BuiltForPros = ()=>{
  return (
    <section className={`built-for-pros`}>
      {/* First Section */}
      <div className={`pros-hero`}>
        <div className={`pros-text`}>
          <h2>
            {`Rightworks: `}
            <span className={`highlight`}>
              {`Always focused`}
            </span>
            {` `}
            {`on`}
            {`moving the accounting profession forward`}
          </h2>
        </div>
        <div className={`pros-image`}>
          <img alt={`Accounting team collaboration`}
            src={`/assets/BFP1.png`}
          />
        </div>
      </div>
      {/* Second Section */}
      <div className={`pros-story`}>
        <div className={`story-image`}>
          <img alt={`Rightworks story presentation`}
            src={`/assets/BFP1.webp`}
          />
        </div>
        <div className={`story-text`}>
          <h3>
            {`Our story`}
          </h3>
          <p>
            {`For more than 20 years, we’ve been mission-driven to help the`}
            {`accounting profession implement change and progress.`}
          </p>
          <button className={`learn-more`}>
            {`LEARN MORE →`}
          </button>
        </div>
      </div>
    </section>
  );
};
export default BuiltForPros;
