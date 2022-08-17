import styles from '../../styles/About.module.css';
import Underline from '../Underline';

const Hero = ({ lang }) => {
  const summaryOne = {
    en: 'My programming journey began one summer with Harvard University\'s free CS50x course — I\'ve been learning and mastering coding languages, libraries, tools and more ever since.',
    fr: 'Ma passion pour le codage remonte à mon adolescence — j\'ai suivi le cours CS50x gratuit de l\'université Harvard et depuis cet été-là, je continue à étudier et maîtriser des langages, des bibliothèques et des outils informatiques.',
  };
  
  const summaryTwo = {
    en: 'As a multilingual developer with an international background, I find language learning and the cultures from which they originate very fascinating. I also like music and figure skating.',
    fr: 'Étant polyglotte avec plusieurs expériences internationales, l\'apprentissage des langues, ainsi que les cultures dont elles tirent leurs origines, me fascinent beaucoup. J\'aime bien la musique et le patinage artistique aussi.',
  };

  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>{lang ? 'À propos' : 'About'}</h1>
      <Underline color='turquoise' />
      <p className={styles.summary}>{lang ? summaryOne.fr : summaryOne.en}</p>
      <p className={styles.summary}>{lang ? summaryTwo.fr : summaryTwo.en}</p>
    </div>
  );
}

export default Hero;