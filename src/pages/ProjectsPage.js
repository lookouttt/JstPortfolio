import jst_pic from '../app/assets/img/jst_round.png';
import hist_pic from '../app/assets/img/music_historeum.jpg';
import dbd_pic from '../app/assets/img/DBD.jpg';

const ProjectsPage = () => {
    return (
        <div id="jst_projects">
            <div className="bg-gradient-to-b from-stone-900 from-10% via-stone-400 via-40% to-stone-200 to-90% pb-10">
                <h1 className="mx-5 py-5 px-2 flex-initial w-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-50">My Projects</h1>
                <div className="container mx-auto grid md:grid-cols-3">
                    <div className="container mx-auto overflow-hidden my-10 p-3">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                            <img className="w-full" src={jst_pic} alt="Sunset in the mountains"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">My Portfolio Page</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto overflow-hidden my-10 p-3">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                            <img className="w-full" src={hist_pic} alt="Sunset in the mountains"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Music Historeum</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto overflow-hidden my-10 p-3">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                            <img className="w-full" src={dbd_pic} alt="Sunset in the mountains"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Dad's Best Dogs</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;