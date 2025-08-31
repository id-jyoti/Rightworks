import {
  Users, Shield, Server, Link, FileText, Cloud,
} from "lucide-react";
const supportItems = [
  {
    title:`Cloud Hosting and QuickBooks`,
    phone:`866-691-4277 ext. 2`,
    icon: <Cloud className={`support-icon`} size={40}/>,
    desc: `Formerly Right Networks Hosted QuickBooks`,
  },
  {
    title:`Transaction Pro`,
    phone:`888-297-6172`,
    icon: <FileText className={`support-icon`} size={40}/>,
    desc: `Easily manage data transfers between QuickBooks and Excel`,
  },
  {
    title:`Cloud Premier`,
    phone:`866-923-6874`,
    icon: <Cloud className={`support-icon`} size={40}/>,
    desc: `Formerly Firm Premier and Xcentric`,
  },
  {
    title:`Cloud Protect`,
    phone:`415-992-8245`,
    icon: <Shield className={`support-icon`} size={40}/>,
    desc: `Also known as Practice Protect`,
  },
  {
    title:`Connect`,
    phone:`866-691-4277 ext. 2`,
    icon: <Link className={`support-icon`} size={40}/>,
    desc: `Client engagement and business performance tools`,
  },
  {
    title:`Managed Microsoft and Total Security`,
    phone:`888-245-0780`,
    icon: <Server className={`support-icon`} size={40}/>,
    desc: `Formerly known as Secure Workstation. Extend the protection of the OneSpace platform to your devices, network and employees`,
  },
  {
    title:`Community`,
    phone:``,
    icon: <Users className={`support-icon`} size={40}/>,
    desc: `Connect with peers. Learn from experts. Elevate your firm.`,
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
