import "./Blog.css";
const Blog = ()=>{
  return (
    <div className={`blog`}>
      {/* Blog Header Section */}
      <section className={`blog-header`}>
        <div className={`blog-header-content`}>
          <h1 className={`blog-title`}>
            {`The Rightworks Blog`}
          </h1>
          <p className={`blog-subtitle`}>
            {`Accounting technology trends, cybersecurity best practices,`}
            {`time-saving automation strategies, and much more, right here.`}
          </p>
        </div>
      </section>
      {/* Featured Articles Section */}
      <section className={`blog-featured`}>
        <h2 className={`featured-title`}>
          {`Featured articles`}
        </h2>
        <div className={`featured-container`}>
          {/* Article 1 */}
          <div className={`featured-card`}>
            <img alt={`Cloud Technology`}
              className={`featured-img`}
              src={`/assets/B1.webp`}
            />
            <div className={`featured-content`}>
              <span className={`featured-tag`}>
                {`Cloud Hosting`}
              </span>
              <h3 className={`featured-heading`}>
                {`Cloud Technology Explained: Understanding the Basics`}
              </h3>
            </div>
          </div>
          {/* Article 2 */}
          <div className={`featured-card`}>
            <img alt={`Small Business Cloud`}
              className={`featured-img`}
              src={`/assets/B2.webp`}
            />
            <div className={`featured-content`}>
              <span className={`featured-tag`}>
                {`Cloud Hosting`}
              </span>
              <h3 className={`featured-heading purple`}>
                {`5 Signs Your Small Business Is Ready for the Cloud`}
              </h3>
            </div>
          </div>
          {/* Subscribe Box */}
          <div className={`subscribe-box`}>
            <h3>
              {`Subscribe to our blog`}
            </h3>
            <p>
              {`Get Rightworks articles delivered straight to your inbox.`}
            </p>
            <input aria-label={`Email address`}
              className={`subscribe-input`}
              placeholder={`Email`}
              type={`email`}
            />
            <label className={`subscribe-checkbox`}>
              <input aria-label={`Consent to receive emails`} type={`checkbox`}/>
              <span>
                {`Yes, I would like to sign up to receive email from Rightworks.`}
                {` `}
                <a href={`/#`}>
                  {`See Privacy Policy`}
                </a>
              </span>
            </label>
            <button className={`subscribe-btn`}>
              {`SUBSCRIBE `}
              <span>
                {`→`}
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Blog;
