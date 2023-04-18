import bee_harvest_pic from '../app/assets/img/gallery/bee_harvest.jpg';
import eagle_pic from '../app/assets/img/gallery/eagle.jpg';
import large_falls_pic from '../app/assets/img/gallery/large_falls.jpg';
import leaf_pic from '../app/assets/img/gallery/leaf_insect.jpg';
import pigeon_pic from '../app/assets/img/gallery/pigeons.jpg';
import triple_falls_pic from '../app/assets/img/gallery/triple_falls.jpg';

const PhotoPage = () => {
    return (
        <div>
            <h1 className="mx-5 py-5 px-2 flex-initial w-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">My Photos</h1>
            <div class="grid max-w-4xl mx-auto p-8" id="photo_gallery">
                <a href="#" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
                    <h1 class="text-3xl p-6">Bee</h1>
                    <img class="w-full block rounded-b" src={bee_harvest_pic} alt="Bee harvesting pollen"/>
                </a>
                <a href="#" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
                    <h1 class="text-3xl p-6">Eagle</h1>
                    <img class="w-full block rounded-b" src={eagle_pic} alt="Soaring eagle"/>
                </a>
                <a href="#" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
                    <h1 class="text-3xl p-6">Waterfall</h1>
                    <img class="w-full block rounded-b" src={large_falls_pic} alt="Waterfall"/>
                </a>
                <a href="#" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
                    <h1 class="text-3xl p-6">Insect on Leaf</h1>
                    <img class="w-full block rounded-b" src={leaf_pic} alt="Insect on leaf"/>
                </a>
                <a href="#" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
                    <h1 class="text-3xl p-6">Pigeons</h1>
                    <img class="w-full block rounded-b" src={pigeon_pic} alt="Pigeons"/>
                </a>
                <a href="#" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
                    <h1 class="text-3xl p-6">Triple Waterfall</h1>
                    <img class="w-full block rounded-b" src={triple_falls_pic} alt="Triple waterfall"/>
                </a>
            </div>
        </div>
    );
}

export default PhotoPage;