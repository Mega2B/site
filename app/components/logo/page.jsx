import Image from "next/image";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Logo() {
  return (
    <section className="flex px-10 py-4 items-center text-center min-h-[150px]">
      <div className="flex-1 flex justify-center items-center">
        <Image src="/logo.png" alt="Logo" width={300} height={300} />
      </div>

      <div className="flex-1">
        <ul className="flex flex-row justify-around items-center text-lg">
          <li>Home</li>
          <li>Sobre Nós</li>
          <li>Serviços</li>
          <li>Clientes</li>
          <li>Equipe</li>
          <li>Contato</li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center gap-2">
        <ul className="flex flex-row">
          <li className="mx-4">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6 h-6" />
          </li>

          <li>
            <button className="rounded-full bg-[#ED7C2F] text-white px-4 py-2">
              Solicite seu orçamento
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
