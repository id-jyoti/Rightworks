import "./Reviews.css";
const Reviews = ()=>{
  return (
    <div className={`reviews-page`}>
      {/* ---------- HERO / SUPPORT SECTION ---------- */}
      <section className={`support-section`}>
        <div className={`support-left`}>
          <p className={`small-text`}>
            {`Rightworks customer reviews`}
          </p>
          <h1>
            {`Unparalleled support, available 24/7`}
          </h1>
          <p className={`description`}>
            {`Get the support you deserve and maximize your accounting or tax`}
            {`application in the cloud with help from our exceptional Customer`}
            {`Care team.`}
          </p>
          <p className={`description`}>
            {`Our agents are a chat or phone call away—24/7—to ensure every`}
            {`customer gets the answers they need, when they need them. But don’t`}
            {`just take it from us—read what our customers are saying about`}
            {`Rightworks.`}
          </p>
        </div>
        <div className={`support-right`}>
          <img alt={`G2 Summer 2025 Awards`}
            className={`awards-image`}
            src={`/assets/R1.webp`}
          />
        </div>
      </section>
      {/* ---------- CUSTOMER REVIEWS SECTION ---------- */}
      <section className={`customer-reviews`}>
        <h2>
          {`Hear what our customers have to say`}
        </h2>
        <div className={`review-card`}>
          <div className={`avatar`}>
            {`DH`}
          </div>
          <div className={`review-content`}>
            <h3>
              {`Excellent way to host multi-user Quickbooks Pro`}
            </h3>
            <div className={`meta`}>
              <span className={`stars`}>
                {`★★★★★`}
              </span>
              <span className={`date`}>
                {`01/16/2024`}
              </span>
            </div>
            <p>
              {`"Easy for multiple users to access the corporate Quickbooks Pro."`}
            </p>
            <a href={`/#`}>
              {`Read the full Rightworks Cloud Hosting review`}
            </a>
            <p className={`author`}>
              {`Derek H. - Project Manager (Architecture & Planning)`}
            </p>
          </div>
        </div>
        <div className={`review-card`}>
          <div className={`avatar`}>
            {`U`}
          </div>
          <div className={`review-content`}>
            <h3>
              {`Easy to use`}
            </h3>
            <div className={`meta`}>
              <span className={`stars`}>
                {`★★★★★`}
              </span>
              <span className={`date`}>
                {`01/16/2024`}
              </span>
            </div>
            <p>
              {`"1. Very simple to log in and launch applications 2. Great customer support"`}
            </p>
            <a href={`/#`}>
              {`Read the full Rightworks Cloud Hosting review`}
            </a>
            <p className={`author`}>
              {`Verified User in Transportation/Trucking/Railroad`}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Reviews;
