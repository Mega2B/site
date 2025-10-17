import Head from "../../components/head";
import Logo from "../../components/logo";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Credits from "../../components/credits";

export default function About() {
    return (
        <>
            <Head />
            <Logo />

            <div className="p-12">
                <p className="pb-8 text-4xl text-center font-bold">Sobre Nós</p>

                <p>
                    A <span className="font-bold">Mega 2B Engenharia</span> nasceu à partir da experiência de dois sócios, os quais ao exerceram suas atividades profissionais perceberam que seus clientes necessitavam de fornecedores adequados e capacitados para a realização de serviços em indústrias, condomínios, hotéis e escritórios.
                </p>
            </div>

            <Contact />
            <Footer />
            <Credits />
        </>
    );
}