import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="bg-gray-300 dark:bg-neutral-900" id="get-in-touch">
      <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h3 className="first-letter:text-orange-600 text-4xl font-bold text-center text-gray-900 dark:text-gray-200 pb-16">
          Get in touch
        </h3>
        <div className="flex justify-center p-6">
          <a
            href="mailto:tim920129@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Write me an email"
            className="px-6"
          >
            <AiFillMail className="cursor-pointer dark:text-gray-200 hover:scale-125 ease-in duration-200" size={30} />
          </a>
          <a
            href="https://github.com/existenztim"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my github page"
            className="px-6"
          >
            <FaGithub className="cursor-pointer dark:text-gray-200 hover:scale-125 ease-in duration-200" size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/tim-sundell-87b644252/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my linkedIn page"
            className="px-6"
          >
            <FaLinkedin className="cursor-pointer dark:text-gray-200 hover:scale-125 ease-in duration-200" size={30} />
          </a>
          <a
            href="https://goo.gl/maps/8sr45aLpEsRrRtyM7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Look where I live"
            className="px-6"
          >
            <FaMapMarkerAlt
              className="cursor-pointer dark:text-gray-200 hover:scale-125 ease-in duration-200"
              size={30}
            />
          </a>
        </div>
        <p className="text-center text-lg font-semibold text-slate-600 dark:text-slate-300">
          <a
            href="mailto:tim920129@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Write me an email"
            className="px-6"
          >
            tim920129@hotmail.com
          </a>
        </p>
      </div>
    </section>
  );
};
export default Footer;
