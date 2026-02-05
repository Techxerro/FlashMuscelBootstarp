'use client';
import Image from 'next/image';
import product1 from './Assets/product1.png';
import shield from './Assets/shield.png';
import verify from './Assets/verify.png';
import bolt from './Assets/bolt.png';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="mb-3"> 
              <span className="badge-pill">Medical-Grade Performance Supplements</span>
            </div>
            
            <h1 className="hero-title">
              Unlock Your<br/>
              Peak Power 
            </h1>
            
            <p className="hero-subtitle">
              Advanced endurance formulas engineered for athletes. 
              Medical-grade quality you can trust.
            </p>
            
            <div className="d-flex flex-wrap gap-2 mb-4">
              <button className="btn btn-bright-green d-flex align-items-center gap-1">
                <Image src={shield} alt=""/>Medical Grade
              </button>
              <button className="btn btn-bright-green d-flex align-items-center gap-1">
                <Image src={verify} alt=""/>Certified Quality
              </button>
              <button className="btn btn-bright-green d-flex align-items-center gap-1">
                <Image src={bolt} alt=""/>Fast Results
              </button>
            </div>
            
            {/* Stats Row */}
            <div className="row mt-5 pt-4">
              <div className="col-4">
                <div className="stat-box">
                  <span className="stat-number">50K<span style={{color:'#A5D760'}}>+</span></span>
                  <div className="stat-label">Happy Customers</div>
                </div>
              </div>
              <div className="col-4">
                <div className="stat-box">
                  <span className="stat-number">98<span style={{color:'#A5D760'}}>%</span></span>
                  <div className="stat-label">Satisfaction</div>
                </div>
              </div>
              <div className="col-4">
                <div className="stat-box">
                  <span className="stat-number">24<span style={{color:'#A5D760'}}>x</span>7</span>
                  <div className="stat-label">Support</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Product Image */}
          <div className="col-lg-6 d-flex justify-content-end ">
            <div className="product-hero-card position-relative ">
              <span className="price-tag"> 30% Off</span>
              <span className="position-absolute btn-bright-green d-flex align-items-center gap-1" style={{bottom:'25px', zIndex:'9', left:'25px', padding:'10px 15px'}}> <Image src={bolt} alt=""/>Fast Action</span>
              <div className="text-center py-5">
                {/* Product Image Placeholder */}
                <Image src={product1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
