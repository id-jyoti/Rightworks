import {
  Link,
} from "react-router-dom";
import {
  FiSearch,
} from "react-icons/fi";
// src/components/Topbar.tsx
import React, {
  useState, useEffect,
} from "react";
const TopBar = ()=>{
  const [
    salesNo,
    setSalesNo,
  ] = useState (234524);

  useEffect (()=>{
    const interval = setInterval (()=>{
      setSalesNo (prev=>prev + Math.floor (Math.random () * (10 + 1)));
    }, 3000);

    return ()=>{
      clearInterval (interval);
    };
  }, []);

  return (
    <div className={`topbar`}>
      <div className={`topbar-content`}>
        <span className={`sales`}>
          {`Sales No:`}
          {salesNo}
        </span>
        <Link to={`/support`}>
          {`Support`}
        </Link>
        <Link to={`/contact`}>
          {`Contact Us`}
        </Link>
        <Link aria-label={`Search`} className={`search-btn`} to={`/search`}>
          <FiSearch/>
        </Link>
        <Link to={`/login`}>
          {`Login`}
        </Link>
      </div>
    </div>
  );
};
export default TopBar;
