import { ServiceItem } from "./ServiceItem";
import { useEffect, useState } from "react";
import { IServiceItem } from "../../types/IServiceItem";

export function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className='bg-light-gray py-12 px-0'>
      <div className="container">
        <p>What We Do?</p>
        <h2 className="max-w-[655px] mt-0 mx-auto mb-16 text-center">
          The service we offer is specifically designed to meet your needs.
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {services.map((service: IServiceItem) => (
            <ServiceItem key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
