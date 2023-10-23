import Logo from '../assets/pictures/beams.png';
import Avatar from '../assets/pictures/dda4a59d4ba81631965cf2abafcd41d4.png';
import { useNavigate } from 'react-router-dom';

export default function NavbarMember(params) {
  const navigate = useNavigate();

  const handleClickFeed = () => {
    navigate('/');
  };
  return (
    <>
      <nav className='flex p-1 gap-5'>
        <div onClick={handleClickFeed} className='w-1/12 ml-2 cursor-pointer'>
          <img src={Logo} alt='Logo' className='w-full h-full object-fill' />
        </div>
        <div className='w-full flex items-center'>
          <div className='flex gap-3 font-sans text-gray-400'>
            <button className='hover:text-gray-600'>User info</button>
            <button className='hover:text-gray-600'>Favorites</button>
            <button className='hover:text-gray-600'>Watchlist</button>
            <button className='hover:text-gray-600'>Coupon</button>
          </div>
          <div
            className='w-1/3 flex items-center max-w-md mx-auto bg-white rounded-lg '
            x-data="{ search: '' }"
          >
            <div className='w-full'>
              <input
                type='search'
                className='w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none'
                placeholder='search'
                x-model='search'
              />
            </div>
            <div>
              <button
                type='submit'
                className='flex items-center bg-gray-400-500 justify-center w-12 h-12 text-gray-400 rounded-r-lg'
              >
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className='relative inline-flex cursor-pointer items-center justify-start w-14 h-14 overflow-hidden font-medium transition-all bg-[#cecece] rounded-full group'>
            <img src={Avatar} alt='avatar' className='w-full absolute top-0 object-contain' />
          </div>
        </div>
      </nav>
      <div className='w-full flex justify-end items-center font-sans font-medium text-[#FE5226]'>
        <img src='/images/line-md_log-out.png' alt='logout' className='' />
        <p>Log out</p>
      </div>
    </>
  );
}
