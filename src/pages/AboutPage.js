import fej_pic from '../app/assets/img/profile_pic.jpg';

const AboutPage = () => {
    return (
        <div id="about_me">
            <div className="w-[100vw] h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh]
                            bg-no-repeat bg-cover bg-gradient-to-b from-stone-600 via-stone-700 to-stone-900">
                <div className="container m-auto grid grid-cols-2">
                    <div className="container mx-auto max-w-sm overflow-hidden my-10 sm:my-20">
                        <img className="rounded-full h-96" src={fej_pic} />
                    </div>
                    <div className="container mx-auto text-gray-400 font-roboto_slab my-10 sm:my-20">
                        <h1 className="py-5 px-2 flex-initial w-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">About Me.</h1>
                        <h1 className="py-5 px-2 flex-initial w-100 text-lg sm:text-xl md:text-2xl">I am a former software engineer from the material handling industry now working within the web and app development space. Working in the material handling industry, I dealt with many complex situations in order to move boxes from point A to point B. My 20 years experience in that arena helped me to hone my ability to work through any challenges necessary to meet client expectations. Reach out and let me take that experience and put it to work for you.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;