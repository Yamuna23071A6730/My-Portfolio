import { useEffect } from "react";
import { HiDownload } from "react-icons/hi";
import resume from "../assets/resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

export const Newsletter = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="w-full p-6 bg-white text-gray-800 mb-6 rounded-2xl shadow-xl flex justify-center items-center"
      data-aos="zoom-in"
    >
      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-6">
        <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent leading-snug">
          Want to know more about me?
          <br />
          Download my resume below
        </h3>
        <p className="text-gray-600 text-base max-w-xl">
          Stay connected and explore my journey. This resume includes my latest projects, tech stack, achievements, and certifications — all in one place.
        </p>
        <a
          href={resume}
          download
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce"
        >
          <HiDownload className="text-lg" />
          Download Resume
        </a>
      </div>
    </div>
  );
};
