import bg_landing from '../app/assets/img/mountains_ferry.jpg';

const LandingPage = () => {
    return (
        <>
            <div 
                className="w-[100vw] h-[90vh] bg-no-repeat bg-cover" 
                style={{backgroundImage: `linear-gradient(rgba(255,255,255, 0.5), rgba(255,255,255, 0.5)), url(${ bg_landing})`}}>
                    <div className="container mx-auto text-black text-4xl font-roboto_slab py-40">
                        <h1>My name is Jeff Turner.  I am ready to take your ideas and put them into motion.</h1>
                    </div>
            </div>
        </>
    );
}

export default LandingPage;