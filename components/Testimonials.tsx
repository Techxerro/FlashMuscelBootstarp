'use client';

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      verified: true,
      text: "Russo Pharma supplements have completely transformed my training regimen. The quality is absolutely unmatched!",
      author: "Rahul Sharma",
      role: "Professional Athlete"
    },
    {
      rating: 5,
      verified: true,
      text: "As a fitness professional, I only recommend products I trust. Russo Pharma delivers medical-grade quality.",
      author: "Priya Malhotra",
      role: "Fitness Coach"
    },
    {
      rating: 5,
      verified: true,
      text: "Within just 2 weeks, I noticed significant improvements in both strength and endurance. Highly recommended!",
      author: "Vikram Singh",
      role: "Bodybuilder"
    }
  ];

  return (
    <section id="reviews" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4">
            Trusted by<br/>
            <span className="text-bright-green">Thousands</span>
          </h2>
          
          <div className="d-inline-flex align-items-center gap-3 bg-bright-green px-4 py-2 rounded-pill">
            <div className="rating">
              ★★★★★
            </div>
            <div>
              <strong className="d-block" style={{ color: '#000' }}>4.9/5 - Out of 2500+</strong>
              <small style={{ color: '#000' }}>What people have to say about us?</small>
            </div>
          </div>
        </div>
        
        <div className="row g-4">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="col-md-4">
              <div className="testimonial-card">
                <div className="rating mb-2">
                  {'★'.repeat(testimonial.rating)}
                </div>
                
                {testimonial.verified && (
                  <span className="verified-badge">
                    ✓ Verified Review
                  </span>
                )}
                
                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <strong className="d-block">{testimonial.author}</strong>
                  <small className="text-muted">{testimonial.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
