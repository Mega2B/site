import Head from "../../components/head";
import Logo from "../../components/logo";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Credits from "../../components/credits";

export default function Customers() {
    return (
        <>
            <Head />
            <Logo />

            <div>
                <p className="p-25 text-4xl text-center">Clientes</p>
            </div>

            <Contact />
            <Footer />
            <Credits />
        </>
    );
}