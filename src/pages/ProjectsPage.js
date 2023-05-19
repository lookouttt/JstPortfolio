import { useEffect } from "react";

const ProjectsPage = () => {

    useEffect(() => {
        const panes = document.querySelectorAll('.pane');
        let activePane = panes[0];
    
        panes.forEach((pane) => {
            pane.addEventListener('click', () => {
                activePane.classList.remove('active');
                let currentHref = activePane.getElementsByClassName('proj-href')
                currentHref[0].classList.remove('pointer-events-auto');
                currentHref[0].classList.add('pointer-events-none');
                activePane = pane;
                activePane.classList.add('active');
                let newHref = activePane.getElementsByClassName('proj-href');
                newHref[0].classList.remove('pointer-events-none');
                newHref[0].classList.add('pointer-events-auto');
            });
        });
    },[]);

    return (
        <div id="jst_projects">
            <div className="antialiased bg-gradient-to-b from-stone-900  to-stone-300 to-90% pb-10">
                <h1 className="mx-5 py-5 px-2 flex-initial w-1/2 text-slate-50">My Projects</h1>
                <h2 className="mx-5 py-5 px-2 flex-initial text-slate-100">
                    Here are some of the projects that I have created. I have tried to use a variety of frameworks on each project to enhance my learning. This portfolio site that you are viewing now utilizes HTML, JavaScript, React, and Tailwind CSS.
                </h2>
                <div className="antialiased flex flex-col items-stretch justify-center h-[80vh] md:flex-row md:items-center">
                    <div className="flex flex-col flex-grow mx-auto items-stretch max-w-2xl min-w-md w-full md:flex-row md:h-[70vh] md:overflow-hidden">
                        <div className="active cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all" id="mh-proj">
                            <div className="absolute background bg-center bg-cover bg-mh-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
                            <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-3/4 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
                            <div className="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 mx-3 md:mb-3 md:ml-2 transition-all z-30">
                                <div className="content flex flex-col justify-center leading-tight text-white text-sm sm:text-base">
                                    <div className="ease-in-out font-bold duration-700 opacity-0  transform transition-all translate-x-8">Music Historeum</div>
                                    <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">This site is my Nucamp Honors Portfolio Project. I am a big music enthusiast, and so I chose to use that as the basis for my project. I really enjoyed utilizing my skills in both front-end and back-end development on this project. The project utilizes HTML, JavaScript, React, Reactstrap, Node.js, Express, PostgreSQL, and Python. This project is a passion project of mine. There is still much work to do on this project, and I look forward to improving and expanding it in the coming years.</div>
                                    <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8 mx-auto">
                                        <a className="proj-href pointer-events-auto" href="https://www.musichistoreum.com">
                                            <button className="rounded-full bg-stone-500 hover:bg-stone-600 h-8 w-24">Go to site</button>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="undefined cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all" id="dbd-proj">
                            <div className="absolute background bg-center bg-cover bg-dbd-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
                            <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-3/4 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
                            <div className="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 mx-3 md:mb-3 sm:ml-2 transition-all z-30">
                                <div className="content flex flex-col justify-center leading-tight text-white text-sm sm:text-base">
                                    <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Dad's Best Dogs</div>
                                    <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">This is the first contracted site that I created for a local food truck business that just recently started operating. The initial goal was to create a web presence for them that they can utilize to expand their visibility in the marketplace. There will be additional opportunities to expand the website as they expand their business in the coming years. The site was requested and launched within 10 days. This site was built utilizing HTML, Javascript, and Bootstrap.</div>
                                    <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8 mx-auto">
                                        <a className="proj-href pointer-events-none" href="https://www.dadsbestdogs.com">
                                        <button className="rounded-full bg-stone-500 hover:bg-stone-600 h-8 w-24">Go to site</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default ProjectsPage;