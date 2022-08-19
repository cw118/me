import styles from '../../styles/About.module.css';
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import { HTMLCard, CSSCard, JSCard, SassCard, TailwindCard, BootstrapCard, ReactCard, CCard, CppCard, PythonCard, FlaskCard, SQLCard, NextJSCard } from './CodeCard';

const CodeStack = ({ lang }) => {
  const ref = useRef();
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  });
  
  return (
    <>
      <h2 className={styles.skillstackTitle}>{lang ? 'Mes compétences et connaissances' : 'My knowledge and skills'}</h2>
      <div className={styles.codeStack} {...events} ref={ref}>
        <HTMLCard />
        <CSSCard />
        <JSCard />
        <SassCard />
        <TailwindCard />
        <BootstrapCard />
        <ReactCard />
        <CCard />
        <CppCard />
        <PythonCard />
        <FlaskCard />
        <SQLCard />
        <NextJSCard />
      </div>
    </>
  );
}

export default CodeStack;