import React from 'react'

function Alert({alert}) {
  return (
      alert && alert.message && (
      <div style={{position:"sticky",top:0,zIndex:2}}>
        <div  className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
         {alert.message}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    )
   
  )
}

export default Alert

