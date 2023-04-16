import bg_landing from '../app/assets/img/lightbulb_gear.jpg';

const LandingPage = () => {
    return (
        <div>
            <div 
                className="w-[100vw] h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh] bg-no-repeat bg-cover" 
                style={{backgroundImage: ` url(${ bg_landing})`}}>
                    <div className="container mx-auto text-gray-800 font-roboto_slab py-10 sm:py-20 md:py-30 lg:py-40">
                        <h1 className="py-5 px-5 flex-initial w-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">My name is Jeff Turner.</h1>
                        <h1 className="py-5 px-5 flex-initial w-1/2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">I am ready to take your ideas and put them into motion.</h1>
                    </div>
            </div>
        </div>
    );
}

export default LandingPage;