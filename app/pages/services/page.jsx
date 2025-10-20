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

            <div className="p-25">
                <p className="pb-12 text-4xl text-center font-bold">Serviços</p>

                <div className="flex items-start gap-8">
                    <div className="flex-1 max-w-[350px] min-w-[220px] relative aspect-[3/2]">
                        <Image
                            src="/services1.jpeg"
                            alt="Serviços"
                            fill
                            className="rounded-lg shadow-lg object-cover mb-8"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="pb-8" id="eletricpanels">
                            <span className="font-bold">Painéis Elétricos</span>
                            <br />
                            Desenvolvemos e instalamos painéis elétricos sob medida, garantindo eficiência, segurança e conformidade com as normas técnicas. Nossos projetos são pensados para otimizar o controle e a distribuição de energia em sistemas residenciais, comerciais e industriais.
                        </p>
                    </div>
                </div>


                <div className="flex">
                    <div className="flex-1">
                        <p className="pb-8" id="reinstalation">
                            <span className="font-bold">Reinstalação</span>
                            <br />
                            Realizamos reinstalação elétrica completa ou parcial com foco em segurança, desempenho e adequação às novas demandas de energia. Nossa equipe assegura a atualização das estruturas elétricas de acordo com os padrões mais recentes.
                        </p>
                    </div>
                    <div className="flex-1 max-w-[350px] min-w-[220px] relative aspect-[3/2]">
                        <Image
                            src="/services1.jpeg"
                            alt="Serviços"
                            fill
                            className="rounded-lg shadow-lg object-cover mb-8"
                        />
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-1 max-w-[350px] min-w-[220px] relative aspect-[3/2]">
                        <Image
                            src="/services1.jpeg"
                            alt="Serviços"
                            fill
                            className="rounded-lg shadow-lg object-cover mb-8"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="pb-8" id="inspection">
                            <span className="font-bold">Vistoria</span>
                            <br />
                            Oferecemos serviços de vistoria elétrica detalhada para identificar falhas, riscos e oportunidades de melhoria. Emitimos relatórios técnicos com laudos precisos, garantindo total segurança e conformidade com as normas vigentes.
                        </p>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-1">
                        <p className="pb-8" id="eletricprojects">
                            <span className="font-bold">Projetos Elétricos</span>
                            <br />
                            Elaboramos projetos elétricos personalizados, contemplando desde o dimensionamento da carga até a viabilidade técnica e econômica. Trabalhamos com foco em eficiência energética, sustentabilidade e segurança operacional.
                        </p>
                    </div>
                    <div className="flex-1 max-w-[350px] min-w-[220px] relative aspect-[3/2]">
                        <Image
                            src="/services1.jpeg"
                            alt="Serviços"
                            fill
                            className="rounded-lg shadow-lg object-cover mb-8"
                        />
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-1 max-w-[350px] min-w-[220px] relative aspect-[3/2]">
                        <Image
                            src="/services1.jpeg"
                            alt="Serviços"
                            fill
                            className="rounded-lg shadow-lg object-cover mb-8"
                        />
                    </div>
                    <div className="flex-1">
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