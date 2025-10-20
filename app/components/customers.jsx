import Image from "next/image";
import Link from "next/link";

export default function Customers() {
  return (
    <section className="p-2 md:p-20 bg-[#E9E9E9] text-left">
      <div className="flex flex-col md:flex-row p-2">
        <div className="flex-1">
          <p className="text-[#ED7C2F] font-bold uppercase pb-4">
            - Nossos Clientes
          </p>

          <h2 className="text-3xl pb-4 font-bold md:pr-37">
            Levando qualidade e confiança aos clientes
          </h2>

          <p className="text-sm pb-12 md:pr-37">
            Nossa equipe qualificada busca constantemente a melhoria de
            processos, para entregar o melhor resultado aos clientes.
          </p>

          <Image
            src={"/cust01.jpg"}
            alt="Equipe"
            width={500}
            height={500}
            style={{
              clipPath: "polygon(83% 0, 100% 16%, 100% 100%, 0 100%, 0 0)",
            }}
            className="pb-8"
          />
          <Image
            src={"/cust02.jpg"}
            alt="Equipe"
            width={500}
            height={500}
            style={{
              clipPath: "polygon(83% 0, 100% 16%, 100% 100%, 0 100%, 0 0)",
            }}
            className="pb-8"
          />
        </div>

        <div className="flex-1">
          <Image
            src={"/cust03.jpg"}
            alt="Equipe"
            width={500}
            height={500}
            style={{
              clipPath: "polygon(83% 0, 100% 16%, 100% 100%, 0 100%, 0 0)",
            }}
            className="pb-8"
          />
          <Image
            src={"/cust04.jpg"}
            alt="Equipe"
            width={500}
            height={500}
            style={{
              clipPath: "polygon(83% 0, 100% 16%, 100% 100%, 0 100%, 0 0)",
            }}
            className="pb-8"
          />

          <div className="flex items-center gap-6 rounded-lg mb-12">
            <div className="flex items-end gap-[2px]">
              <Image
                src="/f-1.png"
                alt="Faixa"
                width={13}
                height={66}
                style={{ height: "66px" }}
              />
              <Image
                src="/f-2.png"
                alt="Faixa"
                width={13}
                height={102}
                style={{ height: "102px" }}
              />
              <Image
                src="/f-3.png"
                alt="Faixa"
                width={13}
                height={135}
                style={{ height: "135px" }}
              />
            </div>

            <div>
              <p className="text-sm text-[#717580] leading-relaxed max-w-md">
                Todo cuidado e garantia que a Mega 2B Engenharia pode oferecer,
                graças à qualidade e experiência de nossos profissionais.
              </p>

              <div className="bg-[#ED7C2F] text-white px-6 py-2 text-sm font-semibold rounded-lg mt-4 inline-block cursor-pointer hover:bg-[#0A5DA6] transition-colors duration-300 ease-in-out font-bold">
                <Link href="/pages/projects">
                  Confira mais projetos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
