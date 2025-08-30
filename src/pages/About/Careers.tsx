import "./Careers.css";
const Careers = ()=>{
  return (
    <div className={`careers-container`}>
      {/* Section 1 */}
      <section className={`careers-hero`}>
        <div className={`careers-hero-text`}>
          <h1>
            {`Making an `}
            <br/>
            {`extraordinary impact `}
            <br/>
            {`requires `}
            <span className={`highlight`}>
              {`extraordinary talent.`}
            </span>
          </h1>
          <p>
            {`We’re a team of passionate individuals dedicated to advancing the`}
            {`accounting profession with our purpose-built intelligent cloud. And`}
            {`we can’t wait to meet you.`}
          </p>
        </div>
        <div className={`careers-hero-image`}>
          <img alt={`Careers Hero`}
            src={`/assets/CR1.webp`}
          />
        </div>
      </section>
      {/* Section 2 */}
      <section className={`careers-cta`}>
        <div className={`careers-cta-content`}>
          <h2>
            {`Ready to challenge the status quo?`}
          </h2>
          <p>
            {`Join the team that’s transforming the accounting profession.`}
            {`Together, we can elevate innovation and exceed customer`}
            {`expectations—all while building rewarding careers.`}
          </p>
        </div>
        <button className={`cta-button`}>
          {`VIEW OPENINGS`}
        </button>
      </section>
      {/* Section 3 */}
      <section className={`careers-about`}>
        <h3 className={`section-title`}>
          {`Who we are`}
        </h3>
        <h1>
          {`Experience our commitment to excellence`}
        </h1>
        <p className={`about-text`}>
          {`Solving the accounting profession’s complex challenges requires`}
          {`creative thinking and diverse perspectives. At Rightworks, we empower`}
          {`team members to put their expertise, passion and unique point-of-view`}
          {`to work to help move the profession forward and resolve common pain`}
          {`points. We’re big enough to reach hundreds of thousands of people and`}
          {`small enough to recognize that every team member is critical to our`}
          {`success. We’re excited to see how you can make an impact.`}
        </p>
        <div className={`stats`}>
          <div className={`stat`}>
            <h2>
              {`650+`}
            </h2>
            <p className={`label`}>
              {`employees`}
            </p>
            <p className={`desc`}>
              {`And growing daily! Join us as we cultivate a dynamic and`}
              {`innovatively unstoppable team.`}
            </p>
          </div>
          <div className={`stat`}>
            <h2>
              {`41`}
            </h2>
            <p className={`label`}>
              {`states`}
            </p>
            <p className={`desc`}>
              {`We’re proud to work with colleagues from across the country and`}
              {`with exceptionally diverse backgrounds.`}
            </p>
          </div>
          <div className={`stat`}>
            <h2>
              {`3`}
            </h2>
            <p className={`label`}>
              {`offices`}
            </p>
            <p className={`desc`}>
              {`We’re headquartered in Nashua, New Hampshire with additional`}
              {`offices in Alpharetta, Georgia, and Bloomington, Indiana.`}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
export default Careers;
