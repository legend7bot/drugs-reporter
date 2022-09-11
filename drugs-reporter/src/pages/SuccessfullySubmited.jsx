import React from 'react'
import Navbar from '../components/Navbar'
function SuccessfullySubmited() {
  return (
    <>
    <Navbar/>
    <div className="card" style={{textAlign:"center"}}>
      <div>
        <i className="checkmark">✓</i>
      </div>
        <h1>Success</h1> 
        <p>I have received your Report;<br/> we'll stop this ASAP!</p>
      </div>
   </> 
  )
}

export default SuccessfullySubmited