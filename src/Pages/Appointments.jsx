import React from 'react'
import c1 from '../c1.jpg'
import c2 from '../c2.jpg'
import { Link } from 'react-router-dom'

const Appointments = () => {
  return (
    <>
     <h2 className='text-center mt-5'>You are one step near for Counseling!!</h2>
    <div className='PageApp'>
       
      <div className="card mx-5 mt-5" style={{width: "18rem"}}>
  <img src={c1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Counselor 1</h5>

  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Name</li>
    <li className="list-group-item">Email</li>
    <li className="list-group-item">Qualification</li>
    <li className="list-group-item">Counselling Timings:</li>
  </ul>
  <div className="card-body">
    <Link to="/OurCounselors" role="button" className="btn btn-primary mx-1">Profile</Link>
    <Link to="/chat" role="button" className="btn btn-danger mx-1">Book Appointment</Link>
  </div>
</div>

<div className="card mx-5 mt-5" style={{width: "18rem"}}>
  <img src={c2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Counselor 2</h5>

  </div>
  <ul className="list-group list-group-flush">
  <li className="list-group-item">Name</li>
    <li className="list-group-item">Email</li>
    <li className="list-group-item">Qualification</li>
    <li className="list-group-item">Counselling Timings:</li>
  </ul>
  <div className="card-body">
  <Link to="/OurCounselors" role="button" className="btn btn-primary mx-1">Profile</Link>
  <Link to="/chat" role="button" className="btn btn-danger mx-1">Book Appointment</Link>
  </div>
</div>
    </div>
    </>

  )
}

export default Appointments
