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
                        Hi, I'm <span className="font-semibold">Sheetal Dave</span>, a Full-Stack Web Developer specializing in the <span className="font-semibold">MERN stack</span>. I'm passionate about crafting user-friendly and visually appealing web applications.
                    </p>

                    <p className="text-white mb-4 leading-relaxed">
                        I utilize <span className="font-semibold">HTML, CSS, Media Queries, and Bootstrap</span> to build dynamic and interactive experiences. I enjoy leveraging the power of Bootstrap to design clean and responsive interfaces. As a creative individual, I strive to find innovative solutions and bring unique perspectives to every project.
                    </p>

                    <p className="text-white mb-4 leading-relaxed">
                        I completed my 10th from <span className="font-semibold">Archana Vidhya Niketan</span> and 12th from <span className="font-semibold">RamKrishna School</span>. Currently, I am pursuing MERN stack development at <span className="font-semibold">Red and White Multimedia Education</span> to deepen my expertise in web technologies.
                    </p>

                    <p className="text-white leading-relaxed">
                        Check out my portfolio to explore my projects, and feel free to connect for collaborations or opportunities!
                    </p>
                </div>

            </div>
        </section>
           
        </div>


        // <section
        //     id="about"
        //     className="relative flex flex-col text-gray-600 body-font px-5 py-24"
        // >
        //     <div className="container mx-auto flex flex-col md:flex-row items-center">

        //         {/* Left Image or Illustration */}
        //         <div className="md:w-1/2 w-full mb-10 md:mb-0 flex justify-center">
        //             <img
        //                 src={myImage} // replace with your image path
        //                 alt="Sheetal dave"
        //                 className="rounded-3xl w-104 h-104 object-cover"
        //             />
        //         </div>

        //         {/* Right Text Content */}
        //         <div className="md:w-1/2 w-full md:pl-12 flex flex-col items-center md:items-start text-center md:text-left">
        //             <h1 className="text-4xl font-bold text-cyan-500 mb-4">
        //                 About Me
        //             </h1>

        //             <p className="text-white mb-4 leading-relaxed">
        //                 Hi, I'm <span className="font-semibold">Sheetal Dave</span>, a Full-Stack Web Developer specializing in the <span className="font-semibold">MERN stack</span>. I'm passionate about crafting user-friendly and visually appealing web applications.
        //             </p>

        //             <p className="text-white mb-4 leading-relaxed">
        //                 I utilize <span className="font-semibold">HTML, CSS, Media Queries, and Bootstrap</span> to build dynamic and interactive experiences. I enjoy leveraging the power of Bootstrap to design clean and responsive interfaces. As a creative individual, I strive to find innovative solutions and bring unique perspectives to every project.
        //             </p>

        //             <p className="text-white mb-4 leading-relaxed">
        //                 I completed my 10th from <span className="font-semibold">Archana Vidhya Niketan</span> and 12th from <span className="font-semibold">RamKrishna School</span>. Currently, I am pursuing MERN stack development at <span className="font-semibold">Red and White Multimedia Education</span> to deepen my expertise in web technologies.
        //             </p>

        //             <p className="text-white leading-relaxed">
        //                 Check out my portfolio to explore my projects, and feel free to connect for collaborations or opportunities!
        //             </p>
        //         </div>

        //     </div>
        // </section>
    );
}
