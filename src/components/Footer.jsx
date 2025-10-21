import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black-100/55 text-white flex flex-col items-center gap-3 border-t border-gray-800">

      <div className="flex justify-center gap-6">
        <a
          href="https://www.instagram.com/sera___02/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-colors"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://github.com/rnjstpfk"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          <FaGithub size={24} />
        </a>
      </div>

      <p className="text-xs text-gray-400 mt-2">
        © 2025 권세라 | Built with React & Three.js
      </p>
    </footer>
  );
};

export default Footer;
