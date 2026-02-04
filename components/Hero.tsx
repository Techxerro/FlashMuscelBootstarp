'use client';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="mb-3">
              <span className="badge-pill me-2">✓ 100% Safe</span>
              <span className="badge-pill">Strength Supplement</span>
            </div>
            
            <h1 className="hero-title">
              Unlock Your<br/>
              Peak Power
            </h1>
            
            <p className="hero-subtitle">
              Advanced endurance formulas engineered for athletes. 
              Medical-grade quality you can trust.
            </p>
            
            <div className="d-flex flex-wrap gap-3 mb-4">
              <button className="btn btn-bright-green">
                🛒 Order Now
              </button>
              <button className="btn btn-white">
                🔊 Check Results
              </button>
              <button className="btn btn-outline-dark">
                Learn More
              </button>
            </div>
            
            {/* Stats Row */}
            <div className="row mt-5 pt-4">
              <div className="col-4">
                <div className="stat-box">
                  <span className="stat-number">50K</span>
                  <div className="stat-label">Happy Customers</div>
                </div>
              </div>
              <div className="col-4">
                <div className="stat-box">
                  <span className="stat-number">98</span>
                  <div className="stat-label">Satisfaction</div>
                </div>
              </div>
              <div className="col-4">
                <div className="stat-box">
                  <span className="stat-number">24.7</span>
                  <div className="stat-label">Support</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Product Image */}
          <div className="col-lg-6">
            <div className="product-hero-card position-relative">
              <span className="price-tag">₹2K Off</span>
              
              <div className="text-center py-5">
                {/* Product Image Placeholder */}
                <div style={{
                  width: '280px',
                  height: '350px',
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.1), rgba(0,0,0,0.2))',
                  borderRadius: '16px',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: 'rgba(0,0,0,0.3)'
                }}>
                  VIT2MAX
                </div>
              </div>
              
              <div className="text-center">
                <button className="add-cart-btn">
                  ➕ Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
