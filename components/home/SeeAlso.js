import styles from '../../styles/Home.module.css';
import { AboutCard, ProjectsCard, ContactCard } from './PageCard';

const SeeAlso = ({ lang }) => {
  return (
    <div className={styles.seeAlso}>
      <AboutCard lang={lang ? 'fr' : ''} />
      <ProjectsCard lang={lang ? 'fr' : ''} />
      <ContactCard lang={lang ? 'fr' : ''} />
    </div>
  );
}

export default SeeAlso;