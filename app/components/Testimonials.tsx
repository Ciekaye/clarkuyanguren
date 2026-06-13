import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="proof">
      <div className="testimonials-inner">
        <ScrollReveal>
          <div className="testimonials-header">
            <div className="testimonials-label">What clients say.</div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★ ★ ★ ★ ★</div>
              <p>
                &ldquo;We went from a DIY brand to looking like a company
                people actually trust. Our audience noticed the difference
                immediately and so did our sales.&rdquo;
              </p>
              <div className="testimonial-author">Sarah M.</div>
              <div className="testimonial-role">
                E-Commerce Brand, Australia
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★ ★ ★ ★ ★</div>
              <p>
                &ldquo;Our social feed finally looks like one brand, not a
                random collection of posts. Engagement went up within two
                weeks and we stopped stressing about content.&rdquo;
              </p>
              <div className="testimonial-author">Thomas K.</div>
              <div className="testimonial-role">
                Lifestyle Brand, Germany
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★ ★ ★ ★ ★</div>
              <p>
                &ldquo;I sent over our brand guidelines and Clark came back
                with designs 10x better than what we had. Fast turnaround,
                zero hand-holding needed. Will work with again.&rdquo;
              </p>
              <div className="testimonial-author">James L.</div>
              <div className="testimonial-role">Tech Startup, USA</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
