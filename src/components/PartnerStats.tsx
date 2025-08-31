// src/components/PartnerStats.tsx
import {
  useState, useEffect,
} from "react";
import bill from "../assets/G.svg";
import xero from "../assets/F.svg";
import quickbooks from "../assets/E.svg";
import microsoft from "../assets/D.svg";
import cch from "../assets/C.svg";
import wolters from "../assets/B.svg";
import thomson from "../assets/A.svg";
const PartnersStats = ()=>{
  const [
    revenueBoost,
    setRevenueBoost,
  ] = useState (40);

  const [
    years,
    setYears,
  ] = useState (20);

  const [
    firms,
    setFirms,
  ] = useState (10000);

  // Animate stats
  useEffect (()=>{
    const interval = setInterval (()=>{
      setRevenueBoost (prev=>prev + (Math.random () > 0.5 ?
        1 :
          - 1));
      setYears (prev=>prev + (Math.random () > 0.8 ?
        1 :
        0));
      setFirms (prev=>prev + Math.floor (Math.random () * 5));
    }, 4000);

    return ()=>{
      clearInterval (interval);
    };
  }, []);

  return (
    <section className={`partners-stats`}>
      {/* Partner Logos */}
      <div className={`partners`}>
        <p className={`partners-text`}>
          {`Rightworks makes the apps you already use even better (and safer).`}
        </p>
        <div className={`partners-logos`}>
          <img alt={`Thomson Reuters`} src={thomson}/>
          <img alt={`Wolters Kluwer`} src={wolters}/>
          <img alt={`CCH Access`} src={cch}/>
          <img alt={`Microsoft`} src={microsoft}/>
          <img alt={`QuickBooks`} src={quickbooks}/>
          <img alt={`Xero`} src={xero}/>
          <img alt={`Bill`} src={bill}/>
        </div>
      </div>
      {/* Stats Row */}
      <div className={`stats`}>
        <div className={`stat-item`}>
          <h3>
            {revenueBoost}
            {`%`}
          </h3>
          <p>
            {`The right tech can boost revenue `}
            <br/>
            {` `}
            {`per employee by almost`}
            {revenueBoost}
            {`%`}
          </p>
        </div>
        <div className={`stat-divider`}/>
        <div className={`stat-item`}>
          <h3>
            {years}
            {`+ years`}
          </h3>
          <p>
            {`We’ve been helping accounting `}
            <br/>
            {` `}
            {`firms succeed for over`}
            {years}
            {`+ years`}
          </p>
        </div>
        <div className={`stat-divider`}/>
        <div className={`stat-item`}>
          <h3>
            {firms.toLocaleString ()}
            {`+ firms`}
          </h3>
          <p>
            {`Join the many firms who trust `}
            <br/>
            {` `}
            {`Rightworks to supercharge their`}
            {`business`}
          </p>
        </div>
      </div>
    </section>
  );
};
export default PartnersStats;
