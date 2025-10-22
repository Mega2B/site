"use client"
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ef1c6f72-7207-42e1-9b10-3b91f19bf066");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert("Erro ao enviar a mensagem. Código de erro: " + data);
      setResult(data.message);
    }
  };

  return (
    <section className="p-2 pt-12 pb-12 md:p-20 bg-[#E9E9E9] text-center" id="contact">
      <div>
        <p className="text-[#ED7C2F] font-bold uppercase pb-4">
          - Entre em Contato -
        </p>

        <h2 className="text-3xl pb-12 font-bold">Contato</h2>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 bg-white text-left p-8 m-4">
          <h2 className="font-bold">Preencha o formulário abaixo</h2>
          <form onSubmit={onSubmit} className="flex flex-col mt-4">
            <label className="flex items-center gap-2 text-sm m-0 p-0">
              <FontAwesomeIcon icon={faUser} className="w-3 h-3" />
              Seu nome
            </label>
            <input
              type="text"
              name="name"
              required
              autocomplete="name"
              placeholder="Nome"
              className="p-2 mb-4 text-sm border border-gray-300 rounded"
            />

            <label className="flex items-center gap-2 text-sm m-0 p-0">
              <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3" />
              Seu melhor e-mail
            </label>
            <input
              type="email"
              name="email"
              required
              autocomplete="email"
              placeholder="Seu melhor E-mail"
              className="p-2 mb-4 text-sm border border-gray-300 rounded"
            />

            <label className="flex items-center gap-2 text-sm m-0 p-0">
              <FontAwesomeIcon icon={faMessage} className="w-3 h-3" />
              Sua mensagem
            </label>
            <textarea
              name="message"
              required
              placeholder="Mensagem"
              className="p-2 mb-4 text-sm border border-gray-300 rounded h-32"
            ></textarea>

            <button
              type="submit"
              className="bg-[#ED7C2F] text-white p-2 rounded hover:bg-[#0A5DA6] transition-colors duration-300 ease-in-out font-bold"
            >
              Enviar
            </button>
          </form>
        </div>

        <div className="flex-1 bg-white m-4">
          <iframe
            className="p-8"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117440.15970111618!2d-46.731702999999996!3d-23.09691315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceda1245a3cd57%3A0x506aea31895b681d!2sJarinu%20-%20Aglomera%C3%A7%C3%A3o%20Urbana%20de%20Jundia%C3%AD%2C%20Jarinu%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1760453317254!5m2!1spt-BR!2sbr"
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
