import ScrollReveal from "./ScrollReveal";

export default function Showcase() {
  return (
    <section className="showcase-section" id="showcase">
      <div className="showcase-inner">
        <ScrollReveal>
          <div className="showcase-header">
            <div className="showcase-label">The work speaks.</div>
            <div className="showcase-desc">
              Every project is designed with one goal: make your brand look
              like the obvious choice. Clean, intentional, and built to
              convert.
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="showcase-grid">
            <div className="showcase-item">
              <span className="showcase-placeholder">Sample</span>
              <div className="showcase-item-label">
                <h4>Brand Identity Suite</h4>
                <span>Full Visual System</span>
              </div>
            </div>
            <div className="showcase-item">
              <span className="showcase-placeholder">Sample</span>
              <div className="showcase-item-label">
                <h4>Social Media Visuals</h4>
                <span>Scroll-Stopping Content</span>
              </div>
            </div>
            <div className="showcase-item">
              <span className="showcase-placeholder">Sample</span>
              <div className="showcase-item-label">
                <h4>Marketing Collateral</h4>
                <span>Print &amp; Digital Assets</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
