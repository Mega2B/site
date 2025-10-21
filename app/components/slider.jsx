"use client";
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Slider() {
  const options = {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    arrows: true,
    pagination: true,
    width: '100%',
    heightRatio: 0.4,
  };

  const options_sm = {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    arrows: true,
    pagination: true,
    width: '400px',
    height: '500px',
  };

  return (
    <>
      <div className="hidden md:block" style={{ width: '100%', margin: '0 auto' }}>
        <Splide options={options} aria-label="Slider de imagens">
          <SplideSlide>
            <img src="/slider1.jpg" alt="Imagem 1" style={{ width: '100%', display: 'block' }} />
          </SplideSlide>
          <SplideSlide>
            <img src="/slider2.jpg" alt="Imagem 2" style={{ width: '100%', display: 'block' }} />
          </SplideSlide>
        </Splide>
      </div>

      <div className="block md:hidden" style={{ width: '100%', margin: '0 auto' }}>
        <Splide options={options_sm} aria-label="Slider de imagens">
          <SplideSlide>
            <img src="/SM01.png" alt="Imagem 1" style={{ width: '100%', display: 'block' }} />
          </SplideSlide>
          <SplideSlide>
            <img src="/SM02.png" alt="Imagem 2" style={{ width: '100%', display: 'block' }} />
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
}
