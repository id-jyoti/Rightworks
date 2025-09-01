import {
  useState,
} from "react";
import "./QuickBooksHosting.css";
const faqs = [
  {
    question: `What is Rightworks Cloud Hosting?`,
    answer:
      `In addition to streamlining your workflow and giving your team a single, reliable place to work every day, Rightworks Cloud Hosting provides a scalable, cost-effective cybersecurity solution that offers enterprise-level protection to operations of any size.`,
  },
  {
    question:
      `If QuickBooks Online is already in the cloud, do I need Rightworks Cloud Hosting?`,
    answer:
      `Rightworks Cloud Hosting provides an additional layer of security and scalability for QuickBooks Online and other applications, ensuring your business data remains safe, secure, and accessible anytime, anywhere.`,
  },
  {
    question:
      `What versions of QuickBooks can be hosted by Rightworks Cloud Hosting?`,
    answer:
      `Rightworks Cloud Hosting supports multiple versions of QuickBooks, including Pro, Premier, Enterprise, and Accountant editions.`,
  },
  {
    question:
      `What is the difference between QuickBooks Online and QuickBooks hosted?`,
    answer:
      `QuickBooks Online is a web-based application, while QuickBooks hosted lets you run desktop versions in the cloud, giving you remote access with full desktop features.`,
  },
  {
    question: `How secure is QuickBooks data with Rightworks Cloud Hosting?`,
    answer:
      `Your data is encrypted, stored in enterprise-grade data centers, and protected with multi-layered cybersecurity protocols to keep it safe 24/7.`,
  },
  {
    question: `Can I install and use third-party apps in a OneSpace QuickBooks hosted environment?`,
    answer:
      `Yes, you can integrate third-party apps with QuickBooks in the hosted environment to extend functionality and streamline your workflows.`,
  },
  {
    question: `Can OneSpace QuickBooks hosting work for multi-user environments?`,
    answer:
      `Absolutely. Rightworks hosting supports multiple users with role-based access controls, allowing your whole team to work securely and collaboratively.`,
  },
  {
    question: `What are the system requirements for accessing QuickBooks with Rightworks Cloud Hosting?`,
    answer:
      `All you need is a device with an internet connection and a modern web browser. No high-end hardware is required.`,
  },
  {
    question: `Can I buy QuickBooks Pro Plus or QuickBooks Premier Plus from you?`,
    answer:
      `Yes, we offer licenses for QuickBooks Pro Plus and Premier Plus, along with hosting packages.`,
  },
  {
    question: `BYOL (bring your own license): Can I bring my own license for QuickBooks Pro or Premier?`,
    answer:
      `Yes, you can bring your own license for QuickBooks Pro, Premier, or Enterprise and host it with Rightworks Cloud Hosting.`,
  },

  // ✅ Additional FAQs (you asked to add more)
  {
    question: `Can I access QuickBooks hosted on Rightworks from my mobile device?`,
    answer:
      `Yes, you can securely access QuickBooks from tablets, smartphones, and laptops — anywhere with an internet connection.`,
  },
  {
    question: `Does Rightworks provide backup and disaster recovery?`,
    answer:
      `Yes, Rightworks provides automated daily backups and disaster recovery solutions to ensure your data is always safe and recoverable.`,
  },
  {
    question: `What kind of customer support does Rightworks offer?`,
    answer:
      `We provide 24/7 customer support with QuickBooks experts ready to help you with hosting, performance, and troubleshooting.`,
  },
  {
    question: `Is Rightworks Cloud Hosting scalable for growing businesses?`,
    answer:
      `Yes, you can easily scale users, storage, and apps as your business grows without worrying about infrastructure limitations.`,
  },
];

