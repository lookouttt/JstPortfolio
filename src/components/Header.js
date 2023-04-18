import { useState } from 'react';
import {Bars3Icon} from '../../node_modules/@heroicons/react/24/outline'
import jst_logo from '../app/assets/img/jst_round.png';

const Header = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);
    return (
        <nav className="sticky top-0 flex items-center justify-between flex-wrap bg-amber-50 p-3 z-50">
            <div className="flex items-center flex-shrink-0 mr-6">
                <img className='pl-2 w-30 h-16 md:h-20' src={ jst_logo }></img>
                <span className='font-allison font-semibold text-4xl md:text-5xl p-4 tracking-tight'>Jeffrey S Turner</span>
            </div>
            <div className='block md:hidden'>
                <button className="flex items-center px-2 py-2 border rounded border-black hover:text-gray-500 hover:border-gray-500" type='button' onClick={() => setMenuOpen(!menuOpen)}>
                    <Bars3Icon className='h-6 w-6'/>
                </button>
            </div>
            <div className={"w-full block md:flex md:items-center md:w-auto" + (menuOpen ? " flex" : " hidden" ) }>
                <div className="inline-block px-2 py-2 leading-none text-md md:flex-grow mt-4">
                    <a href="#" className="block font-semibold mt-4 md:inline-block md:mt-0 hover:text-gray-500 mr-5">
                        Home
                    </a>
                    <a href="#about_me" className="block font-semibold mt-4 md:inline-block md:mt-0 hover:text-gray-500 mr-5">
                        About
                    </a>
                    <a href="#responsive-header" className="block font-semibold mt-4 md:inline-block md:mt-0 hover:text-gray-500 mr-5">
                        Projects
                    </a>
                    <a href="#responsive-header" className="block font-semibold mt-4 md:inline-block md:mt-0 hover:text-gray-500 mr-5">
                        Photos
                    </a>
                    <a href="#responsive-header" className="block font-semibold mt-4 md:inline-block md:mt-0 hover:text-gray-500">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;

