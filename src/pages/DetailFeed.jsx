import { useNavigate } from 'react-router-dom';
import picNews from '../assets/pictures/dda4a59d4ba81631965cf2abafcd41d4.png';

export default function DetailFeed(params) {
  return (
    <div className='flex'>
      <div className='w-1/2 h-full'>
        <img src={picNews} alt='pic' className='w-52 ml-10 object-contain ' />
      </div>
      <div className='w-full h-1/2 relative text-left'>
        <h2 className='text-xl font-bold leading-tight text-black font-sans'>
          BEAMS JAPAN Introduces First-Ever Pop-Up Retail in the Thailand
        </h2>
        <p className='mt-5 text-lg text-black font-sans'>
          Get unlimited design & development requests for a flat monthly rate. Fast turnaround. No
          contracts or surprises.
        </p>
        <p className='font-sans mt-5 text-xs'>
          Text: Muhammad Agung Kurniawan Photo: Hypebeast <br />
          BEAMS is one of the most influential contemporary fashion boutiques in Japan, with fans
          from all over the world actively seeking out its products. While BEAMS has previously only
          been available in Asia, the boutique will soon launch its first pop-up retail store in the
          United States. First established in 1976 by Etsuzo Shitara and now continued by his son Yo
          Shitara, BEAMS started as a retail space in Harajuku, Tokyo. The popularity of the store
          grew due to its important role in importing Western styles and international brands to
          Japan. Now, there is an opportunity for BEAMS JAPAN's sub-label to debut its first
          collection in the United States, specifically in the form of pop-ups at Fred Segal Sunset
          in Los Angeles and Nordstrom in New York. This collaborative retail project brings back
          memories of 2011 when Fred Segal was one of the first stores to introduce BEAMS products
          in the United States. Since then, this LA-based store has become a major supporter of
          BEAMS products, as has Nordstrom, which has shown its appreciation for the label by making
          it the main topic of the seventh edition of its "Concept" series. While detailed
          information is still being kept secret, the upcoming pop-up will feature flagship products
          from BEAMS in Tokyo, as well as collections from sub-labels BEAMS Plus, BEAMS BOY, and
          BEAMS COUTURE (limited accessories). All collections will also be available online on the
          Fred Segal website.
        </p>
      </div>
    </div>
  );
}
