import styles from '../../styles/Specials.module.css';
import Underline from '../Underline';

const Hero = ({ titleEn, titleFr, color, uppercase }) => {
  return (
    <div className={`hero ${color}`}>
      <h1 className={`title ${styles.title}` + (uppercase ? ` ${styles.uppercase}` : '')}>{titleEn}</h1>
      <Underline color='navy' />
      <h1 className={`title ${styles.title}` + (uppercase ? ` ${styles.uppercase}` : '')}>{titleFr}</h1>
    </div>
  );
}

export default Hero;