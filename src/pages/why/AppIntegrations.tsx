import React, { useState } from "react";
import "./AppIntegrations.css";

interface App {
  id: number;
  name: string;
  description: string;
  image: string;
  categories: string[];
}

const appsData: App[] = [
  {
    id: 1,
    name: "Acctivate",
    description:
      "Acctivate Inventory Software for QuickBooks. When a business outgrows the limitations of QuickBooks® inventory management, they need a robust solution designed to fit their growth.",
    image: "/assets/AI1.webp",
    categories: ["Inventory management"],
  },
  {
    id: 2,
    name: "Accuware Label Connector",
    description:
      "Label Connector adds powerful Label design and printing capability at your fingertips for users of QuickBooks Desktop.",
    image: "/assets/AI2.webp",
    categories: ["Inventory management"],
  },
  {
    id: 3,
    name: "Adobe DC",
    description:
      "With Adobe, your firm or small business has everything it needs to create, edit, and review PDFs, as well as e-sign documents.",
    image: "/assets/AI3.webp",
    categories: ["PDF tools", "Productivity"],
  },
  {
    id: 4,
    name: "ADP",
    description:
      "ADP offers Payroll Services, HR Software and Tax and Compliance services for businesses of all sizes.",
    image: "/assets/AI4.webp",
    categories: ["Expense management", "Payroll", "Time tracking"],
  },
  {
    id: 5,
    name: "Autofy / Autofy Insights / Autofy Dext",
    description:
      "Autofy provides powerful QuickBooks integration for e-commerce systems, Salesforce, and more.",
    image: "/assets/AI5.webp",
    categories: ["Payroll"],
  },
  {
    id: 6,
    name: "Avalara AvaTax",
    description:
      "Avalara AvaTax uses automation to make tax determination faster, easier, and more accurate.",
    image: "/assets/AI6.webp",
    categories: ["Tax tools"],
  },
];

const categories = [
  "All",
  "Inventory management",
  "PDF tools",
  "Productivity",
  "Payroll",
  "Expense management",
  "Time tracking",
  "Tax tools",
];

const AppIntegrations: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredApps = appsData.filter((app) => {
    const matchesSearch = app.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || app.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app-integrations">
      {/* Hero Section */}
      <section className="banner">
        <div className="banner-content">
          <p className="subtitle">OneSpace Platform Application Directory</p>
          <h1>
            Harness the power of <span className="highlight">cutting-edge apps</span> in the cloud
          </h1>
          <p className="description">
            Find out which best-in-class accounting, business and vertical-specific apps are
            available in the Rightworks cloud. While this list represents just a few of our most
            used applications, Rightworks supports hundreds of the apps you use each day, helping
            you customize your <span className="highlight">Rightworks package.</span>
          </p>

          {/* Search + Filter */}
          <div className="search-filter">
            <input
              type="text"
              placeholder="Search ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <button className="filter-btn">FILTER</button>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="apps-section">
        <h2 className="apps-title">Showing {filteredApps.length} applications</h2>
        <div className="apps-grid">
          {filteredApps.map((app) => (
            <div className="app-card" key={app.id}>
              <img src={app.image} alt={app.name} />
              <h3>{app.name}</h3>
              <p>{app.description}</p>
              <div className="tags">
                {app.categories.map((cat) => (
                  <span key={cat}>{cat}</span>
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
