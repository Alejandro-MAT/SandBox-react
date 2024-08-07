import { IServiceItem } from "../types/ServiceItem";

export default function ServiceItem({image, title, description}: IServiceItem) {
  return (
    <div className="services-item">
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="/">Learn More</a>
    </div>
  );
}
