import Head from "./components/head";
import Logo from "./components/logo";
import Slider from "./components/slider";
import Highlights from "./components/highlights";
import About from "./components/about";
import Services from "./components/services";
import Customers from "./components/customers";
import Testimonials from "./components/testimonials";
import Team from "./components/team";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Credits from "./components/credits";

export default function Home() {
  return (
    <>
      <Head />
      <Logo />
      <Slider />
      <Highlights />
      <About />
      <Services />
      <Customers />
      <Testimonials />
      {/* <Team /> */}
      <Contact />
      <Footer />
      <Credits />
    </>
  );
}
