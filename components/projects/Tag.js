import styles from '../../styles/Projects.module.css';

const Tag = ({ children }) => {
  return (
    <div className={styles.tag}>{children}</div>
  );
}

export default Tag;