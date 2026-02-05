'use client';
import Image from 'next/image';
import product1 from './Assets/product1.png';
import product2 from './Assets/product2.png';

export default function Products() {
  return (
    <section id="products" className="py-2 py-sm-5">
      <div className="container">
        <div className="row align-items-end mb-lg-5 mb-3">
          <div className="col-xl-5 col-lg-6 col-12">
            <h2 className="title mb-4 mb-sm-2">
              Choose Your<br/>
              <span className="text-bright-green">Power Formula</span>
            </h2>
          </div>
          <div className="col-md-6 col-12">
            <div className="mb-3"> 
              <span className="badge-pill">Premium Products</span>
            </div>
            <p className="text-black text-xs">
              Medical-grade supplements for<br/>
              those with ultimate goals
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {/* Vit2MAX Card */}
          <div className="col-md-6">
            <div className="product-select-card">
              <div className="d-flex align-items-center">                
                <Image src={product1} alt="" className='productImg' />
              </div>
              <div>              
                <h3 className="product-name">Vit2MAX</h3>
                <p>Complete Vitamin & Mineral Formula</p>
                
                <div className="price-wrapper">
                  <span className="old-price">₹3,699</span>
                  <span className="new-price">₹2,499</span>
                </div>
                
                <ul className="feature-list">
                  <li>Amplifies strength & performance</li>
                  <li>High-grade protein synthesis</li>
                  <li>Increases oxygen levels</li>
                </ul>
                
                <button className="btn btn-white w-50">
                  See Details
                </button>    
              </div>
            </div>
          </div>
          
          {/* Riboxin Card */}
          <div className="col-md-6">
            <div className="product-select-card gray-card">
              <div className="d-flex align-items-center">                
                <Image src={product2} alt="" className='productImg' />
              </div>
              <div>              
                <h3 className="product-name">RIBOXIN</h3>
                <p>Oxygen Amplifier & Strength Booster</p>
                
                <div className="price-wrapper">
                  <span className="old-price">₹3,699</span>
                  <span className="new-price">₹2,499</span>
                </div>
                
                <ul className="feature-list">
                  <li>Increases oxygen in blood and strength</li>
                  <li>Advanced endurance formula</li>
                  <li>Medical-grade compound</li>
                </ul>
                
                <button className="btn btn-white w-50">
                  See Details
                </button>    
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
