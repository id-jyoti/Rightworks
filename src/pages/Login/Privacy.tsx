import type React from "react";
import "./Privacy.css";
const Privacy: React.FC = ()=>{
  return (
    <div className={`privacy-page`}>
      {/* Header Section */}
      <div className={`privacy-header`}>
        <h1>
          {`Privacy Policy`}
        </h1>
      </div>
      {/* Intro Section */}
      <section className={`privacy-section`}>
        <h2>
          {`Your Privacy is Important to Us!`}
        </h2>
        <p>
          {`Rightworks, LLC (formerly known as “Right Networks LLC”) is committed`}
          {`to developing long-lasting customer relationships based on value,`}
          {`trust, and goodwill.`}
        </p>
        <p>
          {`This External Privacy Notice (“Privacy Policy”) explains how we`}
          {`collect, use, and share your personal information.`}
        </p>
        <p>
          {`Personal information is any data that can be used to identify you, as`}
          {`an individual, or your household.`}
        </p>
        <p>
          {`This Notice also explains our privacy-related business obligations to`}
          {`you, as well as your rights relative to the personal information that`}
          {`we hold.`}
        </p>
      </section>
      {/* At a Glance */}
      <section className={`privacy-section`}>
        <h2>
          {`At a Glance`}
        </h2>
        <p>
          {`If you’d rather not dive into the details, here is what we think you`}
          {`should know:`}
        </p>
        <ul>
          <li>
            {`Rightworks, LLC (formerly known as Right Networks, LLC) offers a`}
            {`number of products and services, including:`}
            <ul>
              <li>
                {`Rightworks Cloud Hosting`}
              </li>
              <li>
                {`Rightworks Cloud Premier`}
              </li>
              <li>
                {`Rightworks Academy`}
              </li>
              <li>
                {`CPA Practice Advisor`}
              </li>
              <li>
                {`Rightworks Connect`}
              </li>
              <li>
                {`Rightworks Transaction Pro`}
              </li>
            </ul>
          </li>
          <li>
            {`Your personal information is, where appropriate, shared within the`}
            {`greater Rightworks organization.`}
          </li>
          <li>
            {`We afford you a number of legal rights that can assist you in`}
            {`controlling how your personal information is collected, processed,`}
            {`and stored by us.`}
          </li>
          <li>
            {`We may also use your information to display relevant online`}
            {`advertising and marketing relating to our products and services.`}
          </li>
          <li>
            {`Rightworks markets products and services intended for accounting and`}
            {`tax professionals. We do not provide any content intended for minors`}
            {`(those under the age of 18), and we do not knowingly collect`}
            {`personal data from them.`}
          </li>
        </ul>
      </section>
      {/* Who We Are */}
      <section className={`privacy-section`}>
        <h2>
          {`Who We Are`}
        </h2>
        <p>
          {`When we say ‘we’ or ‘us’ in this Privacy Notice, we are referring to`}
          {`Rightworks, LLC and its subsidiaries (together, “Rightworks”).`}
        </p>
        <p>
          <strong>
            {`Corporate Office Address:`}
          </strong>
          {` `}
          <br/>
          {`Rightworks, LLC `}
          {` `}
          <br/>
          {`300 Innovative Way `}
          {` `}
          <br/>
          {`Nashua, NH 03062 `}
          {` `}
          <br/>
          {`Main: 866.887.0431`}
        </p>
      </section>
      {/* Collapsible Sections */}
      <section className={`privacy-section`}>
        <h2>
          {`Contents`}
        </h2>
        <ul className={`privacy-contents`}>
          <li>
            {`Our Privacy Obligations`}
          </li>
          <li>
            {`Personal Information We Collect About You`}
          </li>
          <li>
            {`Our Lawful Bases for Processing your Information`}
          </li>
          <li>
            {`How Do We Use Your Personal Information?`}
          </li>
          <li>
            {`Cookies`}
          </li>
          <li>
            {`Who Might We Share Your Personal Information With?`}
          </li>
          <li>
            {`Opting Out of the Sale or Sharing of your Personal Information`}
          </li>
          <li>
            {`Keeping You Informed about our Products and Services`}
          </li>
          <li>
            {`Your Rights`}
          </li>
        </ul>
      </section>
    </div>
  );
};
export default Privacy;
