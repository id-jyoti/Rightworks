import React, { useState } from "react";
import Fuse from "fuse.js";

// Example site content (replace with your real site data or import JSON)
const siteData = [
  { title: "Contact Us", url: "/contact" },
  { title: "About Us", url: "/about" },
  { title: "Search", url: "/search" },
  { title: "Book a Consultation", url: "/consultation" },
  { title: "Locations", url: "/locations" },
  { title: "Services", url: "/services" },
  { title: "Careers", url: "/careers" },
  { title: "Blog", url: "/blog" },
];

// Configure Fuse.js for fuzzy search
const fuse = new Fuse(siteData, {
  keys: ["title"],
  threshold: 0.3, // lower = stricter matches
});

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ title: string; url: string }[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setQuery(text);

    if (text.length >= 2) {
      const matches = fuse.search(text).map(result => result.item);
      setResults(matches);
    } else {
      setResults([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && results.length > 0) {
      window.location.href = results[0].url; // Navigate to first result
    }
  };

  const handleClose = () => {
    setQuery("");
    setResults([]);
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <h1 className="search-title">Search this site</h1>

        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>

        {results.length > 0 && (
          <ul className="search-suggestions">
            {results.map((item, index) => (
              <li
                key={index}
                className="suggestion-item"
                onClick={() => (window.location.href = item.url)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button className="close-btn" onClick={handleClose}>✕</button>
    </div>
  );
};

export default Search;
