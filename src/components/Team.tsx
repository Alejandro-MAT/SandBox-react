import { useEffect, useState } from "react";
import { ITeamMate } from "../types/TeamMate";
import checkIco from "../assets/images/icons/screen-ico.svg";
import userIco from "../assets/images/icons/contact-ico.svg";
import cupIco from "../assets/images/icons/cup-ico.svg";
import { TeamMate } from "./TeamMate";

export default function () {
  const [teamMates, setTemMates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/team")
      .then((res) => res.json())
      .then((data) => setTemMates(data));
  }, []);
  return (
    <section className="team">
      <div className="container team-container">
        <div className="info">
          <h2>We are proud of our design team</h2>
          <p>
            Just sit back and relax while we take care of your business needs
            for you.
          </p>
        </div>

        <div className="team-stadistics">
          <div className="team-stadistics-item">
            <div className="image">
              <img src={checkIco} alt="" />
            </div>
            <h3>1000+</h3>
            <p>Completed Projects</p>
          </div>

          <div className="team-stadistics-item">
            <div className="image">
              <img src={userIco} alt="" />
            </div>
            <h3>50K+</h3>
            <p>Happy Customers</p>
          </div>

          <div className="team-stadistics-item">
            <div className="image">
              <img src={cupIco} alt="" />
            </div>
            <h3>20+</h3>
            <p>Awards Won</p>
          </div>
        </div>

        <div className="team-list">
          {teamMates.map((item: ITeamMate) => (
            <TeamMate key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
