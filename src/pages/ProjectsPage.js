import jst_pic from '../app/assets/img/jst_round.png';
import hist_pic from '../app/assets/img/music_historeum.jpg';
import dbd_pic from '../app/assets/img/DBD.jpg';

const ProjectsPage = () => {
    return (
        <div id="jst_projects">
            <div className="bg-gradient-to-b from-stone-900 from-4% lg:from-10% via-stone-400 via-40% to-stone-200 to-90% pb-10">
                <h1 className="mx-5 py-5 px-2 flex-initial w-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-50">My Projects</h1>
                <div className="container mx-auto grid lg:grid-cols-3">
                    <a href="https://www.musichistoreum.com">
                        <div className="container mx-auto overflow-hidden my-10 p-3">
                            <div className="max-w-sm rounded overflow-hidden shadow-md mx-auto hover:shadow-xl hover:bg-amber-50">
                                <img className="w-full" src={hist_pic} alt="LP Collection"/>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Music Historeum</div>
                                    <p className="lg:text-gray-700 text-gray-950 text-base">
                                        This site was my Nucamp Honors Portfolio Project. This is a hobby site that I will be continually updating for the foreseeable future. It allowed me to utilize my skills in both front-end and back-end development. It was created with React, Reactstrap, Node.js, Express, PostgreSQL, and Python.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.dadsbestdogs.com">
                        <div className="container mx-auto overflow-hidden my-10 p-3">
                            <div className="max-w-sm rounded overflow-hidden shadow-md mx-auto hover:shadow-xl hover:bg-amber-50">
                                <img className="w-full" src={dbd_pic} alt="Dads Best Dogs Logo"/>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Dad's Best Dogs</div>
                                    <p className="lg:text-gray-700 text-gray-800 text-base">
                                        This is the first contracted site that I created for a local food truck business that just recently started operating. It was requested and launched within 10 days. This site was built using Bootstrap.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div className="container mx-auto overflow-hidden my-10 p-3">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                            <img className="w-full" src={jst_pic} alt="JST Site Logo"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">This Portfolio Page</div>
                                <p className="text-gray-700  text-base">
                                    This site you are currently viewing was built with React and Tailwind CSS.
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