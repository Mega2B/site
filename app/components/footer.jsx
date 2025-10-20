import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="p-8 flex flex-col md:flex-row md:p-20">
      <div className="flex-1 pr-10">
        <Image
          src="/logo.png"
          alt="Mega2B Engenharia"
          width={300}
          height={300}
          className="mb-4"
        />
        <p className="text-sm mb-6 text-[#717580]">
          Entregando qualidade e garantia na prestação de serviços elétricos!
        </p>
      </div>

      <div className="flex-1 pt-8 md:pt-0 md:pr-10 text-center">
        <h3 className="font-bold text-[#1F242E]">Empresa</h3>

        <div className="flex flex-row items-center gap-1 mb-6 justify-center">
          <hr className="border-[#ED7C2F] border w-2" />
          <hr className="border-[#ED7C2F] border w-10" />
        </div>

        <ul className="text-xs text-[#717580]">
          <li className="mb-2">
            <Link href="/pages/about-us" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">
              Sobre Nós
            </Link>
          </li>

          <li className="mb-2">
            <Link href="/pages/services" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">
              Serviços
            </Link>
          </li>

          <li className="mb-2">
            <Link href="/pages/projects" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">
              Projetos
            </Link>
          </li>

          <li className="mb-2">
            <Link href="#contact" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">
              Entre em Contato
            </Link>
          </li>

        </ul>
      </div>

      <div className="flex-1 pt-8 md:pt-0 md:pr-10 text-center">
        <h3 className="font-bold text-[#1F242E]">Serviços</h3>

        <div className="flex flex-row items-center gap-1 mb-6 justify-center">
          <hr className="border-[#ED7C2F] border w-2" />
          <hr className="border-[#ED7C2F] border w-10" />
        </div>

        <ul className="text-xs text-[#717580]">
          <li className="mb-2">
            <Link href="/pages/services#eletricpanels" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">
              Painéis Elétricos
            </Link>
          </li>

          <li className="mb-2">
            <Link href="/pages/services#reinstalation" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">
              Reinstalação
            </Link>
          </li>

          <li className="mb-2">
            <Link href="/pages/services#inspection" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">
              Vistoria
            </Link>
          </li>

          <li className="mb-2">
            <Link href="/pages/services#eletricprojects" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">
              Projetos Elétricos
            </Link>
          </li>

          <li className="mb-2">
            <Link href="/pages/services#panelassembly" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">
              Montagem de Painéis
            </Link>
          </li>

        </ul>
      </div>

      <div className="flex-1 pt-8 md:pt-0 md:pr-10 text-center">
        <h3 className="font-bold text-[#1F242E]">Precisa de Ajuda?</h3>

        <div className="flex flex-row items-center gap-1 mb-6 justify-center">
          <hr className="border-[#ED7C2F] border w-2" />
          <hr className="border-[#ED7C2F] border w-10" />
        </div>

        <ul className="text-xs text-[#717580]">
          <li className="mb-2">
            <span className="font-bold">Ligue-nos:</span> <br />

            <Link href="https://wa.me/5511963725837" target="_blank" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">
              (11) 96372-5837 (Marcelo)
            </Link>

            <br />

            <Link href="https://wa.me/5511974441364" target="_blank" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">
              (11) 97444-1364 (Adriano)
            </Link>

          </li>
          <li>
            <span className="font-bold">Suporte:</span> <Link href="mailto:contato@mega2bengenharia.com.br" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">contato@mega2bengenharia.com.br</Link>
          </li>
        </ul>
      </div>

    </section>
  );
}
