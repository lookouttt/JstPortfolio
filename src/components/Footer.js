import jst_logo from '../app/assets/img/jst_round.png';

const Footer = () => {
    return (
        <div className="flex items-center flex-wrap bg-amber-50 z-50">
            <img className='p-1 w-30 h-16 md:h-20' src={ jst_logo }></img>
        </div>
    );
}

export default Footer;

