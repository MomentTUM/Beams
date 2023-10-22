import { Outlet } from 'react-router-dom';
import BgLogin from '../assets/pictures/Login.jpg';
export default function LayoutLogin() {
  return (
    <div className='h-screen flex relative items-center justify-center z-0 bg-[#F1F1F1] space-x-8 overflow-hidden'>
      <div className='mx-auto w-[80%] max-w-4xl h-[80%] overflow-hidden rounded-2xl backdrop-blur-sm bg-white/60 text-center shadow-[10px_15px_20px_5px_#00000035]'>
        <Outlet />
      </div>
      <div className='absolute w-screen -bottom-64 -left-8 -z-10 overflow-hidden'>
        <img src={BgLogin} alt='bglogin' className='w-full h-full' />
      </div>
    </div>
  );
}
