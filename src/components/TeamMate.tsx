import { ITeamMate } from "../types/TeamMate";

export function TeamMate({ image, name, area, slogan }: ITeamMate) {
  return (
    <div className="team-item">
      <img src={image} />
      <h3>{name}</h3>
      <p>{area}</p>
      <p>{slogan}</p>
    </div>
  );
}
