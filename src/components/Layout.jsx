import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <div className='h-screen flex relative items-center justify-center z-0 bg-[#F1F1F1] space-x-8 overflow-hidden'>
        <div className='mx-auto max-w-4xl h-[80%] overflow-hidden rounded-2xl bg-[#F1F1F1] p-7 text-center shadow-[10px_15px_20px_5px_#00000035]'>
        <NavigationBar />
        <Outlet/>
      </div>
      <div className='w-[600px] h-[600px] absolute aspect-auto -bottom-24 -left-32 -z-10  bg-[#FE5226] rounded-full' />
    </div>
  );
}
