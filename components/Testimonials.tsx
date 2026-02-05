'use client';
import Image from 'next/image';
import verifyicon from './Assets/verifygreen.png';

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
    <section id="reviews" className="py-2 py-sm-5">
      <div className="container">
        <div className="row align-items-end mb-4">
          <div className=" col-sm-6 col-12">
            <h2 className="title">
              Trusted by<br/>
              Thousands
            </h2>
          </div>
          <div className="col-lg-5 col-sm-6 col-12">
            <div className="bg-bright-green px-4 py-3 rounded-pill mb-2" style={{width:'fit-content'}}>
              <div className="rating">
                ★★★★★
              </div>
              <div className="d-flex gap-2 align-items-end">
                <strong className="d-block text-xs" style={{ color: '#000', lineHeight:'25px'}}>4.9/5</strong> from 2,500+ reviews
              </div>
            </div>
            <p className="text-xs">Real results from real athletes</p> 
          </div>
        </div>
        
        <div className="row g-4">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="col-lg-4 col-sm-6">
              <div className="testimonial-card">
                <div className='d-flex align-items-center justify-content-between mb-4'>

                  <div className="rating mb-2">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  
                  {testimonial.verified && (
                    <span className="verified-badge d-flex gap-2 align-items-center">
                      <Image src={verifyicon} alt=""/> Verified Review
                    </span>
                  )}
                
                </div>
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
