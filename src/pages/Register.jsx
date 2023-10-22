import Logo from '../assets/pictures/beams.png';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const handleClickFeed = () => {
    navigate('/');
  };

  const handleClickLogin = () => {
    navigate('/login');
  };

  return (
    <div className='flex w-full h-full'>
      <div className='w-1/2 flex justify-center items-center'>
        <img
          onClick={handleClickFeed}
          src={Logo}
          alt='Logo'
          className='h-4/5 object-contain cursor-pointer'
        />
      </div>
      <div className='w-1/2 backdrop-blur-sm bg-white/5 p-10'>
        <p className='font-sans font-bold text-3xl pt-5 mb-5'>Register</p>
        <form>
          <div className='flex gap-5'>
            <label className='block'>
              <span className='block text-lg font-medium font-sans text-left mb-3'>First Name</span>
              <input type='firstName' className='w-full h-8 rounded-md mb-2 bg-[#FE5226]/50' />
            </label>
            <label className='block'>
              <span className='block text-lg font-medium font-sans text-left mb-3'>Last Name</span>
              <input type='LastName' className='w-full h-8 rounded-md mb-2 bg-[#FE5226]/50' />
            </label>
          </div>
          <label className='block'>
            <span className='block text-lg font-medium font-sans text-left mb-3'>User Name</span>
            <input type='UserName' className='w-full h-8 rounded-md mb-2 bg-[#FE5226]/50' />
          </label>
          <label className='block'>
            <span className='block text-lg font-medium font-sans text-left mb-3'>Password</span>
            <input type='password' className='w-full h-8 rounded-md mb-2 bg-[#FE5226]/50' />
          </label>
          <label className='block'>
            <span className='block text-lg font-medium font-sans text-left mb-3'>Email Adress</span>
            <input type='email' className='w-full h-8 rounded-md mb-2 bg-[#FE5226]/50' />
          </label>
          <div className='mt-2 w-full'>
            <button
              onClick={handleClickLogin}
              className='px-[40%] py-2 text-sm font-sans font-medium text-center text-white transition duration-300 rounded-md hover:from-[#fe2626] hover:to-[#ff7300] ease bg-gradient-to-br from-[#FE5226] to-[#FF9900] md:w-auto'
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
