import React, {
  useState,
} from "react";
import "./PricingTransactionPro.css";
const PricingTransactionPro = ()=>{
  const [
    activeTab,
    setActiveTab,
  ] = useState (`Desktop`);

  return (
    <div className={`pricing-wrapper`}>
      {/* Header */}
      <div className={`pricing-header`}>
        <h1>
          {`Rightworks Transaction Pro`}
        </h1>
        <p>
          {`Make working with QuickBooks® a breeze. Toggle between`}
          <span className={`highlight`}>
            {` `}
            {`‘Desktop’`}
            {` `}
          </span>
          {` `}
          {`or`}
          <span className={`highlight`}>
            {` `}
            {`‘Online’`}
            {` `}
          </span>
          {` `}
          {`below to view Transaction Pro`}
          {`for QuickBooks Desktop or QuickBooks Online plans.`}
        </p>
      </div>
      {/* Tabs */}
      <div className={`pricing-tabs`}>
        {[
          `Desktop`,
          `Online monthly subscription`,
          `Online annual subscription`,
        ].map (
          tab=>(
            <button key={tab}
              onClick={()=>setActiveTab (tab)}
              className={`pricing-tab ${activeTab === tab ?
                `active` :
                ``}`}
            >
              {tab}
            </button>
          ),
        )}
      </div>
      {/* Content */}
      <div className={`pricing-content`}>
        {activeTab === `Desktop` &&
          <h2>
            {`Transaction Pro for QuickBooks Desktop`}
          </h2>}
        {activeTab === `Online monthly subscription` &&
          <h2>
            {`Transaction Pro – Online Monthly Subscription`}
          </h2>}
        {activeTab === `Online annual subscription` &&
          <h2>
            {`Transaction Pro – Online Annual Subscription`}
          </h2>}
      </div>
    </div>
  );
};
export default PricingTransactionPro;
