import { ITestimonial } from "../../types/ITestimonial";

export function Testimonial({
  author,
  image,
  area,
  testimonials,
}: ITestimonial) {
  return (
    <div className="bg-white p-5">
      <p className=" text-[18px]">{testimonials}</p>
      <div className="flex justify-start gap-7 mb-7">
        <div className="image">
          <img className="max-w-[70px]" src={image} />
        </div>
        <div className="bio">
          <h3>{author}</h3>
          <p>{area}</p>
        </div>
      </div>
    </div>
  );
}
