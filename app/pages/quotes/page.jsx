import Head from "../../components/head";
import Logo from "../../components/logo";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Credits from "../../components/credits";

export default function Quotes() {
    return (
        <>
            <Head />
            <Logo />

            <div>
                <p className="p-25 text-4xl text-center">Solicite seu Orçamento</p>
            </div>

            <Contact />
            <Footer />
            <Credits />
        </>
    );
}