import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and About Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-white">ZenBlazeMedia</h2>
          <p className="mt-4 text-center md:text-left">
            Elevating your brand with creativity and technical expertise in
            media and design.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                className="hover:text-indigo-400 transition-colors cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                className="hover:text-indigo-400 transition-colors cursor-pointer"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media and Contact Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/zenblazeOfficial?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://x.com/MayankS70553167?t=4ewck12UvxiyYAWMvouSqw&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/zenblazemedia?igsh=YjNwZzAxbHU1NWR5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/zenblazemedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ZenBlazeMedia. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
