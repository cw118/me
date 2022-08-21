import Link from 'next/link';
import styles from '../../styles/About.module.css';

const SeeAlso = ({ lang }) => {
  return (
    <div className='seeAlso'>
      <Link href={lang ? '/fr/projects' : '/projects'}><a className={`seeAlsoLink ${styles.seeAlsoLink}`}>{lang ? 'Voir mes projets antérieurs et actuels' : 'Check out some of my projects'}</a></Link>
      <Link href={lang ? '/fr/contact' : '/contact'}><a className={`seeAlsoLink ${styles.seeAlsoLink}`}>{lang ? 'Me contacter' : 'Contact me'}</a></Link>
    </div>
  );
}

export default SeeAlso;