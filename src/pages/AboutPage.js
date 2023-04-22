import fej_pic from '../app/assets/img/profile_pic.jpg';

const AboutPage = () => {
    return (
        <div id="jst_about">
            <div className="bg-gradient-to-b from-stone-600 via-stone-700 to-stone-900">
                <div className="container mx-auto text-center text-gray-400 font-roboto_slab pt-1">
                    <h1 className="py-5 px-2 flex-initial w-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">About Me</h1>
                </div>
                <div className="container m-auto">
                    <div className="mx-5 overflow-hidden float-left mt-3 sm:mt-6">
                        <img className="rounded-full h-48 sm:h-64 lg:h-80 xl:h-96" src={fej_pic} />
                    </div>
                    <div className="container mx-auto text-gray-400 font-roboto_slab mt-3 sm:mt-6 pb-10 sm:pb-20">
                        <h1 className="py-2 px-4 flex-initial w-100 text-sm sm:text-base md:text-lg">Let me tell you a little about myself.  I am a former software engineer who spent 20 years in the material handling industry. I spent the first decade of my time there traveling the country bringing multi-million-dollar conveyor systems to life. This helped me to develop the skills needed to meet customer needs within specified deadlines. During this time, I was involved in developing software for several new conveyor products. I also helped to mentor other engineers as they began their journey in the material handling industry.</h1>
                        <h1 className="py-2 px-4 flex-initial w-100 text-sm sm:text-base md:text-lg">During my second decade in that industry, I moved into R&D and support roles. I was a key contributor on two significant new conveyor products, one of which now has a US patent on it. I also expanded my knowledge of other software development areas including relational databases, version control systems, and agile software development.</h1>
                        <h1 className="py-2 px-4 flex-initial w-100 text-sm sm:text-base md:text-lg">Over my two decades in the material handling industry, I was constantly learning and honing my software development and troubleshooting skills. During that time, I have worked extensively with many software technologies including C, C++, C#, and SQL. I also had opportunities to work occasionally with Java, PHP, HTML, CSS and Javascript.</h1>
                        <h1 className="py-2 px-4 flex-initial w-100 text-sm sm:text-base md:text-lg">After 20 years in the industry, I chose to take a career break so that my family and I could relocate back to where my wife and I lived during our formative years. This break also allowed me to take care of some family matters that would have otherwise been difficult to attend to.</h1>
                        <h1 className="py-2 px-4 flex-initial w-100 text-sm sm:text-base md:text-lg">As the end of 2022 was approaching, I decided it was time to get back into the software industry. I decided, however, that this time I would like to pivot into the world of web and app development. To prepare for this, I enrolled in the Nucamp Full Stack Web and App Development bootcamp. I completed this bootcamp in March of 2023 with a Certificate of Honor within the program. This program allowed me to get more familiar with current development technologies including Javascript, Bootstrap, React, React Native, Node.js, Express, and MongoDB.</h1>
                        <h1 className="py-2 px-4 flex-initial w-100 text-sm sm:text-base md:text-lg">Over the years, I have developed a wealth of knowledge across many facets of the software development industry. Now I would love the opportunity to use that knowledge to help you. Drop me a line below and let me know how I can take your ideas and put them into motion.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;