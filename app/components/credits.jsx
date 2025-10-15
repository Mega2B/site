import Link from "next/link";

export default function Credits() {
  return (
    <section>
      <div className="px-20 pb-6">
        <hr
          style={{ border: "none", height: "1px", backgroundColor: "#E4E4E4" }}
        />
      </div>

      <div className="px-20 pb-10 flex flex-row">
        <div className="flex-1">
          <p className="text-xs text-[#717580]">
            Copyright 2025 por{" "}
            <Link
              className="text-[#ED7C2F] font-bold underline "
              href="https://google.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agência Dueto
            </Link>
          </p>
        </div>
        <div className="flex-1 text-xs text-right text-[#717580]">
          <Link href={"/pages/privacy"}>Política de Privacidade</Link>
        </div>
      </div>
    </section>
  );
}
