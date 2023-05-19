import fej_pic from '../app/assets/img/profile_pic.jpg';
import { GrDocumentPdf } from 'react-icons/gr';

const AboutPage = () => {
    return (
        <div id="jst_about">
            <div className="bg-gradient-to-b from-stone-600 to-stone-900">
                <div className="container mx-auto text-center text-gray-300 pt-1">
                    <h1 className="py-5 px-2 flex-initial w-100">About Me</h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
                    <div className="mx-auto overflow-hidden mt-3 sm:mt-6 md:col-start-1 md:col-end-2">
                        <img className="rounded-full h-48 sm:h-64 lg:h-80 xl:h-96" src={fej_pic} />
                    </div>
                    <div className="container md:col-start-2 md:col-span-2 px-2 md:px-3 lg:px-5 xl:px-10 2xl:px-20 text-gray-300 mt-3 sm:mt-6 pb-5 sm:pb-10">
                        <p className="py-2 px-4 flex-initial w-100 text-justify text-sm sm:text-base md:text-lg">Let me tell you a little bit about myself. I am a software engineer who spent 20 years in the material handling industry. I spent the first decade of my time there traveling the country bringing multi-million-dollar distribution centers to life. During my second decade in that industry, I moved into R&D and support roles and had the opportunity to learn new software technologies for various products that I worked on.</p>

                        <p className="py-2 px-4 flex-initial w-100 text-justify text-sm sm:text-base md:text-lg">My various roles within the material handling industry helped me to develop many skills. I understand the importance of meeting customers’ needs on time and on budget. I worked within numerous agile and non-agile development and cross-functional teams to bring conveyor systems online and to produce new software products. I worked on software across a variety of applications, including conveyor control systems, user interfaces, host communication systems, and database systems.</p>

                        <p className="py-2 px-4 flex-initial w-100 text-justify text-sm sm:text-base md:text-lg">In 2018, I decided to leave the material handling industry. I spent several years learning the ins and outs of forex (FX) trading. I worked on MQL4 algorithms to look for the ideal entry and exit points for trades. I enjoyed spending a few years applying my logic and software skills in a new arena, but at the same time, I felt I wanted to do more with my skills.</p>

                        <p className="py-2 px-4 flex-initial w-100 text-justify text-sm sm:text-base md:text-lg">In 2021, I began the journey into web development. I delved into new software languages, frameworks, and database systems. In 2022, I decided to join a software bootcamp. In March of 2023, I completed the Nucamp Full Stack Web and App Development bootcamp with a Certificate of Honor.</p>

                        <p className="py-2 px-4 flex-initial w-100 text-justify text-sm sm:text-base md:text-lg">Over the course of my career, I have developed a wealth of knowledge across many facets of the software development industry. You can find out more about my experience by clicking on the resume link below. I would love the opportunity to use my knowledge and experience to help you, whether that be through freelance or contract work or through a full-time employment opportunity. Drop me a line below and let me know how I can take your ideas and put them into motion.</p>
                    </div>
                </div>
                <div className="container mx-auto text-center pb-10 sm:pb-20">
                    <a href="./JeffTurnerResume2023.pdf" download>
                        <button className="bg-gray-400 hover:bg-amber-50 p-2 rounded">
                            <span className="inline-flex">
                                <GrDocumentPdf className='h-4 w-4 md:h-6 md:w-6 m-auto'/>
                                <p className="md:text-lg text-md pl-2 m-auto">Download Resume</p>
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;