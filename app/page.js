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

export default function Home() {
  return (
    <>
      {/* <Head />
      <Logo />
      <Slider />
      <Highlights />
      <About />
      <Services />
      <Customers />
      <Testimonials />
      <Team />
      <Contact />
      <Footer /> */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-bold text-xl">
        <p>Oops, somehing went wrong!</p>
        <p>Please refresh the page or wait a few minutes and try again.</p>
      </div>
      
    </>
  );
}
