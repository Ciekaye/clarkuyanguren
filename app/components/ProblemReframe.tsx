import ScrollReveal from "./ScrollReveal";

export default function ProblemReframe() {
  return (
    <section className="problem-section" id="problem">
      <ScrollReveal>
        <div className="problem-grid">
          <div>
            <div className="section-label" style={{ marginBottom: 48 }}>
              You&apos;re putting in the work.
              <br />
              But your brand isn&apos;t keeping up.
            </div>
            <div className="pain-list">
              <div className="pain-row">
                <span className="pain-num">01</span>
                <span className="pain-text">
                  Your visuals don&apos;t match the quality of what you actually
                  sell and people notice.
                </span>
              </div>
              <div className="pain-row">
                <span className="pain-num">02</span>
                <span className="pain-text">
                  Your social media looks like five different people designed it.
                  No consistency, no recognizable brand.
                </span>
              </div>
              <div className="pain-row">
                <span className="pain-num">03</span>
                <span className="pain-text">
                  You&apos;re getting traffic but nobody converts because the
                  design doesn&apos;t build enough trust.
                </span>
              </div>
              <div className="pain-row">
                <span className="pain-num">04</span>
                <span className="pain-text">
                  You&apos;ve hired designers before, but they keep delivering
                  cookie-cutter templates that don&apos;t feel like you.
                </span>
              </div>
            </div>
          </div>
          <div className="reframe">
            <h3>It&apos;s not your product. It&apos;s the presentation.</h3>
            <p>
              People make snap judgments. If your brand doesn&apos;t look
              credible in the first 3 seconds, they&apos;re gone. It doesn&apos;t
              matter how good your offer is if the visuals don&apos;t build
              trust, you&apos;re losing sales you should be closing.
            </p>
            <p>
              You don&apos;t need another generic freelancer. You need someone
              who designs with strategy visuals that look the part AND move
              people to take action. That&apos;s what I do.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
