import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="p-2 pb-12 md:p-20 text-center">
      <p className="text-[#ED7C2F] font-bold uppercase pb-4">- DEPOIMENTOS -</p>

      <h2 className="text-3xl pb-16 font-bold">
        Com a palavra, nossos estimados clientes
      </h2>

      <div className="flex flex-col md:flex-row">
        <div
          className="flex-1 text-left bg-gray-200 p-8 m-4"
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
              className="w-16 h-16 text-[#717580] opacity-20 m-0 p-0 block"
            />
          </div>

          <div className="float-left">
            <p className="text-sm mt-12">
              Aqui vai o depoimento do cliente, falando da qualidade do serviço,
              atendimento, agilidade, rapidez na solução, entre outros aspectos
              importantes que enfatizam ainda mais o profissionalismo da Mega 2B
              Engenharia.
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
                <h3 className="font-bold">Cliente 01</h3>
                <p className="text-xs">Empresa 01</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex-1 text-left bg-gray-200 p-8 m-4"
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
              className="w-16 h-16 text-[#717580] opacity-20 m-0 p-0 block"
            />
          </div>

          <div className="float-left">
            <p className="text-sm mt-12">
              Aqui vai o depoimento do cliente, falando da qualidade do serviço,
              atendimento, agilidade, rapidez na solução, entre outros aspectos
              importantes que enfatizam ainda mais o profissionalismo da Mega 2B
              Engenharia.
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
                <h3 className="font-bold">Cliente 01</h3>
                <p className="text-xs">Empresa 01</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex-1 text-left bg-gray-200 p-8 m-4"
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
              className="w-16 h-16 text-[#717580] opacity-20 m-0 p-0 block"
            />
          </div>

          <div className="float-left">
            <p className="text-sm mt-12">
              Aqui vai o depoimento do cliente, falando da qualidade do serviço,
              atendimento, agilidade, rapidez na solução, entre outros aspectos
              importantes que enfatizam ainda mais o profissionalismo da Mega 2B
              Engenharia.
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
                <h3 className="font-bold">Cliente 01</h3>
                <p className="text-xs">Empresa 01</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
