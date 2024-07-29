import React from 'react'
import './Style.css'
import pic from './images/react-prj.png'
import { Link, } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:'gray'}}>
          <div className="container-fluid">
            <Link to="/Home" className="navbar-brand" ><img src={pic} alt='' width={100} height={80}/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/Home" className="nav-link active p-5 " aria-current="page" id='k' >Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/About Us" className="nav-link active p-5" id='l'>About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contacts" className="nav-link active p-5" id='m' >Contacts</Link>
                </li>
                <li className="nav-item">
                  <Link to="/CheckBMI" className="nav-link active p-5 " id='n' >CheckBMI</Link>
                </li>
                <li className="nav-item dropdown">
                  <li className="nav-link dropdown-toggle p-5" id='o' href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Applications
                  </li>
                  <ul className="dropdown-menu">
                    <li><Link to="/Food" className="dropdown-item" >Food</Link></li>
                    <li><Link to="/Weather" className="dropdown-item" >Weather</Link></li>
                    <li><Link to="/Products" className="dropdown-item" >Products</Link></li>
                    <li><Link to="/Movies" className="dropdown-item" >Movies</Link></li>
                    <li><Link to="/News" className="dropdown-item" >News</Link></li>
                    <li><Link to="/Login" className="dropdown-item" >Login</Link></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      
    </>
  )
}
