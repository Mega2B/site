import Link from "next/link";

export default function Slider() {
  return (
    <section className="p-12 bg-[#1F242E]">
      <div className="flex">
        <div className="flex-1 p-21 text-white">
          <p className="text-sm mb-2">Mais Segurança</p>
          <p className="text-6xl mb-2 font-bold">Elaboração de Projetos Elétricos</p>
          <p className="text-sm mb-8">
            Obtenha mão de obra qualificada para a instalação e manutenção de
            projetos elétricos em sua residência, comércio ou indústria.
          </p>

          <Link className="bg-[#ED7C2F] rounded-full px-6 py-3 text-sm" href="/">Solicite seu Orçamento sem compromisso</Link>
        </div>
        <div className="flex-1"></div>
      </div>
    </section>
  );
}
