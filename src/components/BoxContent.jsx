import NavigationBar from './NavigationBar';
import picNews from '../assets/pictures/dda4a59d4ba81631965cf2abafcd41d4.png';

export default function BoxContent(params) {
  return (
    <>
      <div className='mx-auto max-w-4xl h-[80%] overflow-hidden rounded-2xl bg-[#F1F1F1] p-7 text-center shadow-[10px_15px_20px_5px_#00000035]'>
        <NavigationBar />
        <div className='flex'>
          <div className='w-full h-1/2 relative text-left'>
            <h2 className='text-3xl font-bold leading-tight text-black font-sans'>
              BEAMS JAPAN Introduces First-Ever Pop-Up Retail in the Thailand
            </h2>
            <p className='mt-5 text-xl leading-8 text-black font-sans'>
              Get unlimited design & development requests for a flat monthly rate. Fast turnaround.
              No contracts or surprises.
            </p>

            <a
              href='#_'
              className='px-4 absolute -bottom-14 left-10 py-2 text-sm font-sans font-medium text-center text-white transition duration-300 rounded-lg hover:from-[#fe2626] hover:to-[#ff7300] ease bg-gradient-to-br from-[#FE5226] to-[#FF9900] md:w-auto'
            >
              Read more...
            </a>
            <div className='flex gap-1 absolute -bottom-52 cursor-pointer'>
              <img src='images/image 7.png' alt='df' className='w-10 h-10' />
              <img src='images/image 8.png' alt='df' className='w-10 h-10' />
              <img src='images/image 9.png' alt='df' className='w-10 h-10' />
              <img src='images/image 10.png' alt='df' className='w-10 h-10' />
              <img src='images/image 6.png' alt='df' className='w-10 h-10' />
            </div>
              <p className='absolute font-sans -bottom-60 font-medium'>© BEAMS Co., Ltd.</p>
              <p className='absolute font-sans -bottom-60 font-medium right-24 cursor-pointer'>More news ...</p>
          </div>
          <div className='w-1/2 h-full'>
            <img src={picNews} alt='pic' className='w-52 ml-10 object-contain ' />
          </div>
        </div>
      </div>
    </>
  );
}
