'use client';

export default function Benefits() {
  const benefits = [
    {
      icon: '🔬',
      title: 'Medical-Grade Quality',
      desc: 'All products manufactured in certified facilities',
      green: false
    },
    {
      icon: '⚡',
      title: 'Fast-Acting Formula',
      desc: 'Advanced absorption technology for rapid results',
      green: false
    },
    {
      icon: '✓',
      title: 'Certified & Tested',
      desc: 'Third-party lab tested for purity and potency',
      green: false
    },
    {
      icon: '🌿',
      title: 'Safe & Natural',
      desc: 'Premium natural ingredients with no harmful additives',
      green: false
    },
    {
      icon: '📦',
      title: '30 Day Supply',
      desc: '60 capsules per bottle for optimal results',
      green: true
    },
    {
      icon: '♻️',
      title: '100% Sustainable',
      desc: 'Eco-friendly packaging and sustainable practices',
      green: false
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '98%', label: 'Satisfaction' },
    { number: '15+', label: 'Years Experience' },
    { number: '24x7', label: 'Support' }
  ];

  return (
    <section id="benefits" className="py-5 bg-light-section">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="display-5 fw-bold">
              Why Choose<br/>
              <span className="text-bright-green">Russo Pharma?</span>
            </h2>
          </div>
          <div className="col-md-6">
            <p className="text-muted mb-0">
              Medical-grade quality meets<br/>
              advanced performance
            </p>
          </div>
        </div>
        
        {/* Benefits Grid */}
        <div className="row g-4 mb-5">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="col-md-4 col-lg-2">
              <div className={`benefit-card ${benefit.green ? 'green-card' : ''}`}>
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h5 className="benefit-title">{benefit.title}</h5>
                <p className="benefit-desc mb-0">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Cards */}
        <div className="row g-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="col-6 col-md-3">
              <div className="stat-card">
                <span className="stat-card-number">{stat.number}</span>
                <div className="stat-card-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
