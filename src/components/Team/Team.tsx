import { useEffect, useState } from "react";
import { ITeamMate } from "../../types/ITeamMate";
import checkIco from "../../assets/images/icons/screen-ico.svg";
import userIco from "../../assets/images/icons/contact-ico.svg";
import cupIco from "../../assets/images/icons/cup-ico.svg";
import { TeamMate } from "./TeamMate";

export function Team() {
  const [teamMates, setTemMates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/team")
      .then((res) => res.json())
      .then((data) => setTemMates(data));
  }, []);
  return (
    <section className="bg-gray pt-12 px-0 pb-24">
      <div className="container grid gri-col-1 gap-5 lg:grid-cols-[1fr_2fr_auto]">
        <div className="info">
          <h2>We are proud of our design team</h2>
          <p>
            Just sit back and relax while we take care of your business needs
            for you.
          </p>
        </div>

        <div className="flex flex-wrap gap-24">
          <div className="flex flex-col item-center text-center md:gap-3 flex-1">
            <div className="bg-skyblue p-4 w-fit rounded full">
              <img className="h-[26px]" src={checkIco} alt="" />
            </div>
            <h3 className="text-[41px]">1000+</h3>
            <p>Completed Projects</p>
          </div>

          <div className="flex flex-col item-center text-center md:gap-3 flex-1">
            <div className="bg-skyblue p-4 w-fit rounded full">
              <img className="h-[26px]" src={userIco} alt="" />
            </div>
            <h3 className="text-[41px]">50K+</h3>
            <p>Happy Customers</p>
          </div>

          <div className="flex flex-col item-center text-center md:gap-3 flex-1">
            <div className="bg-skyblue p-4 w-fit rounded full">
              <img className="h-[26px]" src={cupIco} alt="" />
            </div>
            <h3 className="text-[41px]">20+</h3>
            <p>Awards Won</p>
          </div>
        </div>

        <div className="grid gap-5 grid-cols-1 col-span-full md:grid-cols-2 lg:grid-cols-4">
          {teamMates.map((item: ITeamMate) => (
            <TeamMate key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
