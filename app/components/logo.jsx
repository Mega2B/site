'use client';
import { useState } from 'react';
import Image from 'next/image';
import { faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Logo() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <section className="relative z-50 px-4 md:px-10 py-4 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo e botão mobile */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Image src="/logo.png" alt="Logo" width={200} height={200} className="max-w-[200px]" />

          <button
            onClick={toggleMenu}
            className="block md:hidden text-2xl z-50 relative"
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex flex-row justify-around items-center flex-1 text-base md:text-lg gap-6">
          <li>Home</li>
          <li>Sobre Nós</li>
          <li>Serviços</li>
          <li>Clientes</li>
          <li>Equipe</li>
          <li>Contato</li>
        </ul>

        {/* Botão e lupa desktop */}
        <div className="hidden md:flex flex-row justify-center items-center gap-4">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6 h-6" />
          <button className="rounded-full bg-[#ED7C2F] text-white px-4 py-2">
            Solicite seu orçamento
          </button>
        </div>
      </div>

      {/* Overlay escuro */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Menu Mobile deslizante do topo */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ease-in-out transform
        ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex flex-col items-center pt-24 gap-6 text-base pb-10">
          <ul className="flex flex-col items-center gap-4">
            <li onClick={closeMenu}>Home</li>
            <li onClick={closeMenu}>Sobre Nós</li>
            <li onClick={closeMenu}>Serviços</li>
            <li onClick={closeMenu}>Clientes</li>
            <li onClick={closeMenu}>Equipe</li>
            <li onClick={closeMenu}>Contato</li>
          </ul>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6 h-6" />
          <button
            onClick={closeMenu}
            className="rounded-full bg-[#ED7C2F] text-white px-4 py-2"
          >
            Solicite seu orçamento
          </button>
        </div>
      </div>
    </section>
  );
}
