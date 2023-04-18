import jst_pic from '../app/assets/img/jst_logo.png';
import hist_pic from '../app/assets/img/music_historeum.jpg';
import dbd_pic from '../app/assets/img/DBD.jpg';

const ProjectsPage = () => {
    return (
        <div>
            <h1 className="mx-5 py-5 px-2 flex-initial w-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">My Projects</h1>
            <div className="container mx-auto grid grid-cols-3">
                <div className="container mx-auto overflow-hidden my-10">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={jst_pic} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div class="font-bold text-xl mb-2">My Portfolio Page</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto overflow-hidden my-10">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={hist_pic} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Music Historeum</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto overflow-hidden my-10">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={dbd_pic} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Dad's Best Dogs</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProjectsPage;