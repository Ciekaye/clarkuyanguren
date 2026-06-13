import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function PortfolioPreview() {
  return (
    <section className="portfolio-preview" id="work">
      <ScrollReveal>
        <div className="portfolio-preview-inner">
          <div className="portfolio-preview-text">
            <div className="section-label">Selected work.</div>
            <h2>
              A glimpse into the brands,<br />
              campaigns, and funnels I&apos;ve crafted.
            </h2>
            <p>
              Branding, social media systems, and conversion-focused funnels
              for clients across four continents. Tap below to step inside the
              full portfolio.
            </p>
            <Link href="/portfolio" className="portfolio-preview-cta">
              View full portfolio →
            </Link>
          </div>

          <Link href="/portfolio" className="portfolio-preview-cover">
            <Image
              src="/P2-SMM_MOCKUP_02.webp"
              alt="Portfolio preview"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <div className="portfolio-preview-cover-overlay">
              <span>Open Portfolio</span>
            </div>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
