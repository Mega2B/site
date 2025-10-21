import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function About() {
  return (
    <section className="p-2 pt-12 pb-12 md:p-20 bg-[#E9E9E9] flex flex-col md:flex-row">
      <div
        className="flex-1 mx-20 min-w-[200px] sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] h-[600px] rounded-lg overflow-hidden relative"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
        }}
      >
        <img
          src="/about-1.png"
          alt="Organização elétrica"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        <div className="absolute inset-0 flex items-center justify-center text-white text-base font-medium"></div>
      </div>

      <div className="flex-1 p-2 pt-12">
        <p className="text-[#ED7C2F] font-bold uppercase pb-4">- Sobre Nós</p>

        <h2 className="text-3xl pb-4 font-bold">
          Trazendo aos nossos clientes instalações elétricas seguras
        </h2>

        <p>
          A Mega 2B nasceu à partir da experiência de dois sócios, os quais ao
          exerceram suas atividades profissionais perceberam que seus clientes
          necessitavam de fornecedores adequados e capacitados para a realização
          de serviços em indústrias, condomínios, hotéis e escritórios.
        </p>

        <div className="flex flex-col md:flex-row my-10">
          <div className="flex-1 pb-8 md:pb-0">
            <p className="font-bold">Por que nos escolher?</p>
            <ul>
              <li className="text-sm">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[#ED7C2F]"
                  />
                  Experiência no Processo
                </span>
              </li>

              <li className="text-sm">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[#ED7C2F]"
                  />
                  Ótimo Custo-Benefício
                </span>
              </li>

              <li className="text-sm">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[#ED7C2F]"
                  />
                  Qualidade Garantida
                </span>
              </li>

              <li className="text-sm">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[#ED7C2F]"
                  />
                  Excelência no Serviço
                </span>
              </li>

            </ul>
          </div>
          <div className="flex-1">
            <div
              className="flex-1 min-w-[280px] sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] h-[230px] rounded-lg overflow-hidden relative"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
              }}
            >
              <img
                src="/about-2.png"
                alt="Sobre Nós"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1/12 rounded-full px-4 py-4 bg-white w-12 h-12 mr-4">
            <FontAwesomeIcon
              icon={faPhone}
              className="w-4 h-4 text-[#ED7C2F]"
            />
          </div>

          <div className="flex-11/12">
            <p>Tem alguma questão? Ligue-nos!</p>
            <p>(11) 96372-5837</p>
          </div>
        </div>

        <div className="bg-[#ED7C2F] text-white px-2 py-4 items-center text-center rounded-lg mt-6 hover:bg-[#0A5DA6] transition-colors duration-300 ease-in-out font-bold">
          <span>
            <Link href="https://wa.me/5511963725837" target="_blank">
              Ou clique aqui para entrar em contato pelo WhatsApp.
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
