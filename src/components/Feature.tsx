import {
  useNavigate,
} from "react-router-dom";
import {
  Shield, Server, Cloud,
} from "lucide-react";
const Features = ()=>{
  const navigate = useNavigate ();
  return (
    <section className={`features`}>
      <div className={`feature-card`}>
        <Cloud className={`feature-icon`}/>
        <h3 className={`feature-title`}>
          {`Future-proof your firm`}
        </h3>
        <p className={`feature-desc`}>
          {`Consolidate your apps, data security, and IT support into a single`}
          {`fully-managed platform.`}
        </p>
        <button className={`feature-btn`}
          onClick={()=>navigate (`/products/cloud-premier`)}
        >
          {`GET CLOUD PREMIER`}
        </button>
      </div>
      <div className={`feature-card`}>
        <Server className={`feature-icon`}/>
        <h3 className={`feature-title`}>
          {`Host your desktop apps`}
        </h3>
        <p className={`feature-desc`}>
          {`Securely access accounting & business apps like QuickBooks Desktop`}
          {`from anywhere.`}
        </p>
        <button className={`feature-btn`}
          onClick={()=>navigate (`/products/cloud-hosting`)}
        >
          {`GET CLOUD HOSTING`}
        </button>
      </div>
      <div className={`feature-card`}>
        <Shield className={`feature-icon`}/>
        <h3 className={`feature-title`}>
          {`Lock down your apps`}
        </h3>
        <p className={`feature-desc`}>
          {`Get secure, single sign-on (SSO) access to cloud-based apps like`}
          {`QuickBooks Online.`}
        </p>
        <button className={`feature-btn`}
          onClick={()=>navigate (`/products/cloud-protect`)}
        >
          {`GET CLOUD PROTECT`}
        </button>
      </div>
    </section>
  );
};
export default Features;
