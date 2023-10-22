import DetailContent from "../components/DetailContent";


export default function DetailFeed(params) {
    return (
        <div className='h-screen flex relative items-center justify-center z-0 bg-[#F1F1F1] space-x-8 overflow-hidden'>
            <DetailContent/>
        <div className='w-[600px] h-[600px] absolute aspect-auto -bottom-24 -left-32 -z-10  bg-[#FE5226] rounded-full'/>
      </div>
    );
};
