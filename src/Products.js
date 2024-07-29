import React, { useState, useEffect } from 'react'
export default function App() {
  const [state, setstate] = useState([])
  const [search, setsearch] = useState("")
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      //.then(json=>console.log(json))
      .then(json => setstate(json))
  })
  const handler =(e)=>{
  setsearch(e.target.value)
  }
  return (
    <>
   <div className='container-fluid p-5 text-center e '>
    <h1> <span style={{color:'greenyellow'}}>Search here for products</span>   </h1>
    <br></br>
    <div>
    <input type='text' placeholder='search' value={search} onChange={handler} style={{textAlign:'center',backgroundColor:'brown',color:'white'}}/>
    </div>
    <br></br>
    <br></br>
      <div className='container-fluid bg-success '>
        <div className='row'>
          {state.filter(x=>x.title.includes(search)).map((item)=>
            <div className='col-md-4'>
              <div className="card" style={{height:500,marginBottom:30}}>
                <img src={item.image}  class="card-img-top"  alt="..." style={{height:350,width:350,marginTop:10}}/>
                <div className="card-body" style={{}}>
                  <h2 className="card-title">{item.title} </h2>
                  <p class="card-text">{item.price} </p>
                  {/* <a href="#" className="btn btn-primary">Go Some</a> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  )
}