'use client';
import { useState } from 'react';
import Image from 'next/image';
import product1 from './Assets/product1.png';
import product2 from './Assets/product2.png';

interface Product {
  id: number;
  name: string;
  image: any;
  description: string;
  oldPrice: number;
  newPrice: number;
  features: string[];
  detailedFeatures: string[];
  ingredients?: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Vo2MAX',
    image: product1,
    description: 'Complete Vitamin & Mineral Formula',
    oldPrice: 3699,
    newPrice: 2499,
    features: [
      'Amplifies strength & performance',
      'High-grade protein synthesis',
      'Increases oxygen levels'
    ],
    detailedFeatures: [
      'Amplifies strength & performance by 40%',
      'High-grade protein synthesis for muscle recovery',
      'Increases oxygen levels in blood',
      'Boosts energy and stamina',
      'Supports immune system',
      'Enhances mental clarity'
    ],
    ingredients: ['Vitamin B12', 'Iron', 'Magnesium', 'Zinc', 'Vitamin D3', 'Calcium']
  },
  {
    id: 2,
    name: 'RIBOXIN',
    image: product2,
    description: 'Oxygen Amplifier & Strength Booster',
    oldPrice: 3699,
    newPrice: 2499,
    features: [
      'Increases oxygen in blood and strength',
      'Advanced endurance formula',
      'Medical-grade compound'
    ],
    detailedFeatures: [
      'Increases oxygen in blood and strength by 50%',
      'Advanced endurance formula for athletes',
      'Medical-grade compound with proven results',
      'Enhances cardiovascular performance',
      'Reduces muscle fatigue',
      'Improves recovery time'
    ],
    ingredients: ['Inosine', 'CoQ10', 'L-Carnitine', 'Vitamin E', 'Selenium', 'Copper']
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState<'details' | 'order' | 'payment' | 'success'>('details');
  const [quantity, setQuantity] = useState(1);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
    setStep('details');
    setQuantity(1);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setStep('details');
    setQuantity(1);
    setOrderDetails({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: ''
    });
  };

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setStep('success');
    }, 1500);
  };

  const getTotalPrice = () => {
    return selectedProduct ? selectedProduct.newPrice * quantity : 0;
  };

  return (
    <>
      <section id="products" className="py-2 py-sm-5">
        <div className="container">
          <div className="row align-items-end mb-lg-5 mb-3">
            <div className="col-xl-6 col-lg-6 col-12">
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
            {products.map((product, index) => (
              <div key={product.id} className="col-md-6">
                <div className={`product-select-card ${index === 1 ? 'gray-card' : ''}`}>
                  <div className="d-flex align-items-center">                
                    <Image src={product.image} alt={product.name} className='productImg' />
                  </div>
                  <div>              
                    <h3 className="product-name">{product.name}</h3>
                    <p>{product.description}</p>
                    
                    <div className="price-wrapper">
                      <span className="old-price">₹{product.oldPrice.toLocaleString()}</span>
                      <span className="new-price">₹{product.newPrice.toLocaleString()}</span>
                    </div>
                    
                    <ul className="feature-list">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    
                    <button 
                      className={`btn btn-white ${index === 1 ? 'w-50' : ''}`}
                      onClick={() => openModal(product)}
                    >
                      See Details
                    </button>    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedProduct && (
        <div className="product-modal-overlay" onClick={closeModal}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            {step === 'details' && (
              <div className="modal-content">
                <div className="row">
                  <div className="col-md-5">
                    <div className="modal-product-image">
                      <Image src={selectedProduct.image} alt={selectedProduct.name} />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="mb-2">
                      <span className="badge-pill">Premium Product</span>
                    </div>
                    <h2 className="modal-product-name">{selectedProduct.name}</h2>
                    <p className="modal-product-description">{selectedProduct.description}</p>
                    
                    <div className="price-wrapper mb-4">
                      <span className="old-price">₹{selectedProduct.oldPrice.toLocaleString()}</span>
                      <span className="new-price">₹{selectedProduct.newPrice.toLocaleString()}</span>
                      <span className="discount-badge">Save ₹{(selectedProduct.oldPrice - selectedProduct.newPrice).toLocaleString()}</span>
                    </div>

                    <div className="quantity-selector mb-4">
                      <label className="quantity-label">Quantity:</label>
                      <div className="quantity-controls">
                        <button 
                          className="qty-btn"
                          onClick={() => handleQuantityChange(quantity - 1)}
                          disabled={quantity <= 1}
                        >
                          −
                        </button>
                        <input 
                          type="number" 
                          value={quantity} 
                          onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                          min="1"
                          max="10"
                          className="qty-input"
                        />
                        <button 
                          className="qty-btn"
                          onClick={() => handleQuantityChange(quantity + 1)}
                          disabled={quantity >= 10}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="total-price mb-4">
                      <span className="total-label">Total:</span>
                      <span className="total-amount">₹{getTotalPrice().toLocaleString()}</span>
                    </div>

                    <h4 className="section-title">Key Benefits</h4>
                    <ul className="detailed-feature-list">
                      {selectedProduct.detailedFeatures.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>

                    {selectedProduct.ingredients && (
                      <>
                        <h4 className="section-title mt-4">Key Ingredients</h4>
                        <div className="ingredients-list">
                          {selectedProduct.ingredients.map((ingredient, idx) => (
                            <span key={idx} className="ingredient-tag">{ingredient}</span>
                          ))}
                        </div>
                      </>
                    )}

                    <button 
                      className="btn btn-green btn-block mt-4"
                      onClick={() => setStep('order')}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 'order' && (
              <div className="modal-content">
                <h2 className="modal-title mb-4">Order Details</h2>
                
                <div className="order-summary mb-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="summary-product-image">
                        <Image src={selectedProduct.image} alt={selectedProduct.name} width={60} height={60} />
                      </div>
                      <div className="ms-3">
                        <h5 className="mb-0">{selectedProduct.name}</h5>
                        <p className="mb-0 text-muted">Quantity: {quantity}</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <h5 className="mb-0">₹{getTotalPrice().toLocaleString()}</h5>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleOrderSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="name"
                        value={orderDetails.name}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email *</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        name="email"
                        value={orderDetails.email}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label className="form-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        name="phone"
                        value={orderDetails.phone}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label className="form-label">Address *</label>
                      <textarea 
                        className="form-control" 
                        rows={3}
                        name="address"
                        value={orderDetails.address}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">City *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="city"
                        value={orderDetails.city}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label className="form-label">State *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="state"
                        value={orderDetails.state}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label className="form-label">Pincode *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="pincode"
                        value={orderDetails.pincode}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="d-flex gap-3 mt-4">
                    <button 
                      type="button"
                      className="btn btn-white flex-grow-1"
                      onClick={() => setStep('details')}
                    >
                      Back
                    </button>
                    <button 
                      type="submit"
                      className="btn btn-green flex-grow-1"
                    >
                      Proceed to Payment
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === 'payment' && (
              <div className="modal-content text-center">
                <h2 className="modal-title mb-4">Payment</h2>
                
                <div className="order-summary mb-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="summary-product-image">
                        <Image src={selectedProduct.image} alt={selectedProduct.name} width={60} height={60} />
                      </div>
                      <div className="ms-3 text-start">
                        <h5 className="mb-0">{selectedProduct.name}</h5>
                        <p className="mb-0 text-muted">Quantity: {quantity}</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <h5 className="mb-0">₹{getTotalPrice().toLocaleString()}</h5>
                    </div>
                  </div>
                </div>

                <div className="payment-info mb-4">
                  <p className="text-muted mb-2">Delivering to:</p>
                  <p className="mb-0"><strong>{orderDetails.name}</strong></p>
                  <p className="mb-0">{orderDetails.address}</p>
                  <p className="mb-0">{orderDetails.city}, {orderDetails.state} - {orderDetails.pincode}</p>
                  <p className="mb-0">{orderDetails.phone}</p>
                </div>

                <div className="payment-methods mb-4">
                  <h5 className="mb-3">Select Payment Method</h5>
                  <div className="payment-option">
                    <input type="radio" id="card" name="payment" defaultChecked />
                    <label htmlFor="card">Credit/Debit Card</label>
                  </div>
                  <div className="payment-option">
                    <input type="radio" id="upi" name="payment" />
                    <label htmlFor="upi">UPI</label>
                  </div>
                  <div className="payment-option">
                    <input type="radio" id="cod" name="payment" />
                    <label htmlFor="cod">Cash on Delivery</label>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <button 
                    className="btn btn-white flex-grow-1"
                    onClick={() => setStep('order')}
                  >
                    Back
                  </button>
                  <button 
                    className="btn btn-green flex-grow-1"
                    onClick={handlePayment}
                  >
                    Complete Payment
                  </button>
                </div>
              </div>
            )}

            {step === 'success' && (
              <div className="modal-content text-center">
                <div className="success-icon mb-4">✓</div>
                <h2 className="modal-title mb-3">Order Placed Successfully!</h2>
                <p className="text-muted mb-4">
                  Thank you for your order. We'll send you a confirmation email shortly.
                </p>
                
                <div className="order-confirmation mb-4">
                  <div className="confirmation-row">
                    <span className="label">Order ID:</span>
                    <span className="value">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                  </div>
                  <div className="confirmation-row">
                    <span className="label">Product:</span>
                    <span className="value">{selectedProduct.name} × {quantity}</span>
                  </div>
                  <div className="confirmation-row">
                    <span className="label">Total Amount:</span>
                    <span className="value">₹{getTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="confirmation-row">
                    <span className="label">Delivery Address:</span>
                    <span className="value">{orderDetails.address}, {orderDetails.city}</span>
                  </div>
                </div>

                <button 
                  className="btn btn-green"
                  onClick={closeModal}
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .product-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          overflow-y: auto;
        }

        .product-modal {
          background: white;
          border-radius: 16px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          padding: 40px;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 32px;
          cursor: pointer;
          color: #666;
          line-height: 1;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s;
        }

        .modal-close:hover {
          background: #f0f0f0;
          color: #000;
        }

        .modal-product-image {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          margin-bottom: 20px;
        }

        .modal-product-image img {
          max-width: 100%;
          height: auto;
        }

        .modal-product-name {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .modal-product-description {
          color: #666;
          font-size: 16px;
          margin-bottom: 20px;
        }

        .discount-badge {
          background: #10b981;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          margin-left: 10px;
        }

        .quantity-selector {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .quantity-label {
          font-weight: 600;
          font-size: 16px;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          padding: 5px;
        }

        .qty-btn {
          background: #f3f4f6;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 6px;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .qty-btn:hover:not(:disabled) {
          background: #e5e7eb;
        }

        .qty-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .qty-input {
          border: none;
          width: 50px;
          text-align: center;
          font-size: 16px;
          font-weight: 600;
          outline: none;
        }

        .qty-input::-webkit-inner-spin-button,
        .qty-input::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .total-price {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 20px;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .total-label {
          font-size: 18px;
          font-weight: 600;
        }

        .total-amount {
          font-size: 24px;
          font-weight: 700;
          color: #10b981;
        }

        .section-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 15px;
          margin-top: 20px;
        }

        .detailed-feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .detailed-feature-list li {
          padding: 10px 0;
          padding-left: 30px;
          position: relative;
          border-bottom: 1px solid #f0f0f0;
        }

        .detailed-feature-list li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: 700;
        }

        .detailed-feature-list li:last-child {
          border-bottom: none;
        }

        .ingredients-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .ingredient-tag {
          background: #f3f4f6;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          color: #374151;
        }

        .btn-green {
          background: #10b981;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-green:hover {
          background: #059669;
          transform: translateY(-2px);
        }

        .btn-block {
          width: 100%;
        }

        .modal-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .order-summary {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
        }

        .summary-product-image {
          width: 60px;
          height: 60px;
          background: white;
          border-radius: 8px;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-label {
          font-weight: 600;
          margin-bottom: 8px;
          display: block;
          color: #374151;
        }

        .form-control {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 15px;
          transition: all 0.2s;
        }

        .form-control:focus {
          outline: none;
          border-color: #10b981;
        }

        .payment-info {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          text-align: left;
        }

        .payment-methods {
          text-align: left;
        }

        .payment-option {
          padding: 15px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .payment-option:hover {
          border-color: #10b981;
          background: #f0fdf4;
        }

        .payment-option input[type="radio"] {
          margin-right: 10px;
        }

        .payment-option label {
          cursor: pointer;
          margin: 0;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: #10b981;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          margin: 0 auto;
          font-weight: 700;
        }

        .order-confirmation {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          text-align: left;
        }

        .confirmation-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .confirmation-row:last-child {
          border-bottom: none;
        }

        .confirmation-row .label {
          color: #6b7280;
          font-weight: 500;
        }

        .confirmation-row .value {
          font-weight: 600;
          color: #111827;
        }

        @media (max-width: 768px) {
          .product-modal {
            padding: 20px;
            max-height: 95vh;
          }

          .modal-product-name {
            font-size: 24px;
          }

          .modal-title {
            font-size: 22px;
          }

          .btn-green {
            padding: 12px 20px;
            font-size: 15px;
          }
        }
      `}</style>
    </>
  );
}