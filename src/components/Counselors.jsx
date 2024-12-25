import React from 'react'
import c1 from '../c1.jpg'
import c2 from '../c2.jpg'
import c3 from '../c3.jpg'
function Counselors() {
  return (
    <div>
      <h2 className='mt-5 mb-5 text-center'>Our Counselors</h2>
     
<div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{ filter: "contrast(80%) brightness(50%)"}} src={c1} className="d-block w-100" alt="..."/>
      <p style={{marginTop:"180px",}} className='text-center text-white'>Counselor 1</p>
    </div>
    <div className="carousel-item">
      <img style={{ filter: "contrast(80%) brightness(50%)"}} src={c2} className="d-block w-100" alt="..."/>
      <p style={{marginTop:"180px",}} className='text-center text-white'>Counselor 2</p>
    </div>
    <div className="carousel-item">
      <img style={{ filter: "contrast(80%) brightness(50%)"}} src={c3} className="d-block w-100" alt="..."/>
      <p style={{marginTop:"180px",}} className='text-center text-white'>Counselor 3</p>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<h2 className='text-center mt-5 mb-5'>Our Team</h2>

</div>

  )
}

export default Counselors
