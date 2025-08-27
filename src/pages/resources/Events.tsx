import React from "react";
import "./Events.css";
const Events = ()=>{
  return (
    <div className={`events`}>
      {/* Header Section */}
      <section className={`events-header`}>
        <div className={`events-header-content`}>
          <h1 className={`events-title`}>
            {`Rightworks events`}
          </h1>
          <p className={`events-description`}>
            {`From Rightworks virtual events to in-person conferences, mark your`}
            {`calendar and join us for transformative insights from experts in the`}
            {`profession. Make plans and register today.`}
          </p>
        </div>
      </section>
      {/* Filters Section */}
      <section className={`events-filter`}>
        {/* Search */}
        <div className={`search-wrapper`}>
          <input className={`search-input`}
            placeholder={`Search ...`}
            type={`text`}
          />
        </div>
        {/* Event Types */}
        <div className={`select-wrapper`}>
          <select className={`events-select`}>
            <option>
              {`Event Types`}
            </option>
            <option>
              {`Webinar`}
            </option>
            <option>
              {`Conference`}
            </option>
            <option>
              {`Workshop`}
            </option>
          </select>
        </div>
        {/* Locations */}
        <div className={`select-wrapper`}>
          <select className={`events-select`}>
            <option>
              {`Locations`}
            </option>
            <option>
              {`Online`}
            </option>
            <option>
              {`New York`}
            </option>
            <option>
              {`London`}
            </option>
          </select>
        </div>
        {/* Date Range */}
        <div className={`date-wrapper`}>
          <input className={`date-input`} placeholder={`Date from`} type={`date`}/>
          <input className={`date-input`} placeholder={`Date until`} type={`date`}/>
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
export default Events;
