import jst_logo from '../app/assets/img/jst_round.png';
import {FaGithubSquare, FaLinkedin, FaEnvelope} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="flex items-center justify-between bg-amber-50 z-50">
            <div className="flex items-center flex-shrink-0 ml-6">
                <img className='p-1 w-30 h-16 md:h-20' src={ jst_logo }></img>
            </div>
            <div className={"block mr-6 w-auto"}>
                <div className="inline-block px-5 py-2 leading-none text-md mt-4">
                    <a href="https://github.com/lookouttt">
                        <FaGithubSquare className='h-6 w-6'/>
                    </a>
                </div>
                <div className="inline-block px-5 py-2 leading-none text-md mt-4">
                    <a href="https://www.linkedin.com/in/jeff-turner-887815186/">
                        <FaLinkedin className='h-6 w-6'/>
                    </a>
                </div>
                <div className="inline-block px-5 py-2 leading-none text-md mt-4">
                    <a href="mailto:jeff@jeffreysturner.com">
                        <FaEnvelope className='h-6 w-6'/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;

