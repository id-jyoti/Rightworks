import React from "react";
import "./TransactionPro.css";

const TransactionPro: React.FC = () => {
  return (
    <section className="transactionpro">
      <div className="transactionpro-container">
        
        {/* Left Content */}
        <div className="transactionpro-content">
          <h1>
            Make your <span className="highlight">QuickBooks®</span> experience effortless
          </h1>
          <p>
            Manage data imports, exports and deletions with QuickBooks in minutes using
            Rightworks Transaction Pro. Our intuitive interface enables seamless transfer
            of transactions and lists between QuickBooks and Excel or CSV files, saving
            time and ensuring data accuracy.
          </p>
          <div className="transactionpro-buttons">
            <a href="#" className="btn btn-primary">TRY FOR FREE →</a>
            <a href="#" className="btn btn-secondary">BUY NOW →</a>
          </div>
        </div>

        {/* Right Image */}
        <div className="transactionpro-image">
          <img
            src="/assets/TP1.webp"
            alt="Transaction Pro user working"
            className="transactionpro-img"
          />
        </div>
      </div>
    </section>
  );
};

export default TransactionPro;
