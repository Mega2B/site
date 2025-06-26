import Image from "next/image";

export default function Team() {
  return (
    <section className="p-2 pt-12 pb-12 md:p-20 text-center">
      <p className="text-[#ED7C2F] font-bold uppercase pb-4">- Nosso Time -</p>
      <h2 className="text-3xl pb-12 font-bold">Nosso Time de Experts</h2>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <div className="flex-1">
          <Image
            className="w-full rounded-xl"
            src="/prof01.png"
            alt="Equipe"
            width={500}
            height={500}
          />
        </div>

        <div className="flex-1">
          <Image
            className="w-full rounded-xl"
            src="/prof02.png"
            alt="Equipe"
            width={500}
            height={500}
          />
        </div>

        <div className="flex-1">
          <Image
            className="w-full rounded-xl"
            src="/prof03.png"
            alt="Equipe"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
