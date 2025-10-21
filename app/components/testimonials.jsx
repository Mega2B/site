import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="p-8 pb-12 md:p-20 text-center">
      <p className="text-[#ED7C2F] font-bold uppercase pb-4">- DEPOIMENTOS -</p>

      <h2 className="text-3xl pb-16 font-bold">
        Com a palavra, nossos estimados clientes
      </h2>

      <div className="flex flex-col md:flex-row">
        <div
          className="flex-1 text-left bg-gray-200 p-8 m-4 hover:bg-[#0A5DA6] hover:text-white transition-colors duration-300"
          style={{
            clipPath: "polygon(83% 0, 100% 16%, 100% 100%, 0 100%, 0 0)",
          }}
        >
          <div className="float-left">
            <div className="flex items-center gap-2">
              <p className="font-bold">5.0</p>
              <FontAwesomeIcon
                icon={faStar}
                className="w-4 h-4 text-[#ED7C2F]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="w-4 h-4 text-[#ED7C2F]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="w-4 h-4 text-[#ED7C2F]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="w-4 h-4 text-[#ED7C2F]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="w-4 h-4 text-[#ED7C2F]"
              />
            </div>
          </div>

          <div className="float-right">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="w-16 h-16 opacity-20 m-0 p-0 block"
            />
          </div>

          <div className="float-left">
            <p className="text-sm mt-12">
              "Contratei a Mega 2B Engenharia para a manutenção preventiva em nossa indústria e fiquei satisfeito com a qualidade dos equipamentos e o suporte oferecido. Muito profissionalismo, rapidez e excelência, superando nossas necessidades!"
            </p>

            <div className="mt-12 flex items-center gap-4">
              <div>
                <Image
                  src="/user.jpg"
                  width={50}
                  height={50}
                  className="p-2"
                  alt="Depoimento"
                />
              </div>
              <div>
                <h3 className="font-bold">Richard Souza</h3>
                <p className="text-xs">Particular</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex-1 text-left bg-gray-200 p-8 m-4 hover:bg-[#0A5DA6] hover:text-white transition-colors duration-300"
          style={{
            clipPath: "polygon(83% 0, 100% 16%, 100% 100%, 0 100%, 0 0)",
          }}
        >
          <div className="float-left">
            <div className="flex items-center gap-2">
              <p className="font-bold">5.0</p>
              <FontAwesomeIcon
                icon={faStar}
                className="w-4 h-4 text-[#ED7C2F]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="w-4 h-4 text-[#ED7C2F]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="w-4 h-4 text-[#ED7C2F]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="w-4 h-4 text-[#ED7C2F]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="w-4 h-4 text-[#ED7C2F]"
              />
            </div>
          </div>

          <div className="float-right">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="w-16 h-16 opacity-20 m-0 p-0 block"
            />
          </div>

          <div className="float-left">
            <p className="text-sm mt-12">
              "A equipe da Mega 2B foi extremamente pontual e eficiente na instalação elétrica do nosso condomínio. A atenção à segurança e a transparência durante o serviço nos trouxeram total confiança. Nosso resultado final superou as expectativas."
            </p>

            <div className="mt-12 flex items-center gap-4">
              <div>
                <Image
                  src="/user.jpg"
                  width={50}
                  height={50}
                  className="p-2"
                  alt="Depoimento"
                />
              </div>
              <div>
                <h3 className="font-bold">Paula Nobre</h3>
                <p className="text-xs">Particular</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex-1 text-left bg-gray-200 p-8 m-4 hover:bg-[#0A5DA6] hover:text-white transition-colors duration-300"
          style={{
            clipPath: "polygon(83% 0, 100% 16%, 100% 100%, 0 100%, 0 0)",
          }}
        >
          <div className="float-left">
            <div className="flex items-center gap-2">
              <p className="font-bold">5.0</p>
              <FontAwesomeIcon
                icon={faStar}
                className="w-4 h-4 text-[#ED7C2F]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="w-4 h-4 text-[#ED7C2F]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="w-4 h-4 text-[#ED7C2F]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="w-4 h-4 text-[#ED7C2F]"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="w-4 h-4 text-[#ED7C2F]"
              />
            </div>
          </div>

          <div className="float-right">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="w-16 h-16 opacity-20 m-0 p-0 block"
            />
          </div>

          <div className="float-left">
            <p className="text-sm mt-12">
              "Fiquei impressionado com o profissionalismo da Mega 2B Engenharia em cada etapa do projeto. Desde o atendimento até a entrega, demonstraram agilidade, clareza e um cuidado excepcional com os detalhes. Recomendo para quem busca soluções eficazes e seguras."
            </p>

            <div className="mt-12 flex items-center gap-4">
              <div>
                <Image
                  src="/user.jpg"
                  width={50}
                  height={50}
                  className="p-2"
                  alt="Depoimento"
                />
              </div>
              <div>
                <h3 className="font-bold">Marcos Rocha</h3>
                <p className="text-xs">Particular</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
