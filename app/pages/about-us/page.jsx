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

                <p className="pb-4">
                    A <span className="font-bold">Mega 2B Engenharia</span> nasceu à partir da experiência de dois sócios, os quais ao exerceram suas atividades profissionais perceberam que seus clientes necessitavam de fornecedores adequados e capacitados para a realização de serviços em indústrias, condomínios, hotéis e escritórios.
                </p>


                <p className="pb-4">
                    Com sede na cidade de Jarinu, interior de São Paulo, a Mega 2B Engenharia nasceu a partir da experiência de dois sócios, os quais ao exercerem suas atividades profissionais perceberam que seus clientes necessitavam de fornecedores adequados e capacitados para a realização de serviços em indústrias, condomínios, hotéis e escritórios.
                </p>


                <p className="pb-4">
                    Amplamente qualificados em instalações e manutenções elétricas, a Mega 2B Engenharia oferece mão de obra de qualidade, excelência em seus serviços, além de se preocupar com possíveis processos de manutenção, garantindo a longo prazo um diferencial para nossos clientes.
                </p>

                <p className="pb-4">
                    O atendimento da nossa equipe é 24 horas, permitindo que a empresa confira suporte aos clientes a qualquer momento, e em qualquer situação de emergência proveniente de ocorrências que de modo corriqueiro acometem estruturas elétricas.
                </p>

            </div>

            <Contact />
            <Footer />
            <Credits />
        </>
    );
}