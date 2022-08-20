import styles from '../../styles/Specials.module.css';
import Image from 'next/image';

const TopBar = () => {
  return (
    <div className={styles.topbar}>
      <Image id={styles.profileIcon} src='/profile.png' alt='cw118' width={40} height={40} draggable='false' /><span id={styles.nameBrand}>Carolyn Wu</span>
    </div>
  );
}

export default TopBar;