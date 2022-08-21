import { useDraggable } from 'react-use-draggable-scroll';
import { useRef } from 'react';
import styles from '../../styles/Projects.module.css';

const ItemHeader = ({ title, children }) => {
  const ref = useRef();
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  });

  return (
    <div className={styles.itemHeader}>
      <h3 className={styles.itemTitle}>{title}</h3>
      <div className={styles.tags} {...events} ref={ref}>{children}</div>
    </div>
  );
}

export default ItemHeader;