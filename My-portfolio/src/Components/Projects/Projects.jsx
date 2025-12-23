import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/image1.jpg";
 import image2 from "../../assets/image2.jpg";
 import image3 from "../../assets/image3.jpg";
 import image4 from "../../assets/image4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const listProjects = [
    { id: 1, image: image1, title: "Project 1", description: "Photo description for project 1" },
     { id: 2, image: image2, title: "Project 2", description: "Photo description for project 2" },
     { id: 3, image: image3, title: "Project 3", description: "Photo description for project 3" },
     { id: 4, image: image4, title: "Project 4", description: "Photo description for project 4" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 700,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      id="projects"
      data-aos="fade-up"
      data-aos-delay="400"
      className="relative overflow-hidden flex flex-col text-white py-24"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-cyan-500">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {listProjects.map((project) => (
            <div key={project.id} className="p-4">
              <div className="h-full border border-cyan-400 rounded-lg overflow-hidden
                              shadow-[0_0_15px_rgba(255,165,0,0.6)]
                              hover:scale-105 transition-transform duration-300">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-300">
                    {project.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
