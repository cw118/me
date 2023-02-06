import { useRouter } from 'next/router';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import NavIcon from './NavIcon';

const Nav = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const lang = currentRoute.includes('/fr') ? 'fr' : '';

  const navLinks = [
    {
      title: 'Home',
      fr: 'Accueil',
      route: '/',
    },
    {
      title: 'About',
      fr: 'À propos',
      route: '/about',
    },
    {
      title: 'Projects',
      fr: 'Projets',
      route: '/projects',
    },
    {
      title: 'Contact',
      fr: 'Contact',
      route: '/contact',
    },
  ];
  
  return (
    <nav className={styles.topnav}>
      <div className={styles.profile}>
        <div className={styles.nameBrand}>
          <Link className={styles.profileContainer} href={lang ? '/fr' : '/'}>
            <Image id={styles.profileIcon} width={40} height={40} src="/profile.png" alt="cw118" />
          </Link>
          <Link href={lang ? '/fr' : '/'}>
            <a className={styles.name}>Carolyn Wu</a>
          </Link>
        </div>
        <Link id={styles.changeLangLink} href={(lang ? currentRoute.replace('fr', '').replace('//', '/') : '/fr' + currentRoute)}>
          <button id={styles.changeLang}>
            <div id={styles.langWrapper}>
              <span id={styles.mobileLang}>{lang ? 'EN' : 'FR'}</span><span id={styles.lang}>{lang ? 'English' : 'Français'}</span>
            </div>
          </button>
        </Link>
      </div>
      <div className={styles.navLinks}>
        {navLinks.map((navLink) => <Link className={`${styles.navLink}` + ((currentRoute == navLink.route || currentRoute == (navLink.route == '/' ? '/fr' : `/fr${navLink.route}`)) ? ` ${styles.active}` : '')} href={(lang ? '/fr' : '') + navLink.route} key={lang ? navLink.fr : navLink.title}><NavIcon link={navLink.title} /><span className={styles.linkPage}>{lang ? navLink.fr : navLink.title}</span></Link>)}
      </div>
    </nav>
  );
}

export default Nav;