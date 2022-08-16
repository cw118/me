import styles from '../../styles/Home.module.css';
import Link from 'next/link';

export const AboutCard = ({ lang }) => {
  return ( 
    <div className={styles.pageCard}>
      <Link href={(lang ? '/fr' : '') + '/about'}><a>
        <h2 className={styles.cardTitle}>{lang ? 'À propos' : 'About'}</h2>
        <img src='/icons/about.svg' className={styles.pageIcon} />
        <h3 className={styles.cardDesc}>{lang ? 'My tech stack and interests' : 'Ma stack technique et mes intérêts'}</h3>
      </a></Link>
    </div>
    
  );
}

export const ProjectsCard = ({ lang }) => {
  return (
    <div className={styles.pageCard}>
      <Link href={(lang ? '/fr' : '') + '/projects'}><a>
        <h2 className={styles.cardTitle}>{lang ? 'Projets' : 'Projects'}</h2>
        <img src='/icons/projects.svg' className={styles.pageIcon} />
        <h3 className={styles.cardDesc}>{lang ? 'Past and ongoing creations' : 'Exemples de mes réalisations'}</h3>
      </a></Link>  
    </div>
    
  );
}

export const ContactCard = ({ lang }) => {
  return (
    <div className={styles.pageCard}>
      <Link href={(lang ? '/fr' : '') + '/contact'}><a>
        <h2 className={styles.cardTitle}>Contact</h2>
        <img src='/icons/contact.svg' className={styles.pageIcon} />
        <h3 className={styles.cardDesc}>{lang ? 'Get in touch with me' : 'Me contacter'}</h3>
      </a></Link>
    </div>
    
  );
}