import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()} className='btn fs-3 fw-1' > {`<`} </button>
  );
}