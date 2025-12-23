import React from "react";

export default function Contact() {
  return (
    <section data-aos="fade-up"
            data-aos-delay="250"
      id="contact"
      className="relative overflow-hidden py-12 lg:py-20"
    >
      <div className="mx-auto max-w-screen-md px-4">
        
        {/* Heading */}
        <h2 className="mb-8 text-4xl font-extrabold text-center text-cyan-500">
          Contact Me
        </h2>

        {/* Form */}
        <form className="space-y-8">
          
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xl font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              required
              className="w-full p-3 text-gray-900 rounded-lg bg-gray-50 border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-xl font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              placeholder="Write your message..."
              required
              className="w-full p-3 text-gray-900 rounded-lg bg-gray-50 border border-gray-300 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-cyan-500 rounded-full hover:bg-cyan-600 transition shadow-[0_0_20px_rgba(255,165,0,0.6)]"
            >
              Send Message
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
