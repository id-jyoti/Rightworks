import React from "react";
import "./Webinars.css";
const Webinars = ()=>{
  return (
    <div className={`webinars`}>
      {/* Header Section */}
      <section className={`webinars-header`}>
        <h1 className={`webinars-title`}>
          {`Live and on-demand webinars`}
        </h1>
      </section>
      {/* Filter Section */}
      <section className={`webinars-filter`}>
        {/* Search */}
        <div className={`search-wrapper`}>
          <input className={`search-input`}
            placeholder={`Search ...`}
            type={`text`}
          />
        </div>
        {/* Topics */}
        <div className={`select-wrapper`}>
          <select className={`webinars-select`}>
            <option>
              {`All Topics`}
            </option>
            <option>
              {`Cloud`}
            </option>
            <option>
              {`Cybersecurity`}
            </option>
            <option>
              {`Automation`}
            </option>
          </select>
        </div>
        {/* Roles */}
        <div className={`select-wrapper`}>
          <select className={`webinars-select`}>
            <option>
              {`All Roles`}
            </option>
            <option>
              {`Owner`}
            </option>
            <option>
              {`Manager`}
            </option>
            <option>
              {`IT Professional`}
            </option>
          </select>
        </div>
        {/* Filter Button */}
        <button className={`filter-btn`}>
          {`FILTER `}
          <span className={`filter-icon`}>
            {`⚙️`}
          </span>
        </button>
      </section>
    </div>
  );
};
export default Webinars;
