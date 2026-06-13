import ScrollReveal from "./ScrollReveal";

export default function Services() {
  return (
    <section id="services">
      <ScrollReveal>
        <div className="section-header">
          <div className="section-label">What I do.</div>
          <div className="section-desc">
            Design is the foundation. Social media and funnels are how we turn
            that into growth.
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="services-grid">
          <div className="service-card featured">
            <div className="service-num">01 &nbsp; CORE</div>
            <h3>Graphic Design</h3>
            <p>
              Your brand identity, social media graphics, ad creatives, and
              marketing materials all designed to make people stop scrolling
              and start paying attention. 6 years of making brands look like
              they mean business.
            </p>
            <div className="service-tags">
              <span className="service-tag">Brand Identity</span>
              <span className="service-tag">Visual Systems</span>
              <span className="service-tag">Social Graphics</span>
              <span className="service-tag">Ad Creatives</span>
              <span className="service-tag">Print</span>
            </div>
          </div>
          <div className="service-card">
            <div className="service-num">02</div>
            <h3>Social Media Management</h3>
            <p>
              A polished, consistent feed that actually grows your audience.
              I handle strategy, content planning, scheduling, and analytics
              so your brand shows up every day even when you&apos;re busy
              running your business.
            </p>
            <div className="service-tags">
              <span className="service-tag">Content Strategy</span>
              <span className="service-tag">Scheduling</span>
              <span className="service-tag">Analytics</span>
              <span className="service-tag">Community</span>
            </div>
          </div>
          <div className="service-card">
            <div className="service-num">03</div>
            <h3>Funnel Design</h3>
            <p>
              Landing pages, opt-in pages, and sales funnels that don&apos;t
              just look good they convert. I design the layout, write the
              copy, and build the pages so you can turn visitors into leads
              on autopilot.
            </p>
            <div className="service-tags">
              <span className="service-tag">Landing Pages</span>
              <span className="service-tag">Sales Funnels</span>
              <span className="service-tag">Opt-in Pages</span>
              <span className="service-tag">Lead Gen</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
