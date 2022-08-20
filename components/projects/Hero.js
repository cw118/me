import styles from '../../styles/Projects.module.css';
import Underline from '../Underline';

const Hero = ({ lang }) => {
  const summary = {
    en: 'Here are some of the projects I\'ve been working on, independent and collaborative:',
    fr: 'Voici quelques-uns des projets, autonomes et collaboratifs, sur lesquels j\'ai travaillé\xa0:',
  };

  return (
    <div className='hero' id={styles.hero}>
      <h1 className='title'>{lang ? 'Projets' : 'Projects'}</h1>
      <Underline color='pink' />
      <p className='summary'>{lang ? summary.fr : summary.en}</p>
    </div>
  );
}

export default Hero;