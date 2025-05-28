export default function Highlights() {
  const cards = [
    {
      image: "./organizacao.png",
      alt: "Organização em todo projeto",
      text: "Organização em todo projeto",
    },
    {
      image: "./excelencia.png",
      alt: "Manutenção preventiva",
      text: "Manutenção preventiva",
    },
    {
      image: "./equipamentos.png",
      alt: "Os melhores equipamentos",
      text: "Os melhores equipamentos",
    },
    {
      image: "./garantia.png",
      alt: "Garantia nas instalações",
      text: "Garantia nas instalações",
    },
  ];

  return (
    <div className="flex flex-wrap gap-10 p-10 bg-[#E9E9E9]">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex-1 min-w-[280px] sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] h-[230px] rounded-lg overflow-hidden relative"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
          }}
        >
          <img
            src={card.image}
            alt={card.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-white text-base font-medium">
            {card.text}
          </div>
        </div>
      ))}
    </div>
  );
}
