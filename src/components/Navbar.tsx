import { useState, useEffect } from "react";
import nameLogo from '../assets/Logo.svg';
import dropDownAero from '../assets/dropdownAero.svg';

const navItems = ['home', 'works', 'about-me', 'contacts'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Auto-close menu if window resized >= lg (1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex justify-between items-center max-w-screen-xl m-auto lg:w-auto md:px-14 mt-10 px-20 py-2 sm:px-20 box-border">
      {/* Left side: Logo + Name */}
      <div className="flex items-center gap-4">
        <img className="w-7 h-7 md:w-9 md:h-9" src={nameLogo} alt="Logo" />
        <p className="text-lg md:text-xl font-semibold">Nikhil</p>
      </div>

      {/* Right side navigation */}
      <div className="text-[#ABB2BF] relative">

        {/* Full navbar on lg and up */}
        <div className="hidden lg:flex gap-8 items-center text-lg font-medium">
          {navItems.map((item) => (
            <span
              key={item}
              className="flex items-center gap-1 hover:text-[#C778DD] cursor-pointer"
            >
              <p className="text-[#C778DD] font-semibold">#</p>
              {item}
            </span>
          ))}
          <span className="flex items-center gap-1 cursor-pointer hover:text-[#C778DD] font-semibold">
            EN
            <img className="w-4 h-4 md:w-5 md:h-5" src={dropDownAero} alt="Dropdown Arrow" />
          </span>
        </div>

        {/* Menu button on screens below lg */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex lg:hidden items-center gap-2 text-[#ABB2BF] font-semibold cursor-pointer"
          aria-label="Toggle menu"
        >
          Menu
          <img className="w-4 h-4" src={dropDownAero} alt="Dropdown Arrow" />
        </button>

        {/* Dropdown menu on screens below lg */}
        {menuOpen && (
          <ul className="absolute right-0 mt-2 bg-[#282C33] border border-[#ABB2BF] rounded-md py-2 w-40 text-white font-normal flex flex-col gap-2 z-50 lg:hidden">
            {navItems.map(item => (
              <li
                key={item}
                className="px-4 py-1 hover:bg-[#C778DD] cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                #{item}
              </li>
            ))}
            <li className="px-4 py-1 hover:bg-[#C778DD] cursor-pointer"><span className="flex gap-1">EN<img className="w-4 h-4 md:w-4 md:h-4" src={dropDownAero} alt="Dropdown Arrow" /></span></li>
          </ul>
        )}
      </div>
    </nav>
  );
}
