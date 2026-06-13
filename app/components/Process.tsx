import ScrollReveal from "./ScrollReveal";

export default function Process() {
  return (
    <section id="process">
      <ScrollReveal>
        <div className="section-header">
          <div className="section-label">How it works.</div>
          <div className="section-desc">
            No endless back-and-forth. No guessing. Three clear steps from
            &ldquo;let&apos;s talk&rdquo; to &ldquo;it&apos;s live.&rdquo;
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="steps-grid">
          <div className="step-item">
            <div className="step-num">01</div>
            <h3>Strategize</h3>
            <p>
              We hop on a call. I learn your brand, your goals, and who
              you&apos;re trying to reach. Then I map out a clear plan so
              you know exactly what&apos;s coming.
            </p>
          </div>
          <div className="step-item">
            <div className="step-num">02</div>
            <h3>Design &amp; Build</h3>
            <p>
              I create your visuals, set up your funnels, and prepare your
              content. You review, we refine until it feels right.
            </p>
          </div>
          <div className="step-item">
            <div className="step-num">03</div>
            <h3>Launch &amp; Grow</h3>
            <p>
              Everything goes live. I track what&apos;s working, optimize
              what&apos;s not, and make sure your brand keeps performing
              long after launch day.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
