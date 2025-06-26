import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section className="p-2 pt-12 pb-12 md:p-20 bg-[#E9E9E9] text-center">
      <div>
        <p className="text-[#ED7C2F] font-bold uppercase pb-4">
          - Entre em Contato -
        </p>

        <h2 className="text-3xl pb-12 font-bold">Contato</h2>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 bg-white text-left p-8 m-4">
          <h2 className="font-bold">Preencha o formulário abaixo</h2>
          <form className="flex flex-col mt-4">
            <label className="flex items-center gap-2 text-sm m-0 p-0">
              <FontAwesomeIcon icon={faUser} className="w-3 h-3" />
              Seu nome
            </label>
            <input
              type="text"
              placeholder="Nome"
              className="p-2 mb-4 text-sm border border-gray-300 rounded"
            />

            <label className="flex items-center gap-2 text-sm m-0 p-0">
              <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3" />
              Seu melhor e-mail
            </label>
            <input
              type="email"
              placeholder="Email"
              className="p-2 mb-4 text-sm border border-gray-300 rounded"
            />

            <label className="flex items-center gap-2 text-sm m-0 p-0">
              <FontAwesomeIcon icon={faMessage} className="w-3 h-3" />
              Sua mensagem
            </label>
            <textarea
              placeholder="Mensagem"
              className="p-2 mb-4 text-sm border border-gray-300 rounded h-32"
            ></textarea>

            <button
              type="submit"
              className="bg-[#ED7C2F] text-white p-2 rounded hover:bg-[#d66a28] transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>

        <div className="flex-1 bg-white m-4">
          <iframe
            className="p-8"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58708.64704940373!2d-46.5588218!3d-23.12305675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec11f46f1007d%3A0xc885a2d1bf078e37!2sAtibaia%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1750542639480!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
