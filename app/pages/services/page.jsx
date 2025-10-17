import Head from "../../components/head";
import Logo from "../../components/logo";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Credits from "../../components/credits";
import Image from "next/image";

export default function Services() {
    return (
        <>
            <Head />
            <Logo />

            <div className="p-12">
                <p className="pb-16 text-4xl text-center font-bold">Serviços</p>

                <div className="flex">

                    <div className="flex-1">
                        <Image src="/services1.jpeg" alt="Serviços" width={600} height={400} className="rounded-lg shadow-lg mb-8" />
                    </div>

                    <div className="flex-1">
                        <p className="pb-8" id="eletricpanels">
                            <span className="font-bold">Painéis Elétricos</span>
                            <br />
                            Desenvolvemos e instalamos painéis elétricos sob medida, garantindo eficiência, segurança e conformidade com as normas técnicas. Nossos projetos são pensados para otimizar o controle e a distribuição de energia em sistemas residenciais, comerciais e industriais.
                        </p>

                        <p className="pb-8" id="reinstalation">
                            <span className="font-bold">Reinstalação</span>
                            <br />
                            Realizamos reinstalação elétrica completa ou parcial com foco em segurança, desempenho e adequação às novas demandas de energia. Nossa equipe assegura a atualização das estruturas elétricas de acordo com os padrões mais recentes.
                        </p>

                        <p className="pb-8" id="inspection">
                            <span className="font-bold">Vistoria</span>
                            <br />
                            Oferecemos serviços de vistoria elétrica detalhada para identificar falhas, riscos e oportunidades de melhoria. Emitimos relatórios técnicos com laudos precisos, garantindo total segurança e conformidade com as normas vigentes.
                        </p>

                        <p className="pb-8" id="eletricprojects">
                            <span className="font-bold">Projetos Elétricos</span>
                            <br />
                            Elaboramos projetos elétricos personalizados, contemplando desde o dimensionamento da carga até a viabilidade técnica e econômica. Trabalhamos com foco em eficiência energética, sustentabilidade e segurança operacional.
                        </p>

                        <p className="pb-8" id="panelassembly">
                            <span className="font-bold">Montagem de Painéis</span>
                            <br />
                            Prestamos serviços completos de montagem de painéis elétricos, utilizando componentes de alta qualidade e técnicas rigorosas de montagem. Cada painel é projetado para garantir durabilidade, confiabilidade e fácil manutenção.
                        </p>
                    </div>

                </div>

            </div>

            <Contact />
            <Footer />
            <Credits />
        </>
    );
}