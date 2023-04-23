import jst_logo from '../app/assets/img/jst_round.png';
import {FaGithubSquare, FaLinkedin, FaEnvelope} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-amber-50 z-50">

            <div className="flex items-center justify-between">
                <div className="flex items-center flex-shrink-0 ml-6">
                    <a href="#">
                        <img className='p-1 w-30 h-16 md:h-20' src={ jst_logo }></img>
                    </a>
                </div>
                <div className={"block mr-6 w-auto"}>
                    <div className="inline-block px-5 py-2 leading-none text-md mt-4">
                        <a href="https://github.com/lookouttt">
                            <FaGithubSquare className='h-6 w-6'/>
                        </a>
                    </div>
                    <div className="inline-block px-5 py-2 leading-none text-md mt-4">
                        <a href="https://www.linkedin.com/in/jeffreysturner513/">
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
            <div className='block text-center text-xs px-16 pb-5'>
                All images on this site are original images except for the light bulb image by <a href="https://pixabay.com/users/blendertimer-9538909/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6123604">Daniel Roberts</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6123604">Pixabay</a> and the LP collection image by <a href="https://pixabay.com/users/diogorodarte-510593/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1894855">Diogo Rodarte Jovem</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1894855">Pixabay</a> 
            </div>
        </div>
    );
}

export default Footer;

