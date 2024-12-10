import logo from "../assets/logo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-6 h-18 w-12" src={logo} alt="logo" />
      </div>

      {/* Social Links */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/sudeshnadas15/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-neutral-400 hover:text-blue-600 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/Sudeshnadas22/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-neutral-400 hover:text-gray-800 transition-colors duration-300"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

