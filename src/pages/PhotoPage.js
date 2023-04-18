import bee_harvest_pic from '../app/assets/img/gallery/bee_harvest.jpg';
import eagle_pic from '../app/assets/img/gallery/eagle.jpg';
import large_falls_pic from '../app/assets/img/gallery/large_falls.jpg';
import leaf_pic from '../app/assets/img/gallery/leaf_insect.jpg';
import pigeon_pic from '../app/assets/img/gallery/pigeons.jpg';
import triple_falls_pic from '../app/assets/img/gallery/triple_falls.jpg';

const PhotoPage = () => {
    return (
        <div className="bg-gradient-to-b from-stone-200 from-10% via-stone-400 via-60% to-stone-600 to-90%">
            <h1 className="mx-5 py-5 px-2 flex-initial text-2xl sm:text-3xl md:text-4xl lg:text-5xl">My Photos</h1>
            <div className="container mx-auto grid grid-cols-3 border-2" id="gallery">
                <div className="container mx-auto overflow-hidden my-10 p-3 transform transition duration-500 hover:scale-150 hover:translate-x-32 hover:translate-y-20 hover:z-10">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                        <img className="w-full" src={bee_harvest_pic} alt="Bee harvesting pollen"/>
                    </div>
                </div>
                <div className="container mx-auto overflow-hidden my-10 p-3 transform transition duration-500 hover:scale-150">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={eagle_pic} alt="Eagle soaring"/>
                    </div>
                </div>
                <div className="container mx-auto overflow-hidden my-10 p-3 transform transition duration-500 hover:scale-150">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={large_falls_pic} alt="Waterfall"/>
                    </div>
                </div>
                <div className="container mx-auto overflow-hidden my-10 p-3 transform transition duration-500 hover:scale-150">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={leaf_pic} alt="Insect on a leaf"/>
                    </div>
                </div>
                <div className="container mx-auto overflow-hidden my-10 p-3 transform transition duration-500 hover:scale-150">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={pigeon_pic} alt="Three pigeons"/>
                    </div>
                </div>
                <div className="container mx-auto overflow-hidden my-10 p-3 transform transition duration-500 hover:scale-150">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={triple_falls_pic} alt="Triple waterfall"/>
                    </div>
                </div>
            </div>
            {/* <div class="grid grid-cols-6 mx-auto p-8" id="photo_gallery">
                <a href="#" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
                    <img class="w-full block rounded-b" src={bee_harvest_pic} alt="Bee harvesting pollen"/>
                </a>
                <a href="#" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
                    <img class="w-full block rounded-b" src={eagle_pic} alt="Soaring eagle"/>
                </a>
                <a href="#" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
                    <img class="w-full block rounded-b" src={large_falls_pic} alt="Waterfall"/>
                </a>
                <a href="#" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
                    <img class="w-full block rounded-b" src={leaf_pic} alt="Insect on leaf"/>
                </a>
                <a href="#" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
                    <img class="w-full block rounded-b" src={pigeon_pic} alt="Pigeons"/>
                </a>
                <a href="#" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
                    <img class="w-full block rounded-b" src={triple_falls_pic} alt="Triple waterfall"/>
                </a>
            </div> */}
        </div>
    );
}

export default PhotoPage;