import contactImage from "../assets/contactus.webp";
const Contact = ()=>{
  return (
    <div className={`contact-page`}>
      {/* Hero Section */}
      <section className={`contact-hero`}>
        <div className={`hero-text`}>
          <p className={`contact-label`}>
            {`Contact us`}
          </p>
          <h1>
            {`Have questions? `}
            <br/>
            <span className={`highlight`}>
              {`We’re here to help.`}
            </span>
          </h1>
          <p className={`contact-desc`}>
            {`Get in touch with an expert team member fast, for clear answers on`}
            {`pricing, technical support or anything else you need.`}
          </p>
        </div>
        <div className={`hero-image`}>

          <img alt={`Support agent`} src={contactImage}/>
        </div>
      </section>
      {/* Contact Options */}
      <section className={`contact-options`}>
        <div className={`contact-card`}>
          <h3>
            <span className={`highlight`}>
              {`New to Rightworks?`}
            </span>
            {` `}
            <br/>
            {`Talk to sales`}
          </h3>
          <p>
            {`We’ll help you find the right products, with the right pricing,`}
            {`to grow your firm or business.`}
          </p>
          <div className={`contact-info`}>
            <p>
              <strong>
                {`Phone:`}
              </strong>
              {` `}
              {`866.691.4277`}
            </p>
            <p>
              <strong>
                {`Email:`}
              </strong>
              {` `}
              {`sales@rightworks.com`}
            </p>
          </div>
          <button className={`btn-outline`}>
            {`Book a Call →`}
          </button>
        </div>
        <div className={`contact-card`}>
          <h3>
            <span className={`highlight`}>
              {`Already a customer?`}
            </span>
            {` `}
            <br/>
            {`Talk to tech support or contact billing`}
          </h3>
          <p>
            {`Our experts are always available to answer your questions and solve`}
            {`technical challenges.`}
          </p>
          <div className={`contact-info`}>
            <p>
              <strong>
                {`Phone:`}
              </strong>
              {` `}
              {`866.691.4277, ext.3`}
            </p>
            <p>
              <strong>
                {`Billing Email:`}
              </strong>
              {` `}
              {`billing@rightworks.com`}
            </p>
          </div>
          <button className={`btn-outline`}>
            {`Support →`}
          </button>
        </div>
      </section>
      {/* Consultation Section */}
      <section className={`consultation`}>
        <h2>
          {`Book a 30-minute consultation`}
        </h2>
        <p>
          {`Select your business type to schedule an appointment with one of our`}
          {`sales consultants.`}
        </p>
        <div className={`consultation-cards`}>
          <div className={`consult-card`}>
            <div className={`icon`}>
              {`📅`}
            </div>
            <h3>
              {`Schedule: Accounting firms`}
            </h3>
            <p>
              {`Whether you’re a small firm or a large firm, we can customize a`}
              {`plan to meet your unique needs.`}
            </p>
            <button className={`btn-primary`}>
              {`Book a Consultation →`}
            </button>
          </div>
          <div className={`consult-card`}>
            <div className={`icon`}>
              {`📅`}
            </div>
            <h3>
              {`Schedule: Small businesses`}
            </h3>
            <p>
              {`Find out how we can help you make your financial operations`}
              {`simpler, faster and more secure.`}
            </p>
            <button className={`btn-primary`}>
              {`Book a Consultation →`}
            </button>
          </div>
          <div className={`consult-card`}>
            <div className={`icon`}>
              {`🎧`}
            </div>
            <h3>
              {`Call us today`}
            </h3>
            <p>
              {`We’re here to help, so if you’d like to speak with someone`}
              {`right away just give us a call.`}
            </p>
            <button className={`btn-outline`}>
              {`Call 866.691.4277 →`}
            </button>
          </div>
        </div>
      </section>
      {/* Locations Section */}
      <section className={`locations`}>
        <h2>
          {`Locations`}
        </h2>
        <div className={`locations-content`}>
          <div className={`locations-list`}>
            <div className={`location active`}>
              <h4 className={`highlight`}>
                {`Nashua, New Hampshire`}
              </h4>
              <p>
                {`300 Innovative Way, Suite 2340`}
                <br/>
                {`Nashua, NH 03062`}
              </p>
            </div>
            <div className={`location`}>
              <h4>
                {`Alpharetta, Georgia`}
              </h4>
            </div>
            <div className={`location`}>
              <h4>
                {`Bloomington, Indiana`}
              </h4>
            </div>
          </div>
          <div className={`map`}>
            <iframe allowFullScreen={true} height={`300`}
              loading={`lazy`}
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.2318930335!2d-71.50188!3d42.74059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQ0JzI2LjEiTiA3McKwMzAnMDcuMiJX!5e0!3m2!1sen!2sus!4v1672181234567`}
              title={`maps`}
              width={`100%`}
              style={{
                border: 0,
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
