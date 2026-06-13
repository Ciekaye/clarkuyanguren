"use client";

import ScrollReveal from "./ScrollReveal";
import { ContactTrigger } from "./ContactModal";

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <ScrollReveal>
        <div className="cta-inner">
          <h2>Ready to build a brand people actually trust?</h2>
          <p>
            Tell me what you&apos;re working on. I&apos;ll get back to you
            within 24 hours with how I can help.
          </p>
          <div className="cta-buttons">
            <ContactTrigger className="btn-white">
              Start your project →
            </ContactTrigger>
            <a href="#work" className="btn-outline">
              See my work
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
