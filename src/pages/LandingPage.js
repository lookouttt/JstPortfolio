import bg_landing from '../app/assets/img/light_bulb.png';

const LandingPage = () => {
    return (
        <div>
            <div 
                className="bg-gradient-to-b from-stone-200 from-10% via-stone-400 via-60% to-stone-600 to-90%">
                    <div className="container m-auto grid grid-cols-2">
                        <div className="container mx-auto text-gray-800 font-roboto_slab py-10 sm:py-20 md:py-30 lg:py-40">
                            <h1 className="py-5 px-5 flex-initial text-2xl sm:text-3xl md:text-4xl lg:text-5xl">My name is Jeff Turner.</h1>
                            <h1 className="py-5 px-5 flex-initial text-xl sm:text-2xl md:text-3xl lg:text-4xl">I take your ideas and put them into motion.</h1>
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