import React, { useState } from "react";
import "./News.css";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  businessType: string;
  description: string;
}

const News: React.FC = () => {
  // Dummy News Data
  const newsData: NewsItem[] = [
    {
      id: 1,
      title: "Rightworks expands global partnerships",
      category: "Partnerships",
      businessType: "B2B",
      description: "Rightworks strengthens its partner network worldwide."
    },
    {
      id: 2,
      title: "New AI-driven software launched",
      category: "Software",
      businessType: "Tech",
      description: "Introducing advanced AI solutions for enterprises."
    },
    {
      id: 3,
      title: "Rightworks at Global Tech Conference 2025",
      category: "Events",
      businessType: "Enterprise",
      description: "Showcasing innovations at the global stage."
    },
    {
      id: 4,
      title: "Meet the new leadership team",
      category: "People",
      businessType: "Corporate",
      description: "Rightworks announces leadership changes."
    }
  ];

  // State for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBusinessType, setSelectedBusinessType] = useState("All");

  // Categories & Business Types Options
  const categories = ["All", "Partnerships", "Software", "Events", "People"];
  const businessTypes = ["All", "B2B", "Tech", "Enterprise", "Corporate"];

  // Filtering Logic
  const filteredNews = newsData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchesBusinessType =
      selectedBusinessType === "All" ||
      item.businessType === selectedBusinessType;

    return matchesSearch && matchesCategory && matchesBusinessType;
  });

  return (
    <div className="news-page">
      {/* ---------- HERO SECTION ---------- */}
      <section className="news-hero">
        <div className="news-hero-content">
          <h1>Rightworks newsroom</h1>
          <p>
            Access the latest news on Rightworks: the company, people,
            partnerships, events, software and more.
          </p>
        </div>
      </section>

      {/* ---------- FILTERS SECTION ---------- */}
      <section className="news-filters">
        <div className="filter-container">
          <input
            type="text"
            placeholder="Search ..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="filter-dropdown"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            className="filter-dropdown"
            value={selectedBusinessType}
            onChange={(e) => setSelectedBusinessType(e.target.value)}
          >
            {businessTypes.map((type, i) => (
              <option key={i} value={type}>
                {type}
              </option>
            ))}
          </select>

          <button
            className="filter-btn"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
              setSelectedBusinessType("All");
            }}
          >
            RESET
          </button>
        </div>
      </section>

      {/* ---------- LATEST NEWS SECTION ---------- */}
      <section className="latest-news">
        <h2>Latest news</h2>

        <div className="news-list">
          {filteredNews.length > 0 ? (
            filteredNews.map((news) => (
              <div key={news.id} className="news-card">
                <h3>{news.title}</h3>
                <p className="news-meta">
                  {news.category} • {news.businessType}
                </p>
                <p>{news.description}</p>
              </div>
            ))
          ) : (
            <p className="no-results">No news found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
