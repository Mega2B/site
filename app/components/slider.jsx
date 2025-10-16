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

  return (
    <div style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)' }}>
      <Splide options={options} aria-label="Slider de imagens">
        <SplideSlide>
          <img src="/slider1.jpg" alt="Imagem 1" style={{ width: '100%', display: 'block' }} />
        </SplideSlide>
        <SplideSlide>
          <img src="/slider2.jpg" alt="Imagem 2" style={{ width: '100%', display: 'block' }} />
        </SplideSlide>
      </Splide>
    </div>
  );
}
