import React from "react";
import Slider from "react-slick";
import charity from "../../assets/bootstrap1.png";
import docmed from "../../assets/docmed.png";
import chariter from "../../assets/chariter.png";
import node1 from "../../assets/node1_normalJson.png";
import node2 from "../../assets/node2_adminPanel.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const listProjects = [
    {
      id: 1,
      image: charity,
      title: "Love and care charity",
      description: "Html bootstrap Project 1",
      link: "/bootstrap1/index.html", // must be in public/
    },
    {
      id: 2,
      image: docmed,
      title: "docmed",
      description: "Html bootstrap Project 2",
      link: "/docmed/index.html",
    },
    {
      id: 3,
      image: chariter,
      title: "chariter",
      description: "Html bootstrap Project 3",
      link: "/charieter/index.html",
    },
    {
      id: 4,
      image: node1,
      title: "Student Registration",
      description:
        "Node project 1 - Normal CRUD functionality allowing users to add, update, delete, and view",
      link: "https://node-1-1.onrender.com/",
    },
    {
      id: 5,
      image: node2,
      title: "Admin panel",
      description:
        "Node project 2 - Passport.js and session-based login system, login, logout",
      link: "https://node-2-admin-panel-2.onrender.com/",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,           // ✅ enable automatic scroll
    autoplaySpeed: 2000,      // ✅ 3 seconds per slide
    pauseOnHover: true,       // ✅ pause when hovered
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 700, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden flex flex-col text-white py-24"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-cyan-500">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {listProjects.map((project) => (
            <div key={project.id} className="p-4">
              <div
                className="h-full border border-cyan-400 rounded-lg overflow-hidden
                           shadow-[0_0_15px_rgba(255,165,0,0.6)]
                           hover:scale-105 transition-transform duration-300"
              >
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover cursor-pointer"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}

                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}