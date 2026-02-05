'use client';
import Image from "next/image";
import logo from './Assets/logo.png'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <div>
            <Image src={logo} alt="" />
          </div>
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#benefits">Benefits</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviews">Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">FAQ</a>
            </li>
          </ul>
          
          <button className="btn btn-bright-green">
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
}
