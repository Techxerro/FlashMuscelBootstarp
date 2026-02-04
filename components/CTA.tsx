'use client';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="text-center">
          <h2 className="display-4 fw-bold mb-4">
            Ready to Transform<br/>
            Your Performance?
          </h2>
          
          <p className="lead text-muted mb-5" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
            Join thousands of athletes who trust Russo Pharma for their fitness journey
          </p>
          
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            <div className="d-flex align-items-center gap-2 px-4 py-2 bg-white rounded-pill border">
              <span>✓</span>
              <span>30-day money-back guarantee</span>
            </div>
            <div className="d-flex align-items-center gap-2 px-4 py-2 bg-white rounded-pill border">
              <span>✓</span>
              <span>Free shipping over ₹999</span>
            </div>
            <div className="d-flex align-items-center gap-2 px-4 py-2 bg-white rounded-pill border">
              <span>✓</span>
              <span>24x7 customer support</span>
            </div>
          </div>
          
          <button className="cta-big-button mb-5">
            Save 30% Today!<br/>
            <small style={{ fontSize: '1rem', fontWeight: '600' }}>Limited time offer - Stock ends 5/06</small>
          </button>
          
          <div className="mt-4">
            <button className="btn btn-outline-dark">
              🛒 Order Now - Fast Delivery
            </button>
          </div>
          
          {/* Stats */}
          <div className="row mt-5 pt-5">
            <div className="col-4">
              <div className="stat-box">
                <span className="stat-number">50K+</span>
                <div className="stat-label">Happy Customers</div>
              </div>
            </div>
            <div className="col-4">
              <div className="stat-box">
                <span className="stat-number">98%</span>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
            <div className="col-4">
              <div className="stat-box">
                <span className="stat-number">24x7</span>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
