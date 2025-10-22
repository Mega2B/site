import Head from "../../components/head";
import Logo from "../../components/logo";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Credits from "../../components/credits";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
    return (
        <>
            <Head />
            <Logo />

            <div className="p-2 md:p-25">
                <p className="pb-12 text-4xl text-center font-bold">Serviços</p>

                <div className="flex md:flex-row flex-col gap-8 p-8 border-1 border-gray-200 rounded-lg shadow-lg mb-12 text-center md:text-left">
                    <div className="flex-1 max-w-[350px] min-w-[220px] relative aspect-[3/2]">
                        <Image
                            src="/services1.jpeg"
                            alt="Serviços"
                            fill
                            className="rounded-lg shadow-lg object-cover mb-8"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="pb-2" id="eletricpanels">
                            <span className="font-bold text-xl">Painéis Elétricos</span>
                            <br /><br />
                            Desenvolvemos e instalamos painéis elétricos sob medida, garantindo eficiência, segurança e conformidade com as normas técnicas. Nossos projetos são pensados para otimizar o controle e a distribuição de energia em sistemas residenciais, comerciais e industriais.
                        </p>

                        <div className="bg-[#ED7C2F] text-white px-2 py-4 md:w-[300px] items-center text-center rounded-lg mt-6 hover:bg-[#0A5DA6] transition-colors duration-300 ease-in-out font-bold">
                            <span>
                                <Link href="https://wa.me/5511963725837" target="_blank">
                                    Solicite um orçamento conosco
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col gap-8 p-8 border-1 border-gray-200 rounded-lg shadow-lg mb-12 text-center md:text-left">
                    <div className="flex-1">
                        <p className="pb-2" id="reinstalation">
                            <span className="font-bold text-xl">Reinstalação</span>
                            <br /><br />
                            Realizamos reinstalação elétrica completa ou parcial com foco em segurança, desempenho e adequação às novas demandas de energia. Nossa equipe assegura a atualização das estruturas elétricas de acordo com os padrões mais recentes.
                        </p>

                        <div className="bg-[#ED7C2F] text-white px-2 py-4 md:w-[300px] items-center text-center rounded-lg mt-6 hover:bg-[#0A5DA6] transition-colors duration-300 ease-in-out font-bold">
                            <span>
                                <Link href="https://wa.me/5511963725837" target="_blank">
                                    Solicite um orçamento conosco
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 max-w-[350px] min-w-[220px] relative aspect-[3/2]">
                        <Image
                            src="/organizacao.webp"
                            alt="Serviços"
                            fill
                            className="rounded-lg shadow-lg object-cover mb-8"
                        />
                    </div>
                </div>

                <div className="flex md:flex-row flex-col gap-8 p-8 border-1 border-gray-200 rounded-lg shadow-lg mb-12 text-center md:text-left">
                    <div className="flex-1 max-w-[350px] min-w-[220px] relative aspect-[3/2]">
                        <Image
                            src="/garantia.webp"
                            alt="Serviços"
                            fill
                            className="rounded-lg shadow-lg object-cover mb-8"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="pb-2" id="inspection">
                            <span className="font-bold text-xl">Vistoria</span>
                            <br /><br />
                            Oferecemos serviços de vistoria elétrica detalhada para identificar falhas, riscos e oportunidades de melhoria. Emitimos relatórios técnicos com laudos precisos, garantindo total segurança e conformidade com as normas vigentes.
                        </p>

                        <div className="bg-[#ED7C2F] text-white px-2 py-4 md:w-[300px] items-center text-center rounded-lg mt-6 hover:bg-[#0A5DA6] transition-colors duration-300 ease-in-out font-bold">
                            <span>
                                <Link href="https://wa.me/5511963725837" target="_blank">
                                    Solicite um orçamento conosco
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col gap-8 p-8 border-1 border-gray-200 rounded-lg shadow-lg mb-12 text-center md:text-left">
                    <div className="flex-1">
                        <p className="pb-2" id="eletricprojects">
                            <span className="font-bold text-xl">Projetos Elétricos</span>
                            <br /><br />
                            Elaboramos projetos elétricos personalizados, contemplando desde o dimensionamento da carga até a viabilidade técnica e econômica. Trabalhamos com foco em eficiência energética, sustentabilidade e segurança operacional.
                        </p>

                        <div className="bg-[#ED7C2F] text-white px-2 py-4 md:w-[300px] items-center text-center rounded-lg mt-6 hover:bg-[#0A5DA6] transition-colors duration-300 ease-in-out font-bold">
                            <span>
                                <Link href="https://wa.me/5511963725837" target="_blank">
                                    Solicite um orçamento conosco
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 max-w-[350px] min-w-[220px] relative aspect-[3/2]">
                        <Image
                            src="/services-1.webp"
                            alt="Serviços"
                            fill
                            className="rounded-lg shadow-lg object-cover mb-8"
                        />
                    </div>
                </div>

                <div className="flex md:flex-row flex-col gap-8 p-8 border-1 border-gray-200 rounded-lg shadow-lg mb-12 text-center md:text-left">
                    <div className="flex-1 max-w-[350px] min-w-[220px] relative aspect-[3/2]">
                        <Image
                            src="/cust02.webp"
                            alt="Serviços"
                            fill
                            className="rounded-lg shadow-lg object-cover mb-8"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="pb-2" id="panelassembly">
                            <span className="font-bold text-xl">Montagem de Painéis</span>
                            <br /><br />
                            Prestamos serviços completos de montagem de painéis elétricos, utilizando componentes de alta qualidade e técnicas rigorosas de montagem. Cada painel é projetado para garantir durabilidade, confiabilidade e fácil manutenção.
                        </p>

                        <div className="bg-[#ED7C2F] text-white px-2 py-4 md:w-[300px] items-center text-center rounded-lg mt-6 hover:bg-[#0A5DA6] transition-colors duration-300 ease-in-out font-bold">
                            <span>
                                <Link href="https://wa.me/5511963725837" target="_blank">
                                    Solicite um orçamento conosco
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            <Contact />
            <Footer />
            <Credits />
        </>
    );
}