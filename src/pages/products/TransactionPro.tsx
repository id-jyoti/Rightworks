import React from "react";
import "./TransactionPro.css";
const TransactionPro = ()=>{
  return (
    <section className={`transactionpro`}>
      <div className={`transactionpro-container`}>

        {/* Left Content */}
        <div className={`transactionpro-content`}>
          <h1>
            {`Make your `}
            <span className={`highlight`}>
              {`QuickBooks®`}
            </span>
            {` `}
            {`experience effortless`}
          </h1>
          <p>
            {`Manage data imports, exports and deletions with QuickBooks in minutes using`}
            {`Rightworks Transaction Pro. Our intuitive interface enables seamless transfer`}
            {`of transactions and lists between QuickBooks and Excel or CSV files, saving`}
            {`time and ensuring data accuracy.`}
          </p>
          <div className={`transactionpro-buttons`}>
            <a className={`tp-btn-primary`} href={`#`}>
              {`TRY FOR FREE →`}
            </a>
            <a className={`tp-btn-secondary`} href={`#`}>
              {`BUY NOW →`}
            </a>
          </div>
        </div>
        {/* Right Image */}
        <div className={`transactionpro-image`}>
          <img alt={`Transaction Pro user working`}
            className={`transactionpro-img`}
            src={`/assets/TP1.webp`}
          />
        </div>
      </div>
    </section>
  );
};
export default TransactionPro;
