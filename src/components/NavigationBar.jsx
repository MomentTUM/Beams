import Logo from '../assets/pictures/beams.png';

export default function NavigationBar(params) {
  return (
    <nav className='flex p-1 gap-5 mb-3'>
      <div className='w-1/12 ml-2'>
        <img src={Logo} alt='Logo' className='w-full h-full object-fill' />
      </div>
      <div className='w-full flex items-center'>
        <div className='flex gap-3 font-sans text-gray-400'>
          <button className='hover:text-gray-600'>LABELS & BRANDS</button>
          <button className='hover:text-gray-600'>SHOPS & STOCKISTS</button>
          <button className='hover:text-gray-600'>ABOUT BEAMS</button>
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

        <a
          href='#_'
          className='relative inline-flex items-center justify-start w-14 h-14 overflow-hidden font-medium transition-all bg-[#FE5226] rounded-full hover:bg-[#F1F1F1] group'
        >
          <span className='absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full'></span>
          <span className='relative w-full text-center font-sans font-medium text-white transition-colors duration-200 ease-in-out group-hover:text-[#FE5226]'>
            Log in
          </span>
        </a>
      </div>
    </nav>
  );
}
