import { useState } from 'react';
import './Slider.css';
import dataSlider from './dataSlider';
import BtnSlider from './BtnSlider';

export default function Slider() {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  const nextSlide = () => {
    console.log('NEXT');
  };
  const prevSlide = () => {
    console.log('PREV');
  };
  return (
    <div className='container-slider'>
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideAnim.index === index + 1 ? 'slide active-anim' : 'slide'
            }
          >
            <img
              src={process.env.PUBLIC_URL + `/Imgs/Img${index + 1}.jpg`}
              alt='slideImg'
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
    </div>
  );
}
