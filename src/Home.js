import React from 'react'
import pic2 from './images/react.img-2.png'
import pic3 from './images/react.img-3.png'
import pic5 from './images/react.img-4.png'
import pic1 from './images/home.pic.jpg'
export default function Home() {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pic2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pic3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pic5} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



      <div className='container-fluid  '>
        <div className='row a'>
          <div className='col-md-8 p-4 '>
            <h1 style={{ fontFamily: 'sans-serif', color: 'green' }}>HI &#128075; ,</h1>
            <h1>I'm <span style={{ color: 'pink' }}><b>Irfan Ali,</b> </span></h1>
            <br></br>
            <h1 className="PT-3"> <b style={{ color: 'yellowgreen' }}> FRONT-END DEVELOPER</b> </h1>
            <br></br>
            <p className='pt-1' style={{ fontFamily: 'inherit' }}><span style={{ color: 'black' }}> The year 2024 has been <b>a milestone for global development as governments
              have adopted</b> the 2030 Agenda for Sustainable Development, along with the
              Sustainable Development Goals (SDGs). The bold agenda sets out a globalframework to end extreme poverty,
              fight inequality and injustice, and fix climate change until 2030.</span></p>
            <br />
            <br />
          </div>
          <div className='col-md-4'>
            <img src={pic1} className='img-fluid' width={"400px"} height={"400px"} id='aa'  alt='' />
          </div>
        </div>
      </div>
      <div className='container-fluid text-center bg-primary'>
        <h1>Irfan Ali @ Footer</h1>
      </div>
    </>
  )
}