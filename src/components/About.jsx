import React from 'react';
import p1 from '../p1.jpeg';
import p2 from '../p2.jpeg';
import p3 from '../p3.jpeg';
import c5 from '../c5.jpeg'

const slides = [
  { src: p1, caption: "Riyanka Dey" },
  { src: p2, caption: "Priyanka Chaudhari" },
  { src: p3, caption: "Paras Kadam" },
  { src: c5, caption: "Srushti Bhirud" },
];

function About() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img
              style={{ filter: "contrast(80%) brightness(50%)" ,height:"400px"}}
              src={slide.src}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-md-block">
              <h5>{slide.caption}</h5>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default About;
