import {
  Link,
} from "react-router-dom";
// src/components/Awards.tsx
import React from "react";
import usersLoveUs from "../assets/7.webp";
import gridLeaderSmall from "../assets/6.webp";
import gridLeader from "../assets/5.webp";
import easiestUse from "../assets/4.webp";
import bestSupport from "../assets/3.webp";
import highPerformer from "../assets/2.webp";
import g2Icon from "../assets/1.webp";
const Awards = ()=>{
  return (
    <section className={`awards`}>
      <div className={`awards-rating`}>
        <Link to={`/reviews`}>
          <img alt={`G2 Icon`} src={g2Icon}/>
        </Link>
        <span className={`stars`}>
          {`★★★★★`}
        </span>
        <Link to={`/reviews`}>
          <img alt={`High Performer`} src={highPerformer}/>
        </Link>
      </div>
      <div className={`awards-badges`}>
        <Link to={`/reviews`}>
          <img alt={`Best Support`} src={bestSupport}/>
        </Link>
        <Link to={`/reviews`}>
          <img alt={`Easiest to Use`} src={easiestUse}/>
        </Link>
        <Link to={`/reviews`}>
          <img alt={`Grid Leader`} src={gridLeader}/>
        </Link>
        <Link to={`/reviews`}>
          <img alt={`Grid Leader Small Business`} src={gridLeaderSmall}/>
        </Link>
        <Link to={`/reviews`}>
          <img alt={`Users Love Us`} className={`big-badge`} src={usersLoveUs}/>
        </Link>
      </div>
    </section>
  );
};
export default Awards;
