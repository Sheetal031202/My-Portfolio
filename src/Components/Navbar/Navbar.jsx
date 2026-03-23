import React from "react";
import myImage from "../../assets/myImage.jpg"

export default function Navbar() {
  const listNavbar = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "About Me", link: "#about" },
        { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header data-aos="fade-up" className="text-gray-600 body-font z-10 relative">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

        {/* Logo */}
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <img style={{width:"50px", height:"60px"}}
            src={myImage}
            alt="hero"
            className="object-cover object-center rounded-full w-80 h-80"
          />
          <span className="ml-3 text-3xl font-bold text-cyan-500">
            Portfolio
          </span>
        </a>

        {/* Nav links */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center text-white text-base">
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="mr-5 hover:text-cyan-500"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Button */}
        <button className="inline-flex rounded-4xl items-center py-1 px-7 bg-cyan-500 text-base text-white mt-4 md:mt-0 border border-blue hover:border-white-300 hover:bg-cyan-600 transition">
          <a href="#contact">Contact me</a>
        </button>

      </div>
    </header>
  );
}
