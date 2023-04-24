import bg_landing from '../app/assets/img/light_bulb.png';

const LandingPage = () => {
    return (
        <div>
            <div 
                className="bg-gradient-to-b from-stone-200 from-10% via-stone-400 via-60% to-stone-600 to-90%">
                    <div className="container m-auto grid grid-cols-2">
                        <div className="container mx-auto text-gray-800 py-10 sm:py-20 md:py-30 lg:py-40">
                            <h1 className="py-5 px-5 flex-initial">My name is Jeff</h1>
                            <h2 className="py-5 px-5 flex-initial">I'm a creative software developer with experience in front-end and back-end development. Let me take your ideas and put them into motion.</h2>
                        </div>
                        <div className="container mx-auto max-w-sm overflow-hidden mt-5 sm:mt-10 mb-60">
                            <img className="" src={bg_landing} />
                        </div>
                    </div>

            </div>
        </div>
    );
}

export default LandingPage;