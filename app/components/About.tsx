import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about">
      <ScrollReveal>
        <div className="about-grid">
          <div className="about-photo">
            <Image
              src="/clark.webp"
              alt="Clark Kent Uyanguren"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="about-info">
            <div className="section-label" style={{ marginBottom: 40 }}>
              About.
            </div>
            <h3>I help brands look credible, show up consistently, and sell more.</h3>
            <p>
              For 6 years, I&apos;ve been the person brands call when they need
              visuals that actually do something not just look pretty, but
              build trust, attract the right audience, and drive real results.
            </p>
            <p>
              I don&apos;t just design. I manage social media accounts, build
              high-converting funnels, and make sure everything works together
              as one system. My clients are in Europe, the UAE, Australia, and
              the USA so I know what works across different markets because
              I&apos;ve tested it.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-num">6+</div>
                <div className="about-stat-label">Yrs Design</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">3+</div>
                <div className="about-stat-label">Yrs SMM</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">50+</div>
                <div className="about-stat-label">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
