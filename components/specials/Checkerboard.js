import styles from '../../styles/Specials.module.css';
import Link from 'next/link';

const Checkerboard = () => {
  return (
    <div className={styles.checkerboard}>
      <Link href='/'><a className={styles.checkerSquare}>Home page</a></Link>
      <Link href='/about'><a className={styles.checkerSquare}>About me</a></Link>
      <Link href='/projects'><a className={styles.checkerSquare}>See my projects</a></Link>
      <Link href='/contact'><a className={styles.checkerSquare}>Contact me</a></Link>
      <Link href='/fr'><a className={styles.checkerSquare}>Page d'accueil</a></Link>
      <Link href='/fr/about'><a className={styles.checkerSquare}>À propos de moi</a></Link>
      <Link href='/fr/projects'><a className={styles.checkerSquare}>Voir mes projets</a></Link>
      <Link href='/fr/contact'><a className={styles.checkerSquare}>Me contacter</a></Link>
    </div>
  );
}

export default Checkerboard;