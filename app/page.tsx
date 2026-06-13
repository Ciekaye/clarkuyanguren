import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SubNav from "./components/SubNav";
import Tools from "./components/Tools";
import ProblemReframe from "./components/ProblemReframe";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Process from "./components/Process";
import About from "./components/About";
import PortfolioPreview from "./components/PortfolioPreview";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { ContactModalProvider } from "./components/ContactModal";

function Divider() {
  return (
    <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 56px" }}>
      <div className="divider" />
    </div>
  );
}

export default function Home() {
  return (
    <ContactModalProvider>
      <Nav />
      <Hero />
      <SubNav />
      <Tools />
      <ProblemReframe />
      <Divider />
      <Services />
      <Showcase />
      <Process />
      <Divider />
      <About />
      <Divider />
      <PortfolioPreview />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </ContactModalProvider>
  );
}
