import { useState } from 'react';
import {HiBars3} from 'react-icons/hi2'
import jst_logo from '../app/assets/img/jst_round.png';

const Header = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);
    return (
        <nav className="sticky top-0 flex items-center justify-between flex-wrap bg-amber-50 p-3 z-50">
            <div className="flex items-center flex-shrink-0 mr-6">
                <a href="#">
                    <img className='pl-2 w-30 h-16 md:h-20' src={ jst_logo }></img>
                </a>
                <a href="#">
                    <span className='font-allison font-semibold text-4xl md:text-5xl p-4 tracking-tight'>Jeffrey S Turner</span>
                </a>
            </div>
            <div className='block md:hidden'>
                <button className="flex items-center px-2 py-2 border rounded border-black hover:text-gray-500 hover:border-gray-500" type='button' onClick={() => setMenuOpen(!menuOpen)}>
                    <HiBars3 className='h-6 w-6'/>
                </button>
            </div>
            <div className={"w-full block md:flex md:items-center md:w-auto" + (menuOpen ? " flex" : " hidden" ) }>
                <div className="inline-block px-2 py-2 leading-none text-md md:flex-grow mt-4">
                    <a href="#" className="block font-semibold mt-4 md:inline-block md:mt-0 hover:text-gray-500 mr-5"
                        onClick={() => { setMenuOpen(!menuOpen); return true}}>
                        Home
                    </a>
                    <a href="#jst_about" className="block font-semibold mt-4 md:inline-block md:mt-0 hover:text-gray-500 mr-5" onClick={() => { setMenuOpen(!menuOpen); return true}}>
                        About
                    </a>
                    <a href="#jst_projects" className="block font-semibold mt-4 md:inline-block md:mt-0 hover:text-gray-500 mr-5" onClick={() => { setMenuOpen(!menuOpen); return true}}>
                        Projects
                    </a>
                    <a href="#jst_photos" className="block font-semibold mt-4 md:inline-block md:mt-0 hover:text-gray-500 mr-5" onClick={() => { setMenuOpen(!menuOpen); return true}}>
                        Photos
                    </a>
                    <a href="#contact_page" className="block font-semibold mt-4 md:inline-block md:mt-0 hover:text-gray-500" onClick={() => { setMenuOpen(!menuOpen); return true}}>
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;

