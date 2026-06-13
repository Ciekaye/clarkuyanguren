import MeshGradientBg from '../../components/ui/mesh-gradient-bg';

export default function Hero() {
  return (
    <section className="hero">
      {/* Animated mesh gradient background */}
      <MeshGradientBg />
      {/* White overlay to keep text readable */}
      <div className="hero-overlay" />

      <div className="hero-center">
        <h1>
          Your brand deserves visuals{" "}
          <em>that actually convert.</em>
        </h1>
        <p className="hero-sub">
          I design scroll-stopping brands, manage social media that builds
          real audiences, and build funnels that turn clicks into clients.
          6 years of experience. 50+ brands transformed.
        </p>
        <a href="#contact" className="hero-link">
          Let&apos;s talk about your project →
        </a>
      </div>
    </section>
  );
}
