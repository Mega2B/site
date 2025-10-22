'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Logo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <section className="relative z-50 px-4 md:px-10 py-4 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/">
            <Image src="/logo.webp" alt="Mega2B Engenharia" width={200} height={200} className="max-w-[200px]" />
          </Link>
          <button
            onClick={toggleMenu}
            className="block md:hidden text-2xl z-50 relative"
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        </div>

        <ul className="hidden md:flex flex-row justify-around items-center flex-1 text-base md:text-sm font-bold">
          <li>
            <Link href="/" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">
              Home
            </Link>
          </li>

          <li>
            <Link href="/pages/about-us" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">
              Sobre Nós
            </Link>
          </li>

          <li>
            <Link href="/pages/services" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">
              Serviços
            </Link>
          </li>

          <li>
            <Link href="/pages/projects" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">
              Projetos
            </Link>
          </li>

          <li>
            <Link href="#contact" className="hover:text-[#0A5DA6] transition-colors duration-300 ease-in-out">
              Contato
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex flex-row justify-center items-center gap-4">
          <button className="rounded-full bg-[#ED7C2F] text-white text-sm px-4 py-2 hover:bg-[#0A5DA6] transition-colors duration-300 ease-in-out font-bold">
            <Link href="https://wa.me/5511963725837" target="_blank">
              Solicite seu orçamento
            </Link>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ease-in-out transform
        ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex flex-col items-center pt-24 gap-6 text-base pb-10">
          <ul className="flex flex-col items-center gap-4">
            <li onClick={closeMenu}>
              <Link href="/">
                Home
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/pages/about-us">
                Sobre Nós
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/pages/services">
                Serviços
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/pages/projects">
                Projetos
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#contact">
                Contato
              </Link>
            </li>
          </ul>
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
