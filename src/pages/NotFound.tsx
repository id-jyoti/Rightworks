// src/pages/NotFound.tsx
import type React from "react";
import {
  Link,
} from "react-router-dom";
import "./NotFound.css";
const NotFound: React.FC = ()=>{
  return (
    <div className={`notfound-container`}>
      <div className={`notfound-content`}>
        <h2 className={`notfound-error`}>
          {`Error 404`}
        </h2>
        <h1 className={`notfound-title`}>
          {`Looks like the page you are looking for is missing...`}
        </h1>
        <p className={`notfound-text`}>
          {`Our experienced team is on it. In the meantime, try visiting our`}
          {` `}
          <Link className={`notfound-link`} to={`/`}>
            {`homepage`}
          </Link>
          {` `}
          {`or search our site:`}
        </p>
        {/* Search Bar */}
        <div className={`notfound-search`}>
          <input aria-label={`notfound-search-input`} className={`notfound-search-input`}
            placeholder={`Type and hit enter to search...`}
            type={`text`}
          />
        </div>
        {/* Immediate Help Section */}
        <div className={`notfound-help`}>
          <h2 className={`notfound-help-title`}>
            {`Need immediate answers?`}
          </h2>
          <p className={`notfound-help-text`}>
            {`We’re here to help! Give us a call at`}
            {` `}
            <a className={`notfound-phone`} href={`tel:8663357858`}>
              {`866-335-7858`}
            </a>
            {` `}
            {`or check out our resources below.`}
          </p>
          {/* Placeholder buttons */}
          <div className={`notfound-resources`}>
            <div className={`notfound-resource`}/>
            <div className={`notfound-resource`}/>
            <div className={`notfound-resource`}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
