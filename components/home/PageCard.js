import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { BsPersonCircle, BsChatLeftText } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';

export const AboutCard = ({ lang }) => {
  return ( 
    <div className={styles.pageCard}>
      <Link href={(lang ? '/fr' : '') + '/about'}>
        <h2 className={styles.cardTitle}>{lang ? 'À propos' : 'About'}</h2>
        <BsPersonCircle size={145} className={styles.pageIcon} />
        <h3 className={styles.cardDesc}>{lang ? 'Ma stack technique et mes intérêts' : 'My tech stack and interests'}</h3>
      </Link>
    </div>
    
  );
}

export const ProjectsCard = ({ lang }) => {
  return (
    <div className={styles.pageCard}>
      <Link href={(lang ? '/fr' : '') + '/projects'}>
        <h2 className={styles.cardTitle}>{lang ? 'Projets' : 'Projects'}</h2>
        <FaLaptopCode size={140} className={styles.pageIcon} />
        <h3 className={styles.cardDesc}>{lang ? 'Exemples de mes réalisations' : 'Past and ongoing creations'}</h3>
      </Link>  
    </div>
    
  );
}

export const ContactCard = ({ lang }) => {
  return (
    <div className={styles.pageCard}>
      <Link href={(lang ? '/fr' : '') + '/contact'}>
        <h2 className={styles.cardTitle}>Contact</h2>
        <BsChatLeftText size={135} className={styles.pageIcon} />
        <h3 className={styles.cardDesc}>{lang ? 'Me contacter' : 'Get in touch with me'}</h3>
      </Link>
    </div>
    
  );
}