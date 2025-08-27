import React from "react";
import {
  Cloud, FileText, Shield, Link, Users, Server,
} from "lucide-react";
const supportItems = [
  {
    icon: <Cloud className={`support-icon`} size={40}/>,
    title:`Cloud Hosting and QuickBooks`,
    desc: `Formerly Right Networks Hosted QuickBooks`,
    phone:`866-691-4277 ext. 2`,
  },
  {
    icon: <FileText className={`support-icon`} size={40}/>,
    title:`Transaction Pro`,
    desc: `Easily manage data transfers between QuickBooks and Excel`,
    phone:`888-297-6172`,
  },
  {
    icon: <Cloud className={`support-icon`} size={40}/>,
    title:`Cloud Premier`,
    desc: `Formerly Firm Premier and Xcentric`,
    phone:`866-923-6874`,
  },
  {
    icon: <Shield className={`support-icon`} size={40}/>,
    title:`Cloud Protect`,
    desc: `Also known as Practice Protect`,
    phone:`415-992-8245`,
  },
  {
    icon: <Link className={`support-icon`} size={40}/>,
    title:`Connect`,
    desc: `Client engagement and business performance tools`,
    phone:`866-691-4277 ext. 2`,
  },
  {
    icon: <Server className={`support-icon`} size={40}/>,
    title:`Managed Microsoft and Total Security`,
    desc: `Formerly known as Secure Workstation. Extend the protection of the OneSpace platform to your devices, network and employees`,
    phone:`888-245-0780`,
  },
  {
    icon: <Users className={`support-icon`} size={40}/>,
    title:`Community`,
    desc: `Connect with peers. Learn from experts. Elevate your firm.`,
    phone:``,
  },
];

const Support = ()=>{
  return (
    <div className={`support-container`}>
      <h1 className={`support-title`}>
        {`Our support centers are here to help`}
      </h1>
      <p className={`support-subtitle`}>
        {`Choose a product for support, chat, and status updates`}
      </p>
      <div className={`support-grid`}>
        {supportItems.map ((item, idx)=>(
          <div key={idx} className={`support-card`}>
            <div>
              {item.icon}
            </div>
            <h3 className={`support-card-title`}>
              {item.title}
            </h3>
            <p className={`support-card-desc`}>
              {item.desc}
            </p>
            <div className={`support-actions`}>
              <button className={`support-btn primary`}>
                {`SUPPORT CENTER`}
              </button>
              <button className={`support-btn outline`}>
                {`SYSTEM STATUS`}
              </button>
              {item.phone && (
                <p className={`support-phone`}>
                  <a href={`tel:${item.phone}`}>
                    {item.phone}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Support;
