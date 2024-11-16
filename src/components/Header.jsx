import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-1 sm:gap-2 pt-5'>
            <img src={logo} alt="logo" className='w-[280px] sm:w-[350px]'/>
            <h1 className='text-gray-400'>Journalism Without Fear or Favour</h1>
            <p>{moment().format('MMMM Do YYYY, h:mm a')}</p>
        </div>
    );
};

export default Header;