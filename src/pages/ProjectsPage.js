import { useEffect } from "react";
// import jst_pic from '../app/assets/img/jst_round.png';
// import hist_pic from '../app/assets/img/music_historeum.jpg';
// import dbd_pic from '../app/assets/img/DBD.jpg';

const ProjectsPage = () => {

    useEffect(() => {
        const panes = document.querySelectorAll('.pane');
        let activePane = panes[0];
    
        panes.forEach((pane) => {
            pane.addEventListener('click', () => {
                activePane.classList.remove('active');
                activePane = pane;
                activePane.classList.add('active');
            });
        });
    },[]);

    return (
        <div id="jst_projects">
            <div className="antialiased bg-gradient-to-b from-stone-900 from-4% lg:from-10% via-stone-400 via-40% to-stone-200 to-90% pb-10">
                <h1 className="mx-5 py-5 px-2 flex-initial w-1/2 text-slate-50">My Projects</h1>
                <h2 className="mx-5 pt-5 px-2 flex-initial text-slate-100">
                    Here are some of the projects that I have created. I have tried to use a variety of frameworks on each project to enhance my learning. This portfolio site that you are viewing now utilizes HTML, JavaScript, React, and Tailwind CSS.
                </h2>
                <div className="antialiased flex flex-col items-stretch justify-center h-[80vh] sm:flex-row sm:items-center">
                    <div className="flex flex-col flex-grow items-stretch max-w-2xl min-w-md w-full sm:flex-row sm:h-[60vh] sm:overflow-hidden">
                        <div className="active cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all">
                            <div className="absolute background bg-center bg-cover bg-mh-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
                            <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
                            <div className="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 mx-3 sm:mb-3 sm:ml-2 transition-all z-30">
                                {/* <div className="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-red-500 w-10"><i className="fas fa-walking"></i></div> */}
                                <div className="content flex flex-col justify-center leading-tight text-white">
                                    <div className="ease-in-out font-bold duration-700 opacity-0  transform transition-all translate-x-8">Music Historeum</div>
                                    <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">This site is my Nucamp Honors Portfolio Project. I am a big music enthusiast, and so I chose to use that as the basis for my project. I really enjoyed utilizing my skills in both front-end and back-end development on this project. The project utilizes HTML, JavaScript, React, Reactstrap, Node.js, Express, PostgreSQL, and Python. This project is a passion project of mine. There is still much work to do on this project, and I look forward to improving and expanding it in the coming years.</div>
                                </div>
                            </div>
                        </div>
                        <div className="undefined cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all">
                            <div className="absolute background bg-center bg-cover bg-dbd-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
                            <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
                            <div className="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 mx-3 sm:mb-3 sm:ml-2 transition-all z-30">
                                {/* <div className="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-yellow-500 w-10"><i className="fas fa-apple-alt"></i></div> */}
                                <div className="content flex flex-col justify-center leading-tight text-white">
                                    <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Dad's Best Dogs</div>
                                    <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">This is the first contracted site that I created for a local food truck business that just recently started operating. The initial goal was to create a web presence for them that they can utilize to expand their visibility in the marketplace. There will be additional opportunities to expand the website as they expand their business in the coming years. The site was requested and launched within 10 days. This site was built utilizing HTML, Javascript, and Bootstrap.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );

    // return (
    //     <div id="jst_projects">
    //         <div className="bg-gradient-to-b from-stone-900 from-4% lg:from-10% via-stone-400 via-40% to-stone-200 to-90% pb-10">
    //             <h1 className="mx-5 py-5 px-2 flex-initial w-1/2 text-slate-50">My Projects</h1>
    //             <div className="container mx-auto grid lg:grid-cols-3">
    //                 <a href="https://www.musichistoreum.com">
    //                     <div className="container mx-auto overflow-hidden my-10 p-3">
    //                         <div className="max-w-sm rounded overflow-hidden shadow-md mx-auto hover:shadow-xl hover:bg-amber-50">
    //                             <img className="w-full" src={hist_pic} alt="LP Collection"/>
    //                             <div className="px-6 py-4">
    //                                 <div className="font-bold text-xl mb-2">Music Historeum</div>
    //                                 <p className="lg:text-gray-700 text-gray-950 text-base">
    //                                     This site was my Nucamp Honors Portfolio Project. This is a hobby site that I will be continually updating for the foreseeable future. It allowed me to utilize my skills in both front-end and back-end development. It was created with React, Reactstrap, Node.js, Express, PostgreSQL, and Python.
    //                                 </p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </a>
    //                 <a href="https://www.dadsbestdogs.com">
    //                     <div className="container mx-auto overflow-hidden my-10 p-3">
    //                         <div className="max-w-sm rounded overflow-hidden shadow-md mx-auto hover:shadow-xl hover:bg-amber-50">
    //                             <img className="w-full" src={dbd_pic} alt="Dads Best Dogs Logo"/>
    //                             <div className="px-6 py-4">
    //                                 <div className="font-bold text-xl mb-2">Dad's Best Dogs</div>
    //                                 <p className="lg:text-gray-700 text-gray-800 text-base">
    //                                     This is the first contracted site that I created for a local food truck business that just recently started operating. It was requested and launched within 10 days. This site was built using Bootstrap.
    //                                 </p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </a>
    //                 <div className="container mx-auto overflow-hidden my-10 p-3">
    //                     <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
    //                         <img className="w-full" src={jst_pic} alt="JST Site Logo"/>
    //                         <div className="px-6 py-4">
    //                             <div className="font-bold text-xl mb-2">This Portfolio Page</div>
    //                             <p className="text-gray-700  text-base">
    //                                 This site you are currently viewing was built with React and Tailwind CSS.
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default ProjectsPage;