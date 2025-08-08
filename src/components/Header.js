import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full top-0 bg-white shadow z-50">
      <nav className="flex justify-center space-x-6 py-4 text-gray-700 font-medium">
        <a href="#home" className="hover:text-blue-500">Home</a>
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
