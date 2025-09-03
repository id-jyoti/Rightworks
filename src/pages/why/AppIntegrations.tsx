import type React from "react";
import {
  useState,
} from "react";
import "./AppIntegrations.css";
const appsData = [
  {
    name:       `Acctivate`,
    image:      `/assets/AI1.webp`,
    id:         1,
    description:`Acctivate Inventory Software for QuickBooks. When a business outgrows the limitations of QuickBooks® inventory management, they need a robust solution designed to fit their growth.`,
    categories: [
      `Inventory management`,
    ],
  },
  {
    name:       `Accuware Label Connector`,
    image:      `/assets/AI2.webp`,
    id:         2,
    description:`Label Connector adds powerful Label design and printing capability at your fingertips for users of QuickBooks Desktop.`,
    categories: [
      `Inventory management`,
    ],
  },
  {
    name:       `Adobe DC`,
    image:      `/assets/AI3.webp`,
    id:         3,
    description:`With Adobe, your firm or small business has everything it needs to create, edit, and review PDFs, as well as e-sign documents.`,
    categories: [
      `PDF tools`,
      `Productivity`,
    ],
  },
  {
    name:       `ADP`,
    image:      `/assets/AI4.webp`,
    id:         4,
    description:`ADP offers Payroll Services, HR Software and Tax and Compliance services for businesses of all sizes.`,
    categories: [
      `Expense management`,
      `Payroll`,
      `Time tracking`,
    ],
  },
  {
    name:       `Autofy / Autofy Insights / Autofy Dext`,
    image:      `/assets/AI5.webp`,
    id:         5,
    description:`Autofy provides powerful QuickBooks integration for e-commerce systems, Salesforce, and more.`,
    categories: [
      `Payroll`,
    ],
  },
  {
    name:       `Avalara AvaTax`,
    image:      `/assets/AI6.webp`,
    id:         6,
    description:`Avalara AvaTax uses automation to make tax determination faster, easier, and more accurate.`,
    categories: [
      `Tax tools`,
    ],
  },
];

const categories = [
  `All`,
  `Inventory management`,
  `PDF tools`,
  `Productivity`,
  `Payroll`,
  `Expense management`,
  `Time tracking`,
  `Tax tools`,
];

const AppIntegrations: React.FC = ()=>{
  const [
    search,
    setSearch,
  ] = useState (``);

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState (`All`);

  const filteredApps = appsData.filter (app=>{
    const matchesSearch = app.name.toLowerCase ().includes (search.toLowerCase ());

    const matchesCategory =
      selectedCategory === `All` || app.categories.includes (selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`app-integrations`}>
      {/* Hero Section */}
      <section className={`banner`}>
        <div className={`banner-content`}>
          <p className={`subtitle`}>
            {`OneSpace Platform Application Directory`}
          </p>
          <h1>
            {`Harness the power of `}
            <span className={`highlight`}>
              {`cutting-edge apps`}
            </span>
            {` `}
            {`in the cloud`}
          </h1>
          <p className={`description`}>
            {`Find out which best-in-class accounting, business and vertical-specific apps are`}
            {`available in the Rightworks cloud. While this list represents just a few of our most`}
            {`used applications, Rightworks supports hundreds of the apps you use each day, helping`}
            {`you customize your `}
            <span className={`highlight`}>
              {`Rightworks package.`}
            </span>
          </p>
          {/* Search + Filter */}
          <div className={`search-filter`}>
            <input aria-label={`search`} placeholder={`Search ...`}
              type={`text`}
              value={search}
              onChange={e=>{
                setSearch (e.target.value);
              }}
            />
            <select value={selectedCategory}
              onChange={e=>{
                setSelectedCategory (e.target.value);
              }}
            >
              {categories.map (cat=>(
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <button className={`filter-btn`}>
              {`FILTER`}
            </button>
          </div>
        </div>
      </section>
      {/* Applications Section */}
      <section className={`apps-section`}>
        <h2 className={`apps-title`}>
          {`Showing`}
          {filteredApps.length}
          {` `}
          {`applications`}
        </h2>
        <div className={`apps-grid`}>
          {filteredApps.map (app=>(
            <div key={app.id} className={`app-card`}>
              <img alt={app.name} src={app.image}/>
              <h3>
                {app.name}
              </h3>
              <p>
                {app.description}
              </p>
              <div className={`tags`}>
                {app.categories.map (cat=>(
                  <span key={cat}>
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default AppIntegrations;
