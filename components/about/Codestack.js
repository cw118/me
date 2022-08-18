import { useState, useLayoutEffect } from 'react';
import styles from '../../styles/About.module.css';
import Slider from 'react-slick';
import { HTMLCard } from './CodeCard';

const Codestack = () => {
  
  const useWindowWidth = () => {
    const [width, setWidth] = useState([0]);
    
    useLayoutEffect(() => {
      const updateWidth = () => setWidth(window.innerWidth);
      window.addEventListener('resize', updateWidth);
      updateWidth();
      return () => window.removeEventListener('resize', updateWidth);
    }, []);
    return width;
  }
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: useWindowWidth() / 150,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <HTMLCard size='100' />
      </Slider>
    </div>
  );
}

export default Codestack;