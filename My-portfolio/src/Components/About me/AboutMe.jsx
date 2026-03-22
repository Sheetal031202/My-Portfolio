import React from "react";
import myImage from "../../assets/myImage.jpg"

export default function AboutMe() {
    return (


<div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col">

            {/* Background circle */}
            <div
                className="absolute right-0 -top-20
                   md:h-[720px] h-[960px]
                   md:w-[640px] w-[880px]
                   bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400
                   rounded-full transform rotate-12
                   shadow-[0_0_40px_rgba(255,165,0,0.7)]"
            />

            {/* Navbar */}
  // <section
  data-aos="fade-up"
            data-aos-delay="250"
            id="about"
            className="relative flex flex-col text-gray-600 body-font px-5 py-24"
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center">

                {/* Left Image or Illustration */}
                <div className="md:w-1/2 w-full mb-10 md:mb-0 flex justify-center">
                    <img
                        src={myImage} // replace with your image path
                        alt="Sheetal dave"
                        className="rounded-3xl w-104 h-104 object-cover"
                    />
                </div>

                {/* Right Text Content */}
                <div className="md:w-1/2 w-full md:pl-12 flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-4xl font-bold text-cyan-500 mb-4">
                        About Me
                    </h2>



                   <p className="text-white mb-4 leading-relaxed">
  Hi, I'm <span className="font-semibold">Sheetal Dave</span>, an aspiring Full-Stack Web Developer with a strong focus on the <span className="font-semibold">MERN stack</span>. I am passionate about building scalable, user-friendly, and visually engaging web applications.
</p>

<p className="text-white mb-4 leading-relaxed">
  Originally from <span className="font-semibold">Surat</span> and currently based in <span className="font-semibold">Ahmedabad</span>, I hold a <span className="font-semibold">Bachelor of Business Administration (BBA)</span> degree. I also bring 2 years of professional experience from <span className="font-semibold">ICICI Bank</span>, where I developed strong skills in discipline, responsibility, teamwork, and working in structured environments.
</p>

<p className="text-white mb-4 leading-relaxed">
  My interest in technology began during my job when I explored programming through <span className="font-semibold">C language</span>, which sparked my passion for software development. Driven by this interest, I made a career transition into the IT field to pursue my long-term goal of becoming a developer.
</p>

<p className="text-white mb-4 leading-relaxed">
  Currently, I am enhancing my technical skills through hands-on projects using <span className="font-semibold">HTML, CSS, Bootstrap, JavaScript, and the MERN stack</span>. I focus on writing clean code, building responsive designs, and continuously learning modern web technologies.
</p>

<p className="text-white mb-4 leading-relaxed">
  I am actively seeking an opportunity as a <span className="font-semibold">Full-Stack / MERN Stack Developer</span> where I can contribute, learn, and grow within a dynamic development team.
</p>

<p className="text-white leading-relaxed">
  Feel free to explore my portfolio to review my projects, and I would welcome the opportunity to connect and discuss how I can add value to your organization.
</p>
                </div>

            </div>
        </section>
           
        </div>


    );
}
