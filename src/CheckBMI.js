import React from 'react'
import './Style.css'
export default function CheckBMI() {
  function demo() {
    let weight = document.getElementById("wt").value
    let height = document.getElementById("ht").value
    let h1 = height * height
    let bmi = weight / h1
    document.getElementById("h1").innerHTML = "BMI value = " + bmi
    if (bmi <= 18.5) {
      document.getElementById("txt").innerHTML = "underweight"
      document.getElementById("txt").style.color = "blue"
    }
    else if (bmi >= 18.5 && bmi <= 25) {
      document.getElementById("txt").innerHTML = "Normal"
      document.getElementById("txt").style.color = "yellow"
    }
    else if (bmi >= 25 && bmi <= 30) {
      document.getElementById("txt").innerHTML = "Overweight"
      document.getElementById("txt").style.color = "red"
    }
    else {
      document.getElementById("txt").innerHTML = "Obesity"
      document.getElementById("txt").style.color = "green"
    }
  }
  return (
    <>
    <body className='ali'>
      <div className="container-fluid bg-color='red'">
        <div className="row p-5">
          <div className="col-md-2"></div>
          <div className=" card p-2 col-md-4" style={{opacity:'80%',backgroundColor:'peachpuff'}}>
            <h4>Weight:</h4>
            <input type="text" placeholder="Enter weight in Kg" id="wt" required /> <br /><h4>Height:</h4>
            <input type="text" placeholder="Enter height in Mtrs" id="ht" required /> <br />
            <button className="text-light bg-dark p-1" onClick={demo}> <b>get value</b></button>
            <h2 id="h1" style={{color:'black'}}></h2>
            <h1 id="txt"  style={{color:'black'}}></h1>
          </div >
        </div >
      </div >
      <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      </body>
      <div className='container-fluid text-center bg-success'>
        <h1>Irfan Ali @ Footer</h1>
      </div>
    </>
  )
}
