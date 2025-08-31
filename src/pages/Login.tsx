import {
  ArrowRight,
} from "lucide-react";
const Login:= ()=>{
  const portals = [
    {
      title:   `Rightworks Cloud Hosting`,
      subtitle:`AppHub`,
      icon:    `/assets/icons/login1.svg`,
    },
    {
      title:   `Rightworks Hosted QuickBooks`,
      subtitle:`formerly Right Networks Hosted QuickBooks`,
      icon:    `/assets/icons/login2.webp`,
    },
    {
      title:   `Rightworks Cloud Premier`,
      subtitle:`formerly Cloud Premier`,
      icon:    `/assets/icons/login3.svg`,
    },
    {
      title:   `Rightworks Academy`,
      subtitle:`formerly Rootworks`,
      icon:    `/assets/icons/login4.svg`,
    },
    {
      title:   `Rightworks Transaction Pro`,
      subtitle:`formerly Transaction Pro`,
      icon:    `/assets/icons/login5.svg`,
    },
    {
      title:   `Rightworks Connect`,
      subtitle:`formerly Rootworks Insights`,
      icon:    `/assets/icons/login6.svg`,
    },
  ];

  return (
    <div className={`login-page`}>
      <header className={`login-header`}>
        <h1>
          {`Rightworks account access`}
        </h1>
        <p>
          {`Access your Rightworks account through our secure portals. Choose from`}
          {`Rightworks Cloud Hosting (AppHub), Rightworks Cloud Premier,`}
          {`Rightworks Academy (formerly Rootworks), Rightworks Transaction Pro`}
          {`and Rightworks Connect.`}
        </p>
      </header>
      <div className={`portal-grid`}>
        {portals.map ((portal, idx)=>(
          <div key={idx} className={`portal-card`}>
            <div className={`portal-left`}>
              <h2>
                {portal.title}
              </h2>
              <p>
                {portal.subtitle}
              </p>
              <button className={`login-btn`}>
                {`ACCOUNT LOGIN `}
                <ArrowRight size={16}/>
              </button>
            </div>
            <div className={`portal-right`}>
              <img alt={portal.title} src={portal.icon}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Login;
