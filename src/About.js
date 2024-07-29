import React from 'react'
import pic from './images/react-prj-1 - Copy.jpg'
export default function About() {
  return (
  <>
    <div className='container-fluid '>
   <div className='row text-center '>
  <div className='col-md-12 b'>
    <span style={{color:'yellow'}}>
    <h1>irfan</h1>
    <br></br>
    <h1>We are making Single page Applications</h1>
    <br></br>
    <h1>By using React-Project</h1>
    </span>
   
    <br></br>
    <img src={pic} alt=''/>
    <br></br>
    <br></br>
    
    
  </div>
  </div>
  </div>
  <div className='container-fluid text-center bg-success'>
        <h1>Irfan Ali @ Footer</h1>
      </div>
  </>
  )
}
