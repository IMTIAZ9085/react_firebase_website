import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {
      const [Show, setShow] = useState(false);
      return (
           <>
           <section className="navbar-bg">
                 <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">

    <a className="navbar-brand" href="#">$My pay</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" 
     aria-expanded="false" 
     aria-label="Toggle navigation"
     onClick={()=>{setShow(!Show)}}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${Show?"show":""}`}>


      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item"> 
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="service">Services</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="contact">Contact</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="about">About</NavLink>
        </li>
      </ul>


      <form className="d-flex">
        <button className="btn btn-outline-success btn-style" type="submit">Login</button>
        <button className="btn btn-outline-success btn-style" type="submit">Sign Up</button>
      </form>

    </div>
  </div>
</nav>
</section>
           </>
      )
}

export default Navbar;
