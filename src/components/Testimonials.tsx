import { useEffect, useState } from "react";
import Testimonial from "./Testimonial"
import { ITestimonial } from "../types/Testimonial";

export default function Testimonials () {
    const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);

    return (
        <section className="testimonials">
        <div className="container">
          <p>Happy Customers</p>
          <h2>
            Don't take our word for it. See what customers are saying about us.
          </h2>

          <div className="testimonials-list">
            {testimonial.map((item:ITestimonial)=>(
                <Testimonial key={item.id} {...item}/>
            ))}
          </div>
        </div>
      </section>
    )
}