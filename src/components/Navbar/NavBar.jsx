import CTAButton from '../CTAButton/CTAButton';
import Navlist from '../Navlist';

const NavBar = () => {
  return (
    <div className='bg-white  sticky top-0'>
      <div className='navbar max-w-6xl mx-auto'>
        <div className='navbar-start mr-auto'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {' '}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex='-1'
              className=' dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
            >
              <Navlist />
            </ul>
          </div>
          <a className='text-md lg:text-2xl font-bold min-w-max truncate'>
            CS — Ticket System
          </a>
        </div>

        <div className='navbar-end  hidden lg:flex'>
          <Navlist />
        </div>
        <CTAButton />
      </div>
    </div>
  );
};

export default NavBar;
