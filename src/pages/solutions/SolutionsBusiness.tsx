import React from "react";
import "./SolutionsBusiness.css";
import { ArrowRight } from "lucide-react";

const SolutionsBusiness: React.FC = () => {
  return (
    <section className="solutions-business">
      <div className="solutions-business__content">
        <h1>
          We manage the technology. <br /> You manage your business.
        </h1>
        <p>
          Get back to your employees and customers, and leave the flexible
          application access, protection from cyberattacks and simplifying of
          operations to us.
        </p>
        <button className="solutions-business__btn">
          GET STARTED <ArrowRight size={18} />
        </button>
      </div>
      <div className="solutions-business__image">
        <img src="/assets/SB1.png" alt="Business Solutions" />
      </div>
    </section>
  );
};

export default SolutionsBusiness;
