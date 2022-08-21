import styles from '../../styles/Home.module.css';
import Underline from '../Underline';

const Hero = ({ lang }) => {
  const summary = {
    en: 'I\'m a self-taught programmer, computer science enthusiast and open-source maintainer. I love problem-solving as well as all things science, math and tech.',
    fr: 'Je suis autodidacte en programmation et une passionnée de l\'informatique. Je maintiens un projet open-source, et j\'adore tous les sujets impliquant la résolution de problèmes et le raisonnement logique.',
  }

  return (
    <div className={styles.hero}>
      <div className={styles.heroImg}></div>
      <div className={styles.heroText}>
        <h1 id={styles.name}>Carolyn Wu</h1>
        <Underline color='white' />
        <p id={styles.summary}>{lang ? summary.fr : summary.en }</p>
      </div>
    </div>
  );
}

export default Hero;