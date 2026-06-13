import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ContactModalProvider, ContactTrigger } from "../components/ContactModal";

export const metadata = {
  title: "Portfolio · Clark Kent Uyanguren",
  description:
    "Selected work — branding, logo design, illustration, UI/UX, and funnel design.",
};

const sections = [
  {
    n: "01",
    slug: "branding",
    title: "Branding",
    sub:
      "Identity systems built from strategy. Logos, typography, color, and the rules that hold them together.",
  },
  {
    n: "02",
    slug: "logofolio",
    title: "Logofolio",
    sub:
      "A collection of marks designed for clarity, character, and longevity across industries.",
  },
  {
    n: "03",
    slug: "illustration",
    title: "Illustration",
    sub:
      "Custom illustration work for brands, editorial, and digital campaigns.",
  },
  {
    n: "04",
    slug: "ui-ux",
    title: "UI & UX Design",
    sub:
      "Interfaces designed to feel inevitable. Wireframes, flows, and pixel-perfect screens that convert.",
  },
  {
    n: "05",
    slug: "funnel",
    title: "Funnel Design",
    sub:
      "High-converting landing pages, opt-ins, and offer pages built to capture leads and close deals.",
  },
];

export default function PortfolioPage() {
  return (
    <ContactModalProvider>
      <Nav />

      <main className="portfolio-page">
        {/* Hero / Cover */}
        <section className="portfolio-page-hero">
          <div className="portfolio-hero-topbar">
            <div className="portfolio-hero-roles">
              <span>Graphic Designer</span>
              <span className="sep">/</span>
              <span>Social Media Manager</span>
              <span className="sep">/</span>
              <span>Funnel Designer</span>
            </div>
          </div>
          <Image
            src="/Portfolio.svg"
            alt="Portfolio"
            width={1600}
            height={400}
            priority
            className="portfolio-hero-wordmark"
          />
        </section>

        {/* Branding */}
        <section className="portfolio-section portfolio-section-branding" id="branding">
          <div className="portfolio-section-inner">
            <h2 className="portfolio-section-title">{sections[0].title}</h2>
          </div>
        </section>

        {/* Logofolio */}
        <section className="portfolio-section portfolio-section-logofolio" id="logofolio">
          <div className="portfolio-section-inner">
            <h2 className="portfolio-section-title">{sections[1].title}</h2>
          </div>
        </section>

        {/* Illustration */}
        <section className="portfolio-section portfolio-section-illustration" id="illustration">
          <div className="portfolio-section-inner">
            <h2 className="portfolio-section-title">{sections[2].title}</h2>
            <div className="portfolio-illustration-sample">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ILLUSTRATION.svg" alt="Illustration sample" />
            </div>
          </div>
        </section>

        {/* UI & UX Design */}
        <section className="portfolio-section portfolio-section-uiux" id="ui-ux">
          <div className="portfolio-section-inner">
            <h2 className="portfolio-section-title">{sections[3].title}</h2>
          </div>
        </section>

        {/* Funnel Design */}
        <section className="portfolio-section portfolio-section-funnel" id="funnel">
          <div className="portfolio-section-inner">
            <h2 className="portfolio-section-title">{sections[4].title}</h2>
          </div>
        </section>

        {/* CTA */}
        <section className="portfolio-page-cta">
          <h2>Have a project in mind?</h2>
          <p>Let&apos;s build something that actually moves the needle.</p>
          <ContactTrigger className="portfolio-page-cta-btn">
            Start a project →
          </ContactTrigger>
          <Link href="/" className="portfolio-page-back">
            ← Back to home
          </Link>
        </section>
      </main>

      <Footer />
    </ContactModalProvider>
  );
}
