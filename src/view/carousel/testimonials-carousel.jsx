import React, { useState } from "react";
import { Carousel, Indicator } from "react-bootstrap";
import plane from "../../assets/plane.png";
import "./style.scss";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const testimonials = [
    {
      name: "Olivia",
      status: "Brand Manager, Yatra",
      quote:
        '"We have been using this service to book flights and can’t imagine working without it."',
    },
    {
      name: "Jane Smith",
      status: "Brand Manager, Indigo",
      quote:
      '"We have been using this service to book flights and can’t imagine working without it."',
    },
    {
      name: "Bob Johnson",
      status: "Brand Manager, Air India",
      quote:
      '"We have been using this service to book flights and can’t imagine working without it."',
    },
  ];

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <React.Fragment>
      <img className="plane" src={plane} />

      <Carousel
        controls={false}
        className="testimonials"
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
        interval={3000}
      >
        {testimonials.map((testimonial, i) => (
          <Carousel.Item key={i}>
            <h1 className="quote">{testimonial.quote}</h1>
            <p className="name">{testimonial.name}</p>
            <p className="status">{testimonial.status}</p>
          </Carousel.Item>
        ))}
      </Carousel>
    </React.Fragment>
  );
};

export default Testimonials;
