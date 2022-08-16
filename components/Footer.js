import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.socials}><Link href='https://github.com/cw118'><a><FaGithub />&nbsp;<span>GitHub (@cw118)</span></a></Link></div>
        <div className={styles.line}></div>
        <div className={styles.copyright}>&#169; 2022 Carolyn Wu. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;