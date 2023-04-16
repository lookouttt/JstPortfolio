import { useState } from 'react';
import {Bars3Icon} from '../../node_modules/@heroicons/react/24/outline'
import jst_logo from '../app/assets/img/jst_logo.png';

const Header = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);
    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-200 p-3">
            <div className="flex items-center flex-shrink-0 mr-6">
                <img className='pl-3 w-30 h-16 md:h-20' src={ jst_logo }></img>
                <span className='font-allison text-4xl md:text-5xl p-4 tracking-tight'>Jeffrey S Turner</span>
            </div>
            <div className='block md:hidden'>
                <button className="flex items-center px-3 py-2 border rounded border-black hover:text-gray-500 hover:border-gray-500" type='button' onClick={() => setMenuOpen(!menuOpen)}>
                    <Bars3Icon className='h-6 w-6'/>
                </button>
            </div>
            <div className={"w-full block md:flex md:items-center md:w-auto" + (menuOpen ? " flex" : " hidden" ) }>
                <div className="inline-block px-4 py-2 leading-none text-sm md:flex-grow mt-4">
                    <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-500 mr-4">
                        Home
                    </a>
                    <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-500 mr-4">
                        About
                    </a>
                    <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-500 mr-4">
                        Projects
                    </a>
                    <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-500 mr-4">
                        Photos
                    </a>
                    <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-500">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;

