'use client';

export default function FAQ() {
  const faqs = [
    {
      question: "How long does one bottle last?",
      answer: "Each bottle contains 60 capsules, which is a 30-day supply when taken as directed (2 capsules daily with meals)."
    },
    {
      question: "Are these supplements safe?",
      answer: "Yes, all Russo Pharma products are medical-grade and manufactured in certified facilities following strict pharmaceutical standards."
    },
    {
      question: "When will I see results?",
      answer: "Most users report noticeable improvements in energy and performance within 1-2 weeks of consistent use."
    },
    {
      question: "Can I take both products together?",
      answer: "Yes, Vit2MAX and Riboxin complement each other well. However, we recommend consulting with a healthcare professional first."
    }
  ];

  return (
    <section id="faq" className="py-5 bg-light-section">
      <div className="container">
        <h2 className="display-5 fw-bold text-center mb-5">
          Frequently Asked<br/>
          Questions
        </h2>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, idx) => (
                <div key={idx} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${idx !== 0 ? 'collapsed' : ''}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq${idx}`}
                      aria-expanded={idx === 0}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`faq${idx}`}
                    className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-5">
              <p className="mb-3">Still have questions?</p>
              <button className="btn btn-bright-green">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
