import "./Leadership.css";
const Leadership = ()=>{
  return (
    <div className={`leadership-page`}>
      {/* Header Section */}
      <section className={`header-section`}>
        <div className={`breadcrumb`}>
          {`About us / Our team`}
        </div>
        <h1>
          {`Rightworks team`}
        </h1>
        <p>
          {`Made up of passionate, tenured leaders, the Rightworks leadership`}
          {`team’s focus is to advance the accounting profession through`}
          {`innovation, thought leadership and community.`}
        </p>
      </section>
      {/* Executive Leadership Section */}
      <section className={`team-section`}>
        <h2>
          {`Executive leadership`}
        </h2>
        <div className={`team-grid`}>
          {[
            {
              role:`Executive Chairman`,
              name:`Joel Hughes`,
              img: `/assets/L1.webp`,
            },
            {
              role:`Chief Executive Officer`,
              name:`Ian Williams`,
              img: `/assets/L2.webp`,
            },
            {
              role:`President`,
              name:`Michael Bird`,
              img: `/assets/L3.webp`,
            },
            {
              role:`Chief Revenue Officer`,
              name:`Jay Muelhoefer`,
              img: `/assets/L4.webp`,
            },
            {
              role:`General Counsel`,
              name:`Adam Collicelli`,
              img: `/assets/L5.webp`,
            },
            {
              role:`Chief Human Resources Officer`,
              name:`Dana Abraham`,
              img: `/assets/L6.webp`,
            },
            {
              role:`Vice President of Strategy`,
              name:`Tom LeSaffre`,
              img: `/assets/L7.webp`,
            },
            {
              role:`Chief Financial Officer`,
              name:`Jenny Buchholz`,
              img: `/assets/L8.webp`,
            },
          ].map ((member, index)=>(
            <div key={index} className={`team-card`}>
              <img alt={member.name} src={member.img}/>
              <h3>
                {member.name}
              </h3>
              <p>
                {member.role}
              </p>
              <button className={`learn-btn`}>
                {`LEARN MORE →`}
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Operational Leadership Section */}
      <section className={`team-section`}>
        <h2>
          {`Operational leadership`}
        </h2>
        <div className={`team-grid`}>
          {[
            {
              role:`Chief Information Officer`,
              name:`Jim Walsh`,
              img: `/assets/L9.webp`,
            },
            {
              role:`Chief Customer Care Officer`,
              name:`Gary Engel`,
              img: `/assets/L10.webp`,
            },
            {
              role:`Chief Technology Officer`,
              name:`Jon Lupa`,
              img: `/assets/L11.webp`,
            },
            {
              role:`Vice President, EPM`,
              name:`Meg Norberg`,
              img: `/assets/L12.webp`,
            },
          ].map ((member, index)=>(
            <div key={index} className={`team-card`}>
              <img alt={member.name} src={member.img}/>
              <h3>
                {member.name}
              </h3>
              <p>
                {member.role}
              </p>
              <button className={`learn-btn`}>
                {`LEARN MORE →`}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Leadership;
