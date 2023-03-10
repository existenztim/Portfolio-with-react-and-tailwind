import React from 'react';

interface resume {
  year: string;
  company: string;
  title: string;
  details: string;
  id: string;
}
const resumeData: resume[] = [
  {
    year: 'Oct 2022 - jun 2024',
    company: 'Medieinstitutet Stockholm',
    title: 'Front End Developer',
    details:
      'I study a 2-year program and I will have my exam by June 2024, I highly recommend to read my CV or contact me in order to get more details about my education.',
    id: '1',
  },
  {
    year: 'Mar 2015 - dec 2022',
    company: 'Scania Industrial maintenance AB',
    title: 'Administrator',
    details:
      'I worked as an administrator at Scanias Ordercentral with the administrative work order flow for facility and production maintainance. Everything from registration until billing. Also as an intermediary for all questions regarding ongoing assignments between customers and executing departments. The Ordercentral work as a filter and as a support team to ensure quality for the majority of incoming and outgoing work orders in Södertälje, Luleå and Oskarshamn. At this position I worked daily in smaller teams with the computer playing a central role. Our main program was IBMs Maximo. which is built of an SQL database. Sometimes we needed to use SQL queries to make filters in order to find what we were looking for. ',
    id: '2',
  },
  {
    year: 'Jun 2012 - jan 2014',
    company: 'Lantmännen Cerealia Ab',
    title: 'Process Operator',
    details:
      "As a process operator, I had a crucial role in the production flow at the Lantmännen Factory in Järna. I was the link between the team that produced the products and the team that was in control of the packaging. I did this by making sure there was always a constant flow of materials on every line so every compartment could do their tasks simultaneously even though they where at differents steps in the whole production process. This is something I hope I can apply in the world of web development as well, where it's crucial to work agile to finish things before the dealine.",
    id: '3',
  },
];
const Resume = () => {
  return (
    <section className=" bg-gray-100 dark:bg-gray-800">
      <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16" data-aos="fade" data-aos-duration="1000">
        <h3 className="first-letter:text-orange-600 text-4xl font-bold text-center text-gray-900 dark:text-gray-200 pb-16">Resumé</h3> 
        <p className="text-center py-8 dark:text-gray-200 text">Below you will find my most recent occupations. For a more detailed version
          download -&gt;
          <a className="font-semibold text-orange-600 hover:text-orange-800 ease-in duration-200" href ="/files/tsCV.pdf" attributes-list download> [ My CV ]</a> 
        </p>
          
        {resumeData.map(occupation => (
          <ol
            key={occupation.id}
            className="flex flex-col md:flex-row relative border-l border-stone-300"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-stone-300 rounded-full mt-1.5 -left-1.5 border-white" />

              <p className="flex flex-wrap gap-4 flex-col  justify-start text-xs">
                <span className="inline-block px-2 py-1 font-semibold  text-white bg-gray-900 w-32 rounded-md">
                  {occupation.year}
                </span>
                <span className="text-lg font-semibold text-slate-600 dark:text-slate-300">{occupation.company}</span>
                <span className="my-1 text-sm font-normal leading-none dark:text-orange-600">
                  {occupation.title}
                </span>
              </p>

              <p className="my-2 text-base font-normal text-stone-500 dark:text-slate-300">{occupation.details}</p>
            </li>
          </ol>
        ))}
      </div>
    </section>
  );
};

export default Resume;
