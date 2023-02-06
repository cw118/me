import styles from '../../styles/Specials.module.css';
import Link from 'next/link';

const Checkerboard = () => {
  return (
    <div className={styles.checkerboard}>
      <Link className={styles.checkerSquare} href='/'>Home page</Link>
      <Link className={styles.checkerSquare} href='/about'>About me</Link>
      <Link className={styles.checkerSquare} href='/projects'>See my projects</Link>
      <Link className={styles.checkerSquare} href='/contact'>Contact me</Link>
      <Link className={styles.checkerSquare} href='/fr'>Page d'accueil</Link>
      <Link className={styles.checkerSquare} href='/fr/about'>À propos de moi</Link>
      <Link className={styles.checkerSquare} href='/fr/projects'>Voir mes projets</Link>
      <Link className={styles.checkerSquare} href='/fr/contact'>Me contacter</Link>
    </div>
  );
}

export default Checkerboard;