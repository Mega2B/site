import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="Mega 2b Engenharia"
          width={500}
          height={38}
          priority
        />
        <ol className="list-inside text-lg text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Nosso site está em construção! Volte em breve.
          </li>
        </ol>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/agenciaduetto_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por Agência Duetto
        </a>
      </footer>
    </div>
  );
}
