'use client';
import Image from "next/image";
import truckicon from './Assets/truck.png';
import returnicon from './Assets/return.png';
import supporticon from './Assets/support.png';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="text-center">
          <h2 className="title mb-3">
            Ready to Transform<br/>
            Your Performance?
          </h2>
          
          <p className="lead mb-md-3 mb-3 text-black" style={{ margin: '0 auto' }}>
            Join thousands of athletes who trust Russo Pharma for their fitness journey
          </p>
          
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            <div className="d-flex align-items-center gap-2 px-4 py-2 rounded-pill">
              <span><Image src={returnicon} alt="" /></span>
              <span>30-day money-back guarantee</span>
            </div>
            <div className="d-flex align-items-center gap-2 px-4 py-2 rounded-pill">
              <span><Image src={truckicon} alt="" /></span>
              <span>Free shipping over ₹999</span>
            </div>
            <div className="d-flex align-items-center gap-2 px-4 py-2 rounded-pill">
              <span><Image src={supporticon} alt="" /></span>
              <span>24x7 customer support</span>
            </div>
          </div>
          
          <button className="title cta-big-button lh-1">
            Save 30% Today!
            <small style={{ fontSize: '1rem', fontWeight: '600' }}>Limited time offer - Stock ends 5/06</small>
          </button>
          
          <div className="mt-4">
            <span className="badge-pill">Order Now - Fast Delivery</span>
          </div>
          
          {/* Stats */}
          <div className="row justify-content-center mt-5 pt-5">
            <div className="col-lg-8">
                <div className="row">
                  <div className="col-4">
                    <div className="stat-box text-center">
                      <span className="stat-number">50K+</span>
                      <div className="stat-label">Happy Customers</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-box text-center">
                      <span className="stat-number">98%</span>
                      <div className="stat-label">Satisfaction</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-box text-center">
                      <span className="stat-number">24x7</span>
                      <div className="stat-label">Support</div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
