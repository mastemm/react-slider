import { useState } from 'react';
import './Slider.css';
import dataSlider from './dataSlider';

export default function Slider() {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });
  return (
    <div>
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
    </div>
  );
}