const QuickBooksHosting = ()=>{
  // FAQ accordion: only one open at a time
  const [
    openIndex,
    setOpenIndex,
  ] = useState<number | null> (null);

  const toggleFAQ = (index: number)=>{
    setOpenIndex (prev=>(prev === index ?
      null :
      index));
  };

  return (
    <>
      {/* Section 1 - Cloud Hosting */}
      <section className={`quickbooks-hosting`}>
        <div className={`quickbooks-hosting-content`}>
          <h2 className={`tagline`}>
            {`Get the best of QuickBooks® hosting with Rightworks`}
          </h2>
          <p className={`intro`}>
            {`Not all QuickBooks hosting is created equal. Our cloud hosting solution, Rightworks Cloud Hosting, has all the security features you need to safely work and collaborate in QuickBooks anytime, anywhere.`}
          </p>
          <div className={`cta-buttons`}>
            <a className={`btn-primary`} href={`/#`}>
              {` `}
              {`BUSINESS PLANS`}
              {` `}
            </a>
            <a className={`btn-outline`} href={`/#`}>
              {` `}
              {`FIRM PLANS`}
              {` `}
            </a>
          </div>
        </div>
        <div className={`quickbooks-hosting-image`}>
          <img alt={`QuickBooks Hosting Workspace`} src={`../assets/QH1.webp`}/>
        </div>
      </section>
      {/* Section 2 - Largest Intuit Solution Provider */}
      <section className={`quickbooks-provider`}>
        <div className={`quickbooks-provider-image`}>
          <img alt={`Intuit QuickBooks Partner`} src={`../assets/QH2.webp`}/>
        </div>
        <div className={`quickbooks-provider-content`}>
          <p className={`section-subtitle`}>
            {`Proven partnership`}
          </p>
          <h2 className={`section-title`}>
            {`Largest Intuit® Solution Provider`}
          </h2>
          <p className={`section-description`}>
            {`As the largest Intuit partner, Rightworks is proud to be recognized as a trusted provider of secure hosting solutions for QuickBooks applications.`}
          </p>
          <div className={`cta-buttons`}>
            <a className={`btn-primary`} href={`/#`}>
              {` `}
              {`BUSINESS PLANS`}
              {` `}
            </a>
            <a className={`btn-outline`} href={`/#`}>
              {` `}
              {`FIRM PLANS`}
              {` `}
            </a>
          </div>
        </div>
      </section>
      {/* Section 3 - Features & Benefits */}
      <section className={`quickbooks-features`}>
        <div className={`features-header`}>
          <p className={`features-subtitle`}>
            {`Features & Benefits`}
          </p>
          <h2 className={`features-title`}>
            {`Secure, remote access to all your QuickBooks apps`}
          </h2>
          <p className={`features-description`}>
            {`Rightworks Cloud Hosting securely hosts QuickBooks Desktop, QuickBooks Online and more—`}
            {`all in a single, intelligent cloud platform that was purpose-built for accounting professionals.`}
          </p>
        </div>
        <div className={`features-grid`}>
          <div className={`feature-card`}>
            <img alt={`Interface Icon`} src={`../assets/icons/QH1.svg`}/>
            <h3>
              {`Easy-to-use interface`}
            </h3>
            <p>
              {`Access apps like QuickBooks Online and QuickBooks Desktop via a single interface,`}
              {`and easily add to your tech stack as your needs change.`}
            </p>
          </div>
          <div className={`feature-card`}>
            <img alt={`Security Icon`} src={`../assets/icons/QH2.svg`}/>
            <h3>
              {`Top-tier security`}
            </h3>
            <p>
              {`Rest assured knowing that your sensitive data is protected with full data backup`}
              {`and recovery protocols.`}
            </p>
          </div>
          <div className={`feature-card`}>
            <img alt={`Collaboration Icon`} src={`../assets/icons/QH3.svg`}/>
            <h3>
              {`Remote collaboration`}
            </h3>
            <p>
              {`Boost staff productivity and enhance your client relationships with remote,`}
              {`real-time access to QuickBooks anytime, anywhere.`}
            </p>
          </div>
          <div className={`feature-card`}>
            <img alt={`Workflows Icon`} src={`../assets/icons/QH4.svg`}/>
            <h3>
              {`Simplified workflows`}
            </h3>
            <p>
              {`Bring your business applications, intelligence tools and cybersecurity protection`}
              {`together in a single, secure interface.`}
            </p>
          </div>
          <div className={`feature-card`}>
            <img alt={`Insights Icon`} src={`../assets/icons/QH5.svg`}/>
            <h3>
              {`Real-time business insights`}
            </h3>
            <p>
              {`Tap into business intelligence tools that help determine where you stand against`}
              {`critical KPIs and provide actionable steps to help you improve performance.`}
            </p>
          </div>
          <div className={`feature-card`}>
            <img alt={`Support Icon`} src={`../assets/icons/QH6.svg`}/>
            <h3>
              {`Award-winning support`}
            </h3>
            <p>
              {`Get help when you need it most with 24/7 guidance and support for you or your IT team.`}
            </p>
          </div>
        </div>
      </section>
      {/* Section 4 - Demo Section */}
      <section className={`quickbooks-demo`}>
        <h2 className={`demo-title`}>
          {`See how QuickBooks works in Rightworks Cloud Hosting`}
        </h2>
        <p className={`demo-description`}>
          {`Explore how Rightworks Cloud Hosting makes it easy to get secure, remote access`}
          {`to QuickBooks and all your critical accounting, tax and business apps.`}
        </p>
        <div className={`demo-video`}>
          <img alt={`QuickBooks Demo Preview`} src={`../assets/QH3.png`}/>
        </div>
      </section>
      {/* ========= Section 5: FAQs (accordion) ========= */}
      <section className={`quickbooks-faq`}>
        <h2 className={`faq-title`}>
          {`Rightworks Cloud for QuickBooks Hosting FAQs`}
        </h2>
        <div className={`faq-list`}>
          {faqs.map ((faq, index)=>(
            <div key={index}
              className={`faq-item ${openIndex === index ?
              `open` :
              ``}`}
            >
              <button aria-controls={`faq-panel-${index}`}
                aria-expanded={openIndex === index}
                className={`faq-question`}
                id={`faq-button-${index}`}
                type={`button`}
                onClick={() => {
                  toggleFAQ(index);
                }}
              >
                <span className={`faq-q-text`}>
                  {faq.question}
                </span>
                <span className={`faq-toggle`}>
                  {openIndex === index ?
                    `−` :
                    `+`}
                </span>
              </button>
              <section aria-labelledby={`faq-button-${index}`}
                className={`faq-answer`}
                id={`faq-panel-${index}`}
                style={{
                  display: openIndex === index ?
                    `block` :
                    `none`,
                }}
              >
                {faq.answer}
              </section>
              {` `}
              {/* ✅ correct closing tag */}

              {faq.answer}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default QuickBooksHosting;
