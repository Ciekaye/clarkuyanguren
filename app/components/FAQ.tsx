"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqData = [
  {
    q: "What kind of brands do you work with?",
    a: "All kinds e-commerce, coaching, SaaS, personal brands, service businesses. If you need visuals that build trust and a system that brings in leads, we're a good fit. I've worked with startups and established brands worldwide.",
  },
  {
    q: "How fast can you deliver?",
    a: "Most design projects wrap in 3-7 days. Brand identity packages and funnel builds take a bit longer depending on scope. I'll give you a clear timeline before we start no surprises.",
  },
  {
    q: "I already have a designer. Why should I switch?",
    a: "Most designers just hand you files. I pair graphic design with social media management and funnel builds so your brand stays consistent across every touchpoint. One person, one vision, zero miscommunication between three different freelancers.",
  },
  {
    q: "Will this work for my industry?",
    a: "If your customers make decisions based on how your brand looks and feels (spoiler: they all do), then yes. I've designed for travel, fashion, tech, coaching, e-commerce, and more. The principles of trust-building design are universal.",
  },
  {
    q: "What platforms do you build funnels on?",
    a: "Systeme.io, GoHighLevel, WordPress, and others depending on your setup. I'll recommend the best fit based on your goals, your audience, and your budget.",
  },
  {
    q: "How do I get started?",
    a: "Click \"Work with me\" or send me a message. I'll reply within 24 hours and we'll set up a quick call to talk about your project. No commitment, no pressure just a conversation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq">
      <ScrollReveal>
        <div className="section-header">
          <div className="section-label">FAQ</div>
          <div className="section-desc">
            Got something on your mind? Here are the ones I hear most.
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="faq-list">
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`faq-item${openIndex === i ? " open" : ""}`}
            >
              <div
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {item.q}
                <span className="icon">+</span>
              </div>
              <div className="faq-a">
                <div className="faq-a-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
