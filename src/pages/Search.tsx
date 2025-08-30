import {
  useState,
} from "react";
import Fuse from "fuse.js";
// Example site content (replace with your real site data or import JSON)
const siteData = [
  {
    url:  `/contact`,
    title:`Contact Us`,
  },
  {
    url:  `/about`,
    title:`About Us`,
  },
  {
    url:  `/search`,
    title:`Search`,
  },
  {
    url:  `/consultation`,
    title:`Book a Consultation`,
  },
  {
    url:  `/locations`,
    title:`Locations`,
  },
  {
    url:  `/services`,
    title:`Services`,
  },
  {
    url:  `/careers`,
    title:`Careers`,
  },
  {
    url:  `/blog`,
    title:`Blog`,
  },
];

// Configure Fuse.js for fuzzy search
const fuse = new Fuse (siteData, {
  threshold:0.3,
  keys:     [
    `title`,
  ],
});

const Search = ()=>{
  const [
    query,
    setQuery,
  ] = useState (``);

  const [
    results,
    setResults,
  ] = useState ([]);

  const handleInputChange = e=>{
    const text = e.target.value;

    setQuery (text);
    if (text.length >= 2) {
      const matches = fuse.search (text).map (result=>result.item);

      setResults (matches);
    }
    else {
      setResults ([]);
    }
  };

  const handleKeyDown = e=>{
    if (e.key === `Enter` && results.length > 0) {
      globalThis.location.href = results[0].url;
    }
  };

  const handleClose = ()=>{
    setQuery (``);
    setResults ([]);
  };

  return (
    <div className={`search-page`}>
      <div className={`search-container`}>
        <h1 className={`search-title`}>
          {`Search this site`}
        </h1>
        <div className={`search-box`}>
          <span className={`search-icon`}>
            {`🔍`}
          </span>
          <input aria-label={`search`} className={`search-input`}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={`Search`}
            type={`text`}
            value={query}
          />
        </div>
        {results.length > 0 && (
          <ul className={`search-suggestions`}>
            {results.map ((item, index)=>(
              <li key={index}
                className={`suggestion-item`}
              >
                <button onClick={()=>{
                  globalThis.location.href = item.url;

                  return true;
                }}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className={`close-btn`} onClick={handleClose}>
        {`✕`}
      </button>
    </div>
  );
};
export default Search;
