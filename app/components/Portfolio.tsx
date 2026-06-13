import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="work">
      <ScrollReveal>
        <div className="section-header">
          <div className="section-label">Recent projects.</div>
          <div className="section-desc">
            Real work for real brands. Here&apos;s what happens when strategy
            meets design.
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <div className="portfolio-thumb">
              <span className="portfolio-thumb-text">Project 01</span>
            </div>
            <div className="portfolio-info">
              <h4>Travel Brand Identity</h4>
              <p>
                Complete brand identity and social media system for a travel
                concierge. Helped them look established from day one.
              </p>
              <div className="portfolio-type">Branding + Design</div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-thumb">
              <Image
                src="/P2-SMM_MOCKUP_02.webp"
                alt="Social Media Content System"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="portfolio-info">
              <h4>Social Media Content System</h4>
              <p>
                30-day content design package for a European lifestyle brand.
                Consistent feed, higher engagement, zero stress for the client.
              </p>
              <div className="portfolio-type">Graphic Design + SMM</div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-thumb">
              <span className="portfolio-thumb-text">Project 03</span>
            </div>
            <div className="portfolio-info">
              <h4>SaaS Product Branding</h4>
              <p>
                Full visual identity for a social media dashboard logo, UI
                elements, and marketing assets that made the product feel
                ready for market.
              </p>
              <div className="portfolio-type">Brand Identity</div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-thumb">
              <span className="portfolio-thumb-text">Project 04</span>
            </div>
            <div className="portfolio-info">
              <h4>High-Converting Coaching Funnel</h4>
              <p>
                Opt-in funnel and landing page for an EU coaching business.
                Designed to capture leads and move them to book a call.
              </p>
              <div className="portfolio-type">Funnel Design</div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
