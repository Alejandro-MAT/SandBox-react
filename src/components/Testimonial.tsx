import { ITestimonial } from "../types/Testimonial";

export default function Testimonial({author,image,area,testimonials}:ITestimonial) {
  return (
    <div className="testimonials-item">
      <p>
        {testimonials}
      </p>
      <div className="testimonials-author">
        <div className="image">
          <img src={image} />
        </div>
        <div className="bio">
          <h3>{author}</h3>
          <p>{area}</p>
        </div>
      </div>
    </div>
  );
}
