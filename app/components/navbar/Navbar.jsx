'use client';
import React, { useState, useEffect } from 'react';
import './navbar.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(); // Link attivo

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Gestione dello scroll per cambiare lo stato della navbar
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Gestione IntersectionObserver per aggiornare il link attivo
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.5, // Attiva quando il 50% della sezione è visibile
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Funzione per aggiungere la classe 'active' alla voce della navbar
  const getLinkClass = (hash) => {
    return activeLink === hash ? 'active text-white' : 'text-gray-400';
  };

  // Controlla se uno dei link del dropdown "The Event" è attivo
  const isEventActive = ['#partners', '#speakers', '#agenda'].includes(activeLink);

  return (
    <div
      className={`fixed top-0 w-full bg-black text-white p-4 z-10 transition-all duration-300 ${
        isScrolled ? 'bg-white/60 backdrop-blur-lg text-black' : 'bg-black'
      }`}
    >
      <div className="flex justify-between items-center md:min-h-[50px] md:mx-10">
        <div className="text-lg md:text-3xl font-semibold">
          <span className={`${isScrolled ? 'text-black' : 'text-white'}`}>Qiskit Fall Fest 2024 </span>
          <span className="text-[#FF7EB5] mx-2">/</span>
          <span className="text-[#9D5CFD]">Catania</span>
        </div>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        <ul className="hidden md:flex flex-row items-center gap-10 text-lg">
          <li className={getLinkClass('#about')}>
            <a href="#about">About</a>
          </li>
          <li
            className={`relative ${isEventActive ? 'active text-white' : 'text-gray-400'}`}
            onClick={toggleDropdown}
          >
            <span>The Event</span>
            <ArrowDropDownIcon />
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-black text-white shadow-lg rounded">
                <li className={getLinkClass('#partners')}>
                  <a href="#partners" onClick={() => setActiveLink('#partners')}>
                    Partners
                  </a>
                </li>
                <li className={getLinkClass('#speakers')}>
                  <a href="#speakers" onClick={() => setActiveLink('#speakers')}>
                    Speakers
                  </a>
                </li>
                <li className={getLinkClass('#agenda')}>
                  <a href="#agenda" onClick={() => setActiveLink('#agenda')}>
                    Agenda
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className={getLinkClass('#schedule')}>
            <a href="#schedule">Schedule</a>
          </li>
          <li className={getLinkClass('#faq')}>
            <a href="/faq">FAQ</a>
          </li>
          <li className={getLinkClass('#register')}>
            <a href="#register">Register</a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-4 text-lg py-4">
          <li className={getLinkClass('#about')}>
            <a href="#about" onClick={() => setActiveLink('#about')}>
              About
            </a>
          </li>
          <li className="relative" onClick={toggleDropdown}>
            <span>The Event</span>
            <ArrowDropDownIcon />
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-full bg-black text-white shadow-lg">
                <li className={getLinkClass('#partners')}>
                  <a href="#partners" onClick={() => setActiveLink('#partners')}>
                    Partners
                  </a>
                </li>
                <li className={getLinkClass('#speakers')}>
                  <a href="#speakers" onClick={() => setActiveLink('#speakers')}>
                    Speakers
                  </a>
                </li>
                <li className={getLinkClass('#agenda')}>
                  <a href="#agenda" onClick={() => setActiveLink('#agenda')}>
                    Agenda
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className={getLinkClass('#news')}>
            <a href="#news" onClick={() => setActiveLink('#news')}>
              News
            </a>
          </li>
          <li className={getLinkClass(' ')}>
            <a href="/faq" onClick={() => setActiveLink(' ')}>
              FAQ
            </a>
          </li>
          <li className={getLinkClass('#register')}>
            <a href="#register" onClick={() => setActiveLink('#register')}>
              Register
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
