import Link from 'next/link';
import styles from '../../styles/Projects.module.css';

const SeeAlso = ({ lang }) => {
  return (
    <div className='seeAlso'>
      <Link href={lang ? '/fr/about' : '/about'}><a className={`seeAlsoLink ${styles.seeAlsoLink}`}>{lang ? 'À propos de moi' : 'Learn more about me'}</a></Link>
      <Link href={lang ? '/fr/contact' : '/contact'}><a className={`seeAlsoLink ${styles.seeAlsoLink}`}>{lang ? 'Me contacter' : 'Contact me'}</a></Link>
    </div>
  );
}

export default SeeAlso;