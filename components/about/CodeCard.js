import styles from '../../styles/About.module.css';
import { SiHtml5, SiCss3, SiJavascript, SiSass, SiBootstrap, SiTailwindcss, SiFlask, SiC, SiCplusplus, SiPython, SiSqlite, SiReact, SiNextdotjs } from 'react-icons/si';

export const HTMLCard = ({ size }) => {
  return (
    <div className={styles.codeCard}>
      <SiHtml5 className={styles.codeCardLogo} size={`${size}`} />
      <h3 className={styles.codeCardLabel}>{skill}</h3>
    </div>
  );
}
