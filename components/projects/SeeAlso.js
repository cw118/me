import Link from 'next/link';
import styles from '../../styles/Projects.module.css';

const SeeAlso = ({ lang }) => {
  return (
    <div className='seeAlso'>
      <Link className={`seeAlsoLink ${styles.seeAlsoLink}`} href={lang ? '/fr/about' : '/about'}>{lang ? 'À propos de moi' : 'Learn more about me'}</Link>
      <Link className={`seeAlsoLink ${styles.seeAlsoLink}`} href={lang ? '/fr/contact' : '/contact'}>{lang ? 'Me contacter' : 'Contact me'}</Link>
    </div>
  );
}

export default SeeAlso;