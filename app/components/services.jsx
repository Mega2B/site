import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <section className="p-2 pt-12 pb-12 md:p-20 bg-white">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <p className="text-[#ED7C2F] font-bold uppercase pb-4">
            - Nossos Serviços
          </p>

          <h2 className="text-3xl pb-4 font-bold">
            Nossos atendimentos recentes
          </h2>
        </div>
        <div className="flex-1 text-sm text-[#717580]">
          <p>
            Atuamos de maneira profissional na execução de projetos elétricos,
            oferecendo tecnologia e inovação.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-8 gap-5 text-center w-full pb-12">
        <div className="flex flex-col items-center justify-center flex-[0.5]">
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            className="w-10 h-10 mb-4 text-[#ED7C2F]"
          />
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            className="w-10 h-10 text-[#ED7C2F]"
          />
        </div>

        <div className="flex flex-col items-center flex-[1.5] overflow-hidden relative">
          <p className="font-bold text-sm mb-4">Hotel Tauá - Atibaia/SP</p>

          <div className="relative">
            <img
              src="./services-1.png"
              alt="Nossos Serviços"
              className="w-full h-[340px] max-w-[400px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute bottom-3 left-1/3 -translate-x-1/3 w-full text-white text-xs font-medium px-4 flex items-center justify-center gap-2">
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className="w-10 h-10 text-[#ED7C2F]"
              />
              <p className="w-full text-left">
                Instalação de iluminação cênica e arquitetônica com tecnologia LED
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center flex-1">
          <p className="font-bold text-sm mb-4">Residência de Alto Padrão</p>
          <img
            src="./services-2.png"
            alt="Nossos Serviços"
            className="w-full max-w-[240px]"
          />
        </div>

        <div className="flex flex-col items-center flex-1">
          <p className="font-bold text-sm mb-4">Hotel Tauá - Atibaia/SP</p>
          <img
            src="./services-3.png"
            alt="Nossos Serviços"
            className="w-full max-w-[240px]"
          />
        </div>

        <div className="flex flex-col items-center flex-1">
          <p className="font-bold text-sm mb-4">Stand Hotel Tauá - Atibaia/SP</p>
          <img
            src="./services-4.png"
            alt="Nossos Serviços"
            className="w-full max-w-[240px]"
          />
        </div>
      </div>
    </section>
  );
}
