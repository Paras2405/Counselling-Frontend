import React from 'react'
import p1 from '../p1.jpeg'
import p2 from '../p2.jpeg'
import p3 from '../p3.jpeg'

function About() {
  return (
    <div>
 <div id="carouselExampleCaptions" className="carousel slide people">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  style={{ filter: "contrast(80%) brightness(50%)" }}src={p1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block about">
        <h5>Riyanka Dey</h5>
        
      </div>
    </div>
    <div className="carousel-item">
      <img style={{ filter: "contrast(80%) brightness(50%)" }}src={p2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block">
      <h5>Priyanka Chaudhari</h5>
    
      </div>
    </div>
    <div className="carousel-item">
      <img style={{ filter: "contrast(80%) brightness(50%)" }}src={p3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block">
      <h5>Paras Kadam</h5>
     
     
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default About
