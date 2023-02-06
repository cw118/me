import Link from 'next/link';
import styles from '../../styles/About.module.css';

const SeeAlso = ({ lang }) => {
  return (
    <div className='seeAlso'>
      <Link className={`seeAlsoLink ${styles.seeAlsoLink}`} href={lang ? '/fr/projects' : '/projects'}>{lang ? 'Voir mes projets antérieurs et actuels' : 'Check out some of my projects'}</Link>
      <Link className={`seeAlsoLink ${styles.seeAlsoLink}`} href={lang ? '/fr/contact' : '/contact'}>{lang ? 'Me contacter' : 'Contact me'}</Link>
    </div>
  );
}

export default SeeAlso;