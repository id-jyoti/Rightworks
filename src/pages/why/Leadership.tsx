import React from "react";
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
              name:`Joel Hughes`,
              role:`Executive Chairman`,
              img: `/assets/L1.webp`,
            },
            {
              name:`Ian Williams`,
              role:`Chief Executive Officer`,
              img: `/assets/L2.webp`,
            },
            {
              name:`Michael Bird`,
              role:`President`,
              img: `/assets/L3.webp`,
            },
            {
              name:`Jay Muelhoefer`,
              role:`Chief Revenue Officer`,
              img: `/assets/L4.webp`,
            },
            {
              name:`Adam Collicelli`,
              role:`General Counsel`,
              img: `/assets/L5.webp`,
            },
            {
              name:`Dana Abraham`,
              role:`Chief Human Resources Officer`,
              img: `/assets/L6.webp`,
            },
            {
              name:`Tom LeSaffre`,
              role:`Vice President of Strategy`,
              img: `/assets/L7.webp`,
            },
            {
              name:`Jenny Buchholz`,
              role:`Chief Financial Officer`,
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
              name:`Jim Walsh`,
              role:`Chief Information Officer`,
              img: `/assets/L9.webp`,
            },
            {
              name:`Gary Engel`,
              role:`Chief Customer Care Officer`,
              img: `/assets/L10.webp`,
            },
            {
              name:`Jon Lupa`,
              role:`Chief Technology Officer`,
              img: `/assets/L11.webp`,
            },
            {
              name:`Meg Norberg`,
              role:`Vice President, EPM`,
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
