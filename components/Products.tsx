'use client';

export default function Products() {
  return (
    <section id="products" className="py-5">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="display-5 fw-bold">
              Choose Your<br/>
              <span className="text-bright-green">Power Formula</span>
            </h2>
          </div>
          <div className="col-md-6">
            <p className="text-muted mb-0">
              Medical-grade supplements for<br/>
              those with ultimate goals
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {/* Vit2MAX Card */}
          <div className="col-md-6">
            <div className="product-select-card">
              <div className="text-center mb-4">
                {/* Product Image */}
                <div style={{
                  width: '200px',
                  height: '250px',
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.1), rgba(0,0,0,0.2))',
                  borderRadius: '12px',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: 'rgba(0,0,0,0.3)'
                }}>
                  VIT2MAX
                </div>
              </div>
              
              <h3 className="product-name">Vit2MAX</h3>
              
              <div className="price-wrapper">
                <span className="old-price">₹3,499</span>
                <span className="new-price">₹2,499</span>
              </div>
              
              <ul className="feature-list">
                <li>Amplifies strength & performance</li>
                <li>High-grade protein synthesis</li>
                <li>Increases oxygen levels</li>
              </ul>
              
              <button className="btn btn-white w-100">
                See Details
              </button>
            </div>
          </div>
          
          {/* Riboxin Card */}
          <div className="col-md-6">
            <div className="product-select-card gray-card">
              <div className="text-center mb-4">
                {/* Product Image */}
                <div style={{
                  width: '200px',
                  height: '250px',
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.1), rgba(0,0,0,0.2))',
                  borderRadius: '12px',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: 'rgba(0,0,0,0.3)'
                }}>
                  RIBOXIN
                </div>
              </div>
              
              <h3 className="product-name">RIBOXIN</h3>
              
              <div className="price-wrapper">
                <span className="old-price">₹3,699</span>
                <span className="new-price">₹2,499</span>
              </div>
              
              <ul className="feature-list">
                <li>Increases oxygen in blood</li>
                <li>Advanced endurance formula</li>
                <li>Medical-grade compound</li>
              </ul>
              
              <button className="btn btn-white w-100">
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
