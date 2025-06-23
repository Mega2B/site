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
import Image from "next/image";

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
      <Footer />
      <Credits /> */}

      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Image src="/logo.png" alt="Logo" width={500} height={300} />
      </div>
    </>
  );
}
