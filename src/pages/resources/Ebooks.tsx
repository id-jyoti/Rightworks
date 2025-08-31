import "./Ebooks.css";
const Ebooks = ()=>{
  return (
    <div className={`ebooks`}>
      {/* Header Section */}
      <section className={`ebooks-header`}>
        <div className={`ebooks-header-content`}>
          <p className={`ebooks-subtitle`}>
            {`eBooks & Guides`}
          </p>
          <h1 className={`ebooks-title`}>
            {`Rightworks eBooks & guides`}
          </h1>
          <p className={`ebooks-description`}>
            {`Curious about how to run a better accounting firm? Wondering what it`}
            {`takes to keep your small business secure? Get all that—and so much`}
            {`more—here.`}
          </p>
        </div>
      </section>
      {/* Search & Filter Section */}
      <section className={`ebooks-filter`}>
        <div className={`search-wrapper`}>
          <input aria-label={`search-input`} className={`search-input`}
            placeholder={`Search ...`}
            type={`text`}
          />
        </div>
        <div className={`topics-wrapper`}>
          <select className={`topics-select`}>
            <option>
              {`Topics`}
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
export default Ebooks;
