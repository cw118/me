import { useRouter } from 'next/router';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Nav = ({ lang, i18nUrl }) => {
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
        <Link href='/'><>
          <Image id={styles.profilePic} src="/public/profile.png" alt="cw118" width='55px' height='55px' layout='responsive' />
          <p id="copyright">Carolyn Wu</p>
        </></Link>
        <button id={styles.changeLang}>
          <Link href={i18nUrl}>
            <div id="langWrapper">
              <span id={styles.mobileLang}>{lang ? 'EN' : 'FR'}</span><span id={styles.lang}>{lang ? 'English' : 'Français'}</span>
            </div>
          </Link>
        </button>
      </div>
      <div className={styles.navLinks}>
        {navLinks.map((navLink) => <Link href={(lang ? '/fr/' : '/') + navLink.route}><a className={(currentRoute == navLink.route || currentRoute == '/fr' + navLink.route) ? `${styles.active}` : ''}>{lang ? navLink.fr : navLink.title}</a></Link>)}
      </div>
    </nav>
  );
}

export default Nav;