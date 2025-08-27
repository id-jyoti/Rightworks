import React from "react";
import "./Solutions.css";
import {
  ArrowRight,
} from "lucide-react";
const Solutions = ()=>{
  return (
    <section className={`solutions`}>
      <div className={`solutions__content`}>
        <h1>
          {`Turn technology into `}
          <br/>
          {` `}
          {`one of`}
          <span className={`highlight`}>
            {`your greatest assets`}
          </span>
        </h1>
        <p>
          {`If technology has become a challenge, it’s time to meet Rightworks.`}
          {`Discover our complete portfolio of cloud-based solutions purpose-built`}
          {`for accounting firms and professionals.`}
        </p>
        <button className={`solutions__btn`}>
          {`GET STARTED `}
          <ArrowRight size={18}/>
        </button>
      </div>
      <div className={`solutions__image`}>
        <img alt={`Solutions`} src={`/assets/S1.webp`}/>
      </div>
    </section>
  );
};
export default Solutions;
