import { useEffect } from "react";

const TestAccordion = () => {

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
        <div className="antialiased bg-gradient-to-b flex flex-col font-sans from-black items-stretch justify-center h-screen p-2 to-gray-900 sm:flex-row sm:items-center">
            <div className="flex flex-col flex-grow items-stretch max-w-2xl min-w-md w-full sm:flex-row sm:h-72 sm:overflow-hidden">
                <div className="active cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all">
                    <div className="absolute background bg-center bg-cover bg-red-500 bg-red-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
                    <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
                    <div className="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30">
                        <div className="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-red-500 w-10"><i className="fas fa-walking"></i></div>
                        <div className="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                            <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Imagine</div>
                            <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Chase your dreams</div>
                        </div>
                    </div>
                </div>
                <div className="undefined cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all">
                    <div className="absolute background bg-center bg-cover bg-yellow-500 bg-yellow-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
                    <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
                    <div className="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30">
                        <div className="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-yellow-500 w-10"><i className="fas fa-apple-alt"></i></div>
                        <div className="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                            <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Build</div>
                            <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Realize your vision</div>
                        </div>
                    </div>
                </div>
                {/* <div className="undefined cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all">
                    <div className="absolute background bg-center bg-cover bg-green-500 bg-green-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
                    <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
                    <div className="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30">
                        <div className="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-green-500 w-10"><i className="fas fa-tree"></i></div>
                        <div className="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                            <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Explore</div>
                            <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Discover the world</div>
                        </div>
                    </div>
                </div>
                <div className="undefined cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all">
                    <div className="absolute background bg-center bg-cover bg-blue-500 bg-blue-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
                    <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
                    <div className="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30">
                        <div className="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-blue-500 w-10"><i className="fas fa-tint"></i></div>
                        <div className="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                            <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Adapt</div>
                            <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Embrace the times</div>
                        </div>
                    </div>
                </div>
                <div className="undefined cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all">
                    <div className="absolute background bg-center bg-cover bg-purple-500 bg-purple-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
                    <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
                    <div className="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30">
                        <div className="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-purple-500 w-10"><i className="fas fa-palette"></i></div>
                        <div className="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                            <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Inspire</div>
                            <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Share your potential</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default TestAccordion;