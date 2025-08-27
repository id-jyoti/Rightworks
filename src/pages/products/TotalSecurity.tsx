import React from "react";
import "./TotalSecurity.css";
const TotalSecurity = ()=>{
  return (
    <section className={`totalsecurity`}>
      {/* Left Content */}
      <div className={`ts-content`}>
        <h5 className={`ts-subtitle`}>
          {`Rightworks Total Security`}
        </h5>
        <h1 className={`ts-title`}>
          {`All-in-one security for `}
          <br/>
          {` `}
          {`total peace of mind`}
        </h1>
        <p className={`ts-desc`}>
          {`Total Security locks down your firm or business with a layered defense`}
          {`system and expert support, without locking you into a complex tech`}
          {`lineup.`}
        </p>
        <button className={`btn-expert`}>
          {`TALK TO AN EXPERT →`}
        </button>
      </div>
      {/* Right Image */}
      <div className={`ts-image`}>
        <img alt={`Person using Total Security`}
          className={`main-img`}
          src={`/assets/TS1.webp`}
        />
        {/* Floating Security Icons */}
        <div className={`icon icon1`}>
          {`🔒`}
        </div>
        <div className={`icon icon2`}>
          {`☁️`}
        </div>
        <div className={`icon icon3`}>
          {`🔄`}
        </div>
        <div className={`icon icon4`}>
          {`📑`}
        </div>
      </div>
    </section>
  );
};
export default TotalSecurity;
