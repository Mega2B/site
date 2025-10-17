"use client";
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Head from "../../components/head";
import Logo from "../../components/logo";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Credits from "../../components/credits";

export default function Projects() {
    const options = {
        type: 'loop',
        autoplay: true,
        interval: 3000,
        arrows: true,
        pagination: true,
        width: '100%',
        height: 'auto',
    };

    return (
        <>
            <Head />
            <Logo />

            <div className="p-25">
                <p className="pb-25 text-4xl text-center">Projetos</p>

                <div className="flex p-6 border-1 rounded-lg mb-12">
                    <div className="flex-1 p-6">
                        <div>
                            <Splide options={options} aria-label="Mega2B Engenharia">
                                <SplideSlide>
                                    <img src="/project1/01.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project1/02.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project1/03.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project1/04.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project1/05.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project1/06.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>

                    <div className="flex-1 p-6">
                        <p className="pb-12">
                            Projeto 1 — Instalação elétrica para máquinas de ar-condicionado

                            A Mega 2B Engenharia realizou o levantamento de carga e a adequação do quadro elétrico para atender às novas unidades de climatização. Foram criados circuitos dedicados, dimensionados conforme NBR 5410, com proteção DR/disjuntores adequados e reforço do sistema de aterramento. A infraestrutura (eletrocalhas, eletrodutos e pontos de tomada técnica) foi executada para facilitar manutenção e futuras ampliações.
                            O resultado foi um sistema seguro, eficiente e pronto para operação contínua.

                            Destaques Mega 2B: dimensionamento preciso, execução limpa, comissionamento assistido e entrega técnica documentada.
                        </p>
                    </div>
                </div>

                <div className="flex p-6 border-1 rounded-lg mb-12">
                    <div className="flex-1 p-6">
                        <div>
                            <Splide options={options} aria-label="Mega2B Engenharia">
                                <SplideSlide>
                                    <img src="/project2/01.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project2/02.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project2/03.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project2/04.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project2/05.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project2/06.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project2/07.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project2/08.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project2/09.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project2/10.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project2/11.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project2/12.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project2/13.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project2/14.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project2/15.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project2/16.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project2/17.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>

                    <div className="flex-1 p-6">
                        <p className="pb-12">
                            Projeto 2 — Reforma de iluminação no melhor resort da região

                            Iluminação de stand no Hotel Tauá: solução cenográfica com trilhos eletrificados e projetores dimerizáveis, permitindo foco em produtos e rápida reconfiguração do layout. Foi adotado alto IRC para fidelidade de cores e controle de ofuscamento para conforto visual dos visitantes.

                            Iluminação de LED em camarim – Hotel Tauá: projeto voltado ao bem-estar e à preparação de equipe/artistas, combinando luz frontal difusa (sem sombras marcadas) e temperatura de cor adequada. Drivers com baixa flutuação garantem estabilidade para maquiagem e fotos.

                            Reforma em um dos prédios do complexo – Hotel Tauá: substituição de luminárias obsoletas, reorganização de circuitos e implantação de sistema de dimerização por áreas, reduzindo consumo e simplificando a operação. Adequações elétricas e proteções foram atualizadas conforme norma, com testes noturnos para validar níveis e uniformidade.

                            Destaques Mega 2B: planejamento de obra em ambiente vivo (sem parar o resort), segurança e NR-10/NR-35, curadoria luminotécnica e economia de energia com payback mensurável.
                        </p>
                    </div>
                </div>

                <div className="flex p-6 border-1 rounded-lg mb-12">
                    <div className="flex-1 p-6">
                        <div>
                            <Splide options={options} aria-label="Mega2B Engenharia">
                                <SplideSlide>
                                    <img src="/project3/01.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project3/02.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project3/03.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project3/04.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project3/05.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project3/06.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project3/07.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project3/08.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project3/09.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project3/10.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project3/11.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="/project3/12.jpeg" alt="Mega2B Engenharia" />
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>

                    <div className="flex-1 p-6">
                        <p className="pb-12">
                            Projeto 3 — Iluminação em residências de alto padrão

                            A Mega 2B Engenharia executou o projeto e a instalação da iluminação com foco em conforto, estética e controle. A solução combina camadas de luz (geral, tarefa e efeito), perfis de LED embutidos em sancas e nichos, além de pontos de destaque para obras de arte. Toda a infraestrutura foi pensada para integração com o sistema de automação escolhido pelo cliente, permitindo cenas personalizadas e dimerização suave.

                            Destaques Mega 2B: acabamento impecável, integração com automação residencial, luminárias de alto IRC e manual do proprietário com mapas de circuitos para manutenção fácil.
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