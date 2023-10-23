import picNews from '../assets/pictures/dda4a59d4ba81631965cf2abafcd41d4.png';

export default function Member() {
  return (
    <div className='flex w-full h-full justify-evenly'>
      <div className='w-1/3 flex justify-center pt-14'>
        <div className='w-52 h-52 rounded-full overflow-hidden bg-slate-300'>
          <img src={picNews} alt='pic' className='w-52 ml-10 object-contain ' />
        </div>
      </div>
      <form className='justify-center'>
        <p className='font-sans font-bold text-3xl mb-5'>User Info</p>
        <div className='flex gap-5'>
          <label className='block'>
            <span className='block text-sm font-medium font-sans text-left mb-2'>First Name</span>
            <input type='firstName' className='w-full h-7 rounded-md mb-1 bg-[#FE5226]/50' />
          </label>
          <label className='block'>
            <span className='block text-sm font-medium font-sans text-left mb-2'>Last Name</span>
            <input type='LastName' className='w-full h-7 rounded-md mb-1 bg-[#FE5226]/50' />
          </label>
        </div>
        <label className='block'>
          <span className='block text-sm font-medium font-sans text-left mb-2'>User Name</span>
          <input type='UserName' className='w-full h-7 rounded-md mb-1 bg-[#FE5226]/50' />
        </label>
        <label className='block'>
          <span className='block text-sm font-medium font-sans text-left mb-2'>Password</span>
          <input type='password' className='w-full h-7 rounded-md mb-1 bg-[#FE5226]/50' />
        </label>
        <label className='block'>
          <span className='block text-sm font-medium font-sans text-left mb-2'>Email Adress</span>
          <input type='email' className='w-full h-7 rounded-md mb-1 bg-[#FE5226]/50' />
        </label>
        <div className='mt-1 w-full pt-4'>
          <button className='px-[40%] py-2 text-sm font-sans font-medium text-center text-white transition duration-300 rounded-md hover:from-[#fe2626] hover:to-[#ff7300] ease bg-gradient-to-br from-[#FE5226] to-[#FF9900] md:w-auto'>
            Save Change
          </button>
        </div>
      </form>
    </div>
  );
}
