import "./Become.css";
import {
  Phone, Calendar,
} from "lucide-react";
const Become = ()=>{
  return (
    <div className={`become-container`}>
      {/* Hero Section */}
      <section className={`become-hero`}>
        <div className={`become-hero-text`}>
          <h1>
            {`Rightworks referral partner`}
          </h1>
          <p>
            {`Thanks for your interest in becoming a Rightworks referral partner!`}
          </p>
          <p>
            {`Rightworks thrives on collaborating with leading companies to`}
            {`promote complementary products and services to firms and small to`}
            {`medium-sized businesses in the accounting and tax profession. Our`}
            {`Referral Partner Program is based on revenue sharing—and together,`}
            {`we can expand our market reach and deliver even greater value to`}
            {`Rightworks customers.`}
          </p>
        </div>
        <div className={`become-hero-image`}>
          <img alt={`Referral Partner`}
            src={`/assets/RP1.webp`}
          />
        </div>
      </section>
      {/* Form + Contact Section */}
      <section className={`become-contact`}>
        <div className={`become-form`}>
          <h2>
            {`Connect with us today`}
          </h2>
          <p className={`required`}>
            {`"*” indicates required fields`}
          </p>
          <form>
            <div className={`form-row`}>
              <input aria-label={`First name`} placeholder={`First name*`} type={`text`} required/>
              <input aria-label={`First name`} placeholder={`Last name*`} type={`text`} required/>
            </div>
            <div className={`form-row`}>
              <input aria-label={`Business name`} placeholder={`Business name*`} type={`text`} required/>
              <input aria-label={`Email`} placeholder={`Email*`} type={`email`} required/>
            </div>
            <div className={`form-row`}>
              <input aria-label={`Phone`} placeholder={`Phone*`} type={`tel`} required/>
            </div>
            <button className={`submit-btn`} type={`submit`}>
              {`SUBMIT →`}
            </button>
          </form>
        </div>
        <div className={`become-info`}>
          <div className={`info-card`}>
            <div className={`icon-circle`}>
              <Phone color={`#6a00ff`} size={28} strokeWidth={2}/>
            </div>
            <div>
              <h3>
                {`Call us today`}
              </h3>
              <p>
                {`We’re here to help!`}
              </p>
              <a href={`tel:8669314770`}>
                {`866.931.4770`}
              </a>
            </div>
          </div>
          <div className={`info-card`}>
            <div className={`icon-circle`}>
              <Calendar color={`#6a00ff`} size={28} strokeWidth={2}/>
            </div>
            <div>
              <h3>
                {`Accounting firms`}
              </h3>
              <button className={`calendar-btn`}>
                {`VIEW CALENDAR `}
                <Calendar size={16}/>
              </button>
            </div>
          </div>
          <div className={`info-card`}>
            <div className={`icon-circle`}>
              <Calendar color={`#6a00ff`} size={28} strokeWidth={2}/>
            </div>
            <div>
              <h3>
                {`Small businesses`}
              </h3>
              <button className={`calendar-btn`}>
                {`VIEW CALENDAR `}
                <Calendar size={16}/>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Become;
