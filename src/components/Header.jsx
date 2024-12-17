import { Mail } from "lucide-react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header
      id="/"
      className="fixed w-full max-w-3xl inset-x-0 mx-auto z-30 border-green-500 top-4 backdrop-blur-lg flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4  shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-2 rounded-full border-solid border-white/10 transition-transform duration-500 "
    >
      {/* Branding */}
      <div>
        <div className="text-sm sm:text-xl font-bold bg-gradient-to-tl from-slate-800 via-indigo-500 to-zinc-400  bg-clip-text text-transparent">
          <a href="/">ZenBlazeMedia</a>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="backdrop-blur-lg flex justify-center gap-2 items-center lg:space-x-6 transition-all duration-500 ease-in-out overflow-hidden font-semibold">
        <ul className="flex space-x-2 lg:space-x-6 lg:py-0 text-center font-poppins text-xs sm:text-sm font-light uppercase">
          <li className="hover:text-purple-300 transition duration-300 ease-in-out cursor-pointer sm:block hidden">
            <Link to="home" smooth duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-purple-300 transition duration-300 ease-in-out cursor-pointer">
            <Link to="portfolio" smooth duration={500}>
              Portfolio
            </Link>
          </li>
          <li className="hover:text-purple-300 transition duration-300 ease-in-out cursor-pointer">
            <Link to="services" smooth duration={500}>
              Services
            </Link>
          </li>
          <li className="hover:text-purple-300 transition duration-300 ease-in-out cursor-pointer sm:block hidden">
            <Link to="faq" smooth duration={500}>
              FAQ
            </Link>
          </li>
          <li className="hover:text-purple-300 transition duration-300 ease-in-out cursor-pointer">
            <Link to="contact" smooth duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        <div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScr6ELJkVDaXaeFNmj5ln7VS5-sw43pSa_TlkbtCDQ6v2E1sw/viewform?embedded=true"
            target="_blank"
          >
            <div className="bg-indigo-400/30 rounded-full p-2 text-indigo-600 hover:text-white transition duration-200 ease-in hover:bg-indigo-300">
              <Mail className="" />
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
