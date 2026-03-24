import React from 'react'
import Navbar from '../Navbar/Navbar'

// ✅ Correct asset imports
import CV from "../../assets/myCv.pdf"
import hi from "../../assets/hi.jpg"
import myPc from "../../assets/myPc.jpg"

function BgCircle() {
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
            <Navbar />

            {/* circle  Section */}
            <section  data-aos="fade-up"
            data-aos-delay="250"
            className="text-white body-font z-10 relative">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                    {/* Left content */}
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative">

                        <img
                            src={hi}  data-aos="fade-up"  data-aos-delay="400"
                            alt="hi"
                            className="absolute rounded-3xl top-[350px] left-44 md:top-[-30px] md:left-[450px]
                         transform -translate-x-1/2 -translate-y-1/2 w-20 h-20"
                        />

                        <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-white">
                             👋  Hi! I'm Sheetal Dave
                        </h1>

                        <p className="mb-8 leading-relaxed">
                            I am a Full-Stack Web Developer specializing in <br/>the MERN stack (MongoDB,Express.js, React.js, Node.js).            </p>

                        <div className="flex justify-center">
                            <a href={CV} download>
                                <button
                                    className="inline-flex text-white bg-cyan-500 border-0 py-2 px-6
                             focus:outline-none hover:bg-cyan-600
                             hover:shadow-[0_0_40px_rgba(55,10,0,0.7)]
                             rounded-full text-lg transition"
                                >
                                    Download CV
                                </button>
                            </a>
                            
                        </div>

                    </div>

                    {/* Right image */}
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                        
                            src={myPc}
                            alt="hero"
                            className="object-cover object-center rounded-full w-80 h-80"
                        />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default BgCircle
