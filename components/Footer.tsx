'use client';
import Image from "next/image";
import logo from './Assets/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Brand Column */}
          <div className="col-md-3 mb-4">
            <div className="d-flex align-items-center mb-3">
              <Image src={logo} alt="" />
            </div>
            <p className="small text-muted">
              Medical-grade supplements for peak performance and optimal health.
            </p>
          </div>
          
          {/* Products Column */}
          <div className="col-md-2 mb-4">
            <h6 className="footer-title">Products</h6>
            <a href="#" className="footer-link">Vit2MAX</a>
            <a href="#" className="footer-link">Riboxin</a>
            <a href="#" className="footer-link">All Products</a>
            <a href="#" className="footer-link">Bundles</a>
          </div>
          
          {/* Company Column */}
          <div className="col-md-2 mb-4">
            <h6 className="footer-title">Company</h6>
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Our Story</a>
            <a href="#" className="footer-link">Blog</a>
            <a href="#" className="footer-link">Contact</a>
          </div>
          
          {/* Support Column */}
          <div className="col-md-2 mb-4">
            <h6 className="footer-title">Support</h6>
            <a href="#" className="footer-link">FAQ</a>
            <a href="#" className="footer-link">Shipping</a>
            <a href="#" className="footer-link">Returns</a>
            <a href="#" className="footer-link">Track Order</a>
          </div>
          
          {/* Legal Column */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">Legal</h6>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Refund Policy</a>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="text-center">
          <p className="small text-muted mb-2">
            © 2026 Russo Pharma. All rights reserved. Medical-grade supplements.
          </p>
          <p className="small text-muted">
            ✓ FDA Approved Facility • ✓ GMP Certified • ✓ Lab Tested • ✓ 100% Authentic
          </p>
        </div>
      </div>
    </footer>
  );
}
