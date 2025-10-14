import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";

export default function Footer() {
  return (
    <section className="p-8 flex flex-col md:flex-row md:p-20">
      <div className="flex-1 pr-10">
        <Image
          src="/logo.png"
          alt="Logo"
          width={300}
          height={300}
          className="mb-4"
        />
        <p className="text-xs mb-6 text-[#717580]">
          Entregando qualidade e garantia na prestação de serviços elétricos.
        </p>
      </div>

      <div className="flex-1 pt-8 md:pt-0 md:pr-10">
        <h3 className="font-bold text-[#1F242E]">Empresa</h3>

        <div className="flex flex-row items-center gap-1 mb-6">
          <hr className="border-[#ED7C2F] border w-2" />
          <hr className="border-[#ED7C2F] border w-10" />
        </div>

        <ul className="text-xs text-[#717580]">
          <li className="mb-2">Sobre Nós</li>
          <li className="mb-2">Serviços</li>
          <li className="mb-2">Nossos Clientes</li>
          <li className="mb-2">Entre em Contato</li>
        </ul>
      </div>

      <div className="flex-1 pt-8 md:pt-0 md:pr-10">
        <h3 className="font-bold text-[#1F242E]">Serviços</h3>

        <div className="flex flex-row items-center gap-1 mb-6">
          <hr className="border-[#ED7C2F] border w-2" />
          <hr className="border-[#ED7C2F] border w-10" />
        </div>

        <ul className="text-xs text-[#717580]">
          <li className="mb-2">Painéis Elétricos</li>
          <li className="mb-2">Reinstalação</li>
          <li className="mb-2">Vistoria</li>
          <li className="mb-2">Projetos Elétricos</li>
          <li className="mb-2">Montagem de Painéis</li>
        </ul>
      </div>

      <div className="flex-1 pt-8 md:pt-0 md:pr-10">
        <h3 className="font-bold text-[#1F242E]">Precisa de Ajuda?</h3>

        <div className="flex flex-row items-center gap-1 mb-6">
          <hr className="border-[#ED7C2F] border w-2" />
          <hr className="border-[#ED7C2F] border w-10" />
        </div>

        <ul className="text-xs text-[#717580]">
          <li className="mb-2">
            <span className="font-bold">Ligue-nos:</span> <br />
            (11) 96372-5837 (Marcelo) <br />
            (11) 97444-1364 (Adriano)
          </li>
          <li>
            <span className="font-bold">Suporte:</span> contato@mega2bengenharia.com.br
            </li>
        </ul>
      </div>

      {/* <div className="flex-1 pt-8 md:pt-0">
        <h3 className="font-bold text-[#1F242E]">Newsletter</h3>

        <div className="flex flex-row items-center gap-1 mb-6">
          <hr className="border-[#ED7C2F] border w-2" />
          <hr className="border-[#ED7C2F] border w-10" />
        </div>

        <h2 className="text-xs mb-2 text-[#717580]">
          Receba as novidades de nossa empresa mensalmente:
        </h2>
        <input
          type="text"
          className="border border-[#E4E4E4] rounded-sm px-4 py-2 text-xs mb-2 mt-2"
          placeholder="Seu melhor e-mail"
        />
        <button className="bg-[#ED7C2F] rounded-sm px-4 py-2 text-xs font-bold text-white">
          Enviar
        </button>
      </div> */}
    </section>
  );
}
