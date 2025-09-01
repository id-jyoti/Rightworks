import {
  useNavigate,
} from "react-router-dom";
import {
  Play,
} from "lucide-react";
import caseImage from "../assets/image.webp";
const CaseStudy = () => {
  const navigate = useNavigate();
  return (
    <section className={`case-study`}>
      <div className={`case-content`}>
        <h2 className={`case-title`}>
          {`How we helped this firm work smarter`}
        </h2>
        <p className={`case-desc`}>
          {`Hear how Sutton, Frost, Cary transformed their firm with Rightworks—`}
          {`boosting efficiency, cutting costs, growing revenue, and keeping their`}
          {`firm one step ahead of the competition.`}
        </p>
        <button className={`case-btn`}
          onClick={() => navigate(`/case-study/sutton-frost-cary`)}
        >
          {`WATCH THEIR STORY`}
        </button>
      </div>
      <div className={`case-media`}
        onClick={() => navigate(`/case-study/sutton-frost-cary`)}
        style={{
          cursor: `pointer`,
        }}
      >
        <div className={`case-image-wrapper`}>
          <img alt={`Case Study`} className={`case-image`} src={caseImage} />
          <div className={`play-overlay`}>
            <Play size={40} />
          </div>
          <div className={`case-caption`}>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CaseStudy;
