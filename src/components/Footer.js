import jst_logo from '../app/assets/img/jst_round.png';
import {FaGithubSquare, FaLinkedin, FaEnvelope} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="flex items-center flex-wrap bg-amber-50 z-50">
            <div className="flex items-center flex-shrink-0 mr-6">
                <img className='p-1 w-30 h-16 md:h-20' src={ jst_logo }></img>
            </div>
            <div className={"w-full block md:flex md:items-center md:w-auto"}>
                <div className="inline-block px-2 py-2 leading-none text-md md:flex-grow mt-4">
                    <FaGithubSquare className='h-6 w-6'/>
                </div>
                <div className="inline-block px-2 py-2 leading-none text-md md:flex-grow mt-4">
                    <FaLinkedin className='h-6 w-6'/>
                </div>
                <div className="inline-block px-2 py-2 leading-none text-md md:flex-grow mt-4">
                    <FaEnvelope className='h-6 w-6'/>
                </div>
            </div>
        </div>
    );
}

export default Footer;

