import Logo from '../assets/pictures/beams.png';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleClickFeed = () => {
    navigate('/');
  };

  const handleClickRegister = () => {
    navigate('/register');
  };

  const handleClickMember = () => {
    navigate('/member');
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
        <p className='font-sans font-bold text-3xl pt-5 mb-5'>Login</p>
        <form>
          <label className='block'>
            <span className='block text-lg font-medium font-sans text-left mb-3'>User Name</span>
            <input type='username' className='w-full h-8 rounded-md mb-3 bg-[#FE5226]/50' />
          </label>
          <label className='block'>
            <span className='block text-lg font-medium font-sans text-left mb-3'>Password</span>
            <input type='password' className='w-full h-8 rounded-md mb-3 bg-[#FE5226]/50' />
          </label>
          <label className='flex font-sans font-medium'>
            <input
              type='checkbox'
              className='accent-orange-300 focus:accent-[#FE5226] w-5 h-5 mr-2'
            />
            <p>Remember me</p>
          </label>
          <div className='mt-2 w-full'>
            <button
              onClick={handleClickMember}
              className='px-[40%] py-2 text-sm font-sans font-medium text-center text-white transition duration-300 rounded-md hover:from-[#fe2626] hover:to-[#ff7300] ease bg-gradient-to-br from-[#FE5226] to-[#FF9900] md:w-auto'
            >
              Login
            </button>
          </div>
        </form>
        <div className='flex'>
          <p className='text-left font-sans mt-2'>Don’t have an account?</p>
          <p
            onClick={handleClickRegister}
            className='text-left font-sans mt-2 cursor-pointer text-[#fe51269d] hover:text-[#FE5226]'
          >
            Sign Up
          </p>
        </div>
        <p className='text-left w-fit font-sans text-gray-500 hover:underline cursor-pointer mt-2'>
          Forgot Password
        </p>
      </div>
    </div>
  );
}
