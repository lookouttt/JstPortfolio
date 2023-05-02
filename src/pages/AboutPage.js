import fej_pic from '../app/assets/img/profile_pic.jpg';
import { GrDocumentPdf } from 'react-icons/gr';

const AboutPage = () => {
    return (
        <div id="jst_about">
            <div className="bg-gradient-to-b from-stone-600 via-stone-700 to-stone-900">
                <div className="container mx-auto text-center text-gray-400 pt-1">
                    <h1 className="py-5 px-2 flex-initial w-100">About Me</h1>
                </div>
                <div className="container m-auto grid grid-cols-1 md:grid-cols-3">
                    <div className="mx-5 overflow-hidden mt-3 sm:mt-6 md:col-start-1 md:col-end-2">
                        <img className="rounded-full h-32 sm:h-64 lg:h-80 xl:h-96" src={fej_pic} />
                    </div>
                    <div className="container md:col-start-2 md:col-span-2 px-5 md:px-10 lg:px-16 xl:px-20 text-gray-400 mt-3 sm:mt-6 pb-5 sm:pb-10">
                        <p className="py-2 px-4 flex-initial w-100 text-justify text-sm sm:text-base md:text-lg">Let me tell you a little bit about myself. I am a software engineer who spent 20 years in the material handling industry. I spent the first decade of my time there traveling the country bringing multi-million-dollar conveyor systems to life. During my second decade in that industry, I worked in various R&D and support roles. My varied roles over the last 25 years has helped me to develop many skills, including:</p>
                        <p className="py-2 px-4 flex-initial w-100 text-justify text-sm sm:text-base md:text-lg">
                            <ul className="list-disc ml-10">
                                <li>Meeting customers’ needs on time and on budget</li>
                                <li>Exceptional hardware and software troubleshooting skills</li>
                                <li>Continuously learning new software languages, frameworks, and technologies, including:</li>
                                    <ul className="columns-4 list-disc marker:text-slate-300 ml-10">
                                        <li>C</li>
                                        <li>C++</li>
                                        <li>C#</li>
                                        <li>JavaScript</li>
                                        <li>Python</li>
                                        <li>Java</li>
                                        <li>PHP</li>
                                        <li>Git</li>
                                        <li>SVN</li>
                                        <li>MS SQL</li>
                                        <li>PostgreSQL</li>
                                        <li>MongoDB</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Tailwind CSS</li>
                                        <li>Bootstrap</li>
                                        <li>React</li>
                                        <li>React Native</li>
                                        <li>Node.js</li>
                                        <li>Express</li>
                                    </ul>
                                <li>Working within numerous agile and non-agile development teams to produce new software products, including one where I am a joint U.S. patent holder</li>
                                <li>Working on software across a variety of specialties including conveyor control systems, user interfaces, host communication systems, database systems, and web development</li>
                            </ul>
                        </p>
                        <p className="py-2 px-4 flex-initial w-100 text-justify text-sm sm:text-base md:text-lg">After 20 years in the material handling industry, I chose to take a career break so that I could relocate closer to family. I remodeled two houses during this time. I was able to assist with several important family matters. I became our family’s primary caregiver during the COVID pandemic. I also took time to enhance my knowledge during this time by learning new skills involving currency trading, data analysis, and web and app development.</p>
                        <p className="py-2 px-4 flex-initial w-100 text-justify text-sm sm:text-base md:text-lg">As the end of 2022 approached, I decided it was time for me to get back into the software industry. In March of 2023, I completed the Nucamp Full Stack Web and App Development bootcamp with a Certificate of Honor. I greatly enjoyed learning these new technologies, and I look forward to using them as I pivot into web and app development.</p>
                        <p className="py-2 px-4 flex-initial w-100 text-justify text-sm sm:text-base md:text-lg">I have developed a wealth of knowledge across many facets of the software development industry over the last 25 years. I would love the opportunity to use that knowledge to help you. Drop me a line below and let me know how I can take your ideas and put them into motion.</p>
                    </div>
                </div>
                <div className="container mx-auto text-center pb-10 sm:pb-20">
                    <a href="./JeffTurnerResume2023.pdf" download>
                        <button className="bg-gray-400 hover:bg-amber-50 p-2 rounded">
                            <span className="inline-flex">
                                <GrDocumentPdf className='h-4 w-4 md:h-6 md:w-6 mt-1 md:mt-0 mx-auto'/>
                                <p className="md:text-lg text-md ml-4">Download Resume</p>
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;