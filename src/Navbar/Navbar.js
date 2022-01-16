import React,{useState} from 'react';
import "./Navbar.css";


const Navbar = () => {
      const [Show, setShow] = useState(false);
      return (
           <>
           <section className="navbar-bg">
                 <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">

    <a class="navbar-brand" href="#">$My pay</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" 
     aria-expanded="false" 
     aria-label="Toggle navigation"
     onClick={()=>{setShow(!Show)}}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${Show?"show":""}`}>


      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>


      <form class="d-flex">
        <button class="btn btn-outline-success btn-style" type="submit">Login</button>
        <button class="btn btn-outline-success btn-style" type="submit">Sign Up</button>
      </form>

    </div>
  </div>
</nav>
</section>
           </>
      )
}

export default Navbar;
