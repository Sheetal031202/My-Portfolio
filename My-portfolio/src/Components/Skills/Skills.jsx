import html from "../../assets/html.jpg";
import css from "../../assets/css.jpg";
import bootstrap from "../../assets/bootstrap.jpg";
import c from "../../assets/c.jpg";
import cpp from "../../assets/cpp.jpg";
import dsa from "../../assets/dsa.jpg";
import javascript from "../../assets/javascript.jpg";
import react from "../../assets/react.jpg";
import node from "../../assets/node.jpg";

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden flex flex-col text-white body-font"
        >
            <div className=" m-5 container mx-auto flex flex-wrap px-5 py-24 items-center">

                {/* Left content */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-cyan-500"
                >
                    <h1
                        data-aos="fade-right"
                        data-aos-delay="500"
                        className="sm:text-4xl text-2xl font-medium title-font mb-4 text-cyan-500"
                    >
                        My Skills 
                    </h1>
                    <p
                        data-aos="fade-right"
                        data-aos-delay="500"
                        className="leading-relaxed text-base"
                    >
                        I am a MERN Stack Developer with experience in building modern, responsive, and user-friendly web applications. I work with HTML, CSS, JavaScript, and React.js to create dynamic interfaces using component-based architecture, hooks, and React Router, along with Tailwind CSS and Bootstrap for responsive design.
                        <br />
                        <br />
                        On the backend, I develop RESTful APIs using Node.js and Express.js and manage data with MongoDB and Mongoose. I follow clean MVC practices, write optimized code, and use Git, GitHub, and Postman for version control and API testing.
                    </p>
                </div>

                {/* Right icons */}
                <div
                    data-aos="fade-left"
                    data-aos-delay="500"
                    className="flex flex-col md:w-1/2 md:pl-12"
                >
                    <nav className="flex flex-wrap list-none -mb-1">

                        <li className="lg:w-1/3 mb-4 w-1/2 flex justify-center">
                            <img src={html} alt="JavaScript" className="rounded-full w-24 h-24 object-cover" />
                        </li>

                        <li className="lg:w-1/3 mb-4 w-1/2 flex justify-center">
                            <img src={css} alt="JavaScript" className="rounded-full w-24 h-24 object-cover" />
                        </li>

                        <li className="lg:w-1/3 mb-4 w-1/2 flex justify-center">
                            <img src={bootstrap} alt="JavaScript" className="rounded-full w-24 h-24 object-cover" />
                        </li>

                        <li className="lg:w-1/3 mb-4 w-1/2 flex justify-center">
                            <img src={c} alt="JavaScript" className="rounded-full w-24 h-24 object-cover" />
                        </li>

                        <li className="lg:w-1/3 mb-4 w-1/2 flex justify-center">
                            <img src={cpp} alt="JavaScript" className="rounded-full w-24 h-24 object-cover" />
                        </li>

                        <li className="lg:w-1/3 mb-4 w-1/2 flex justify-center">
                            <img src={dsa} alt="JavaScript" className="rounded-full w-24 h-24 object-cover" />
                        </li>

                        <li className="lg:w-1/3 mb-4 w-1/2 flex justify-center">
                            <img src={javascript} alt="JavaScript" className="rounded-full w-24 h-24 object-cover" />
                        </li>

                        <li className="lg:w-1/3 mb-4 w-1/2 flex justify-center">
                            <img src={react} alt="JavaScript" className="rounded-full w-24 h-24 object-cover" />
                        </li>

                        <li className="lg:w-1/3 mb-4 w-1/2 flex justify-center">
                            <img src={node} alt="JavaScript" className="rounded-full w-24 h-24 object-cover" />
                        </li>
                    </nav>
                </div>

            </div>
        </section>
    );
}
