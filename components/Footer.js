import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const allRights = currentRoute.includes('/fr') ? 'Tous droits réservés' : 'All rights reserved';

  return (
    <footer className={styles.footer}>
      <div className={styles.socials}><Link href='https://github.com/cw118'><FaGithub />&nbsp;<span>GitHub (@cw118)</span></Link></div>
      <div className={styles.line}></div>
      <div className={styles.copyright}>&#169; 2022-23 Carolyn Wu. {allRights}.</div>
    </footer>
  );
}

export default Footer;