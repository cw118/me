import { useRouter } from 'next/router';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import NavIcon from './NavIcon';

const Nav = ({ lang }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

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
          <Link href={lang ? '/fr' : '/'}>
            <a><img id={styles.profileIcon} src="/profile.png" alt="cw118" /></a>
          </Link>
          <Link href={lang ? '/fr' : '/'}>
            <a className={styles.name}>Carolyn Wu</a>
          </Link>
        </div>
        <Link href={(lang ? currentRoute.replace('fr', '').replace('//', '/') : '/fr' + currentRoute)}>
          <a id={styles.changeLangLink}>
            <button id={styles.changeLang}>
              <div id={styles.langWrapper}>
                <span id={styles.mobileLang}>{lang ? 'EN' : 'FR'}</span><span id={styles.lang}>{lang ? 'English' : 'Français'}</span>
              </div>
            </button>
          </a>
        </Link>
      </div>
      <div className={styles.navLinks}>
        {navLinks.map((navLink) => <Link href={(lang ? '/fr' : '') + navLink.route} key={lang ? navLink.fr : navLink.title}><a className={`${styles.navLink}` + ((currentRoute == navLink.route || currentRoute == (navLink.route == '/' ? '/fr' : `/fr${navLink.route}`)) ? ` ${styles.active}` : '')}><NavIcon link={navLink.title} /><span className={styles.linkPage}>{lang ? navLink.fr : navLink.title}</span></a></Link>)}
      </div>
    </nav>
  );
}

export default Nav;