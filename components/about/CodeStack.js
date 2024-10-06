import {
  HTMLCard,
  CSSCard,
  JSCard,
  TSCard,
  SassCard,
  TailwindCard,
  BootstrapCard,
  SvelteCard,
  ReactCard,
  PhpCard,
  CCard,
  PythonCard,
  TFCard,
  KerasCard,
  MySQLCard,
  NextjsCard,
} from "./CodeCard";
import styles from "../../styles/About.module.css";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const CodeStack = ({ lang }) => {
  const ref = useRef();
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  });

  return (
    <>
      <h2 className={styles.skillstackTitle}>
        {lang ? "Mes compétences" : "My skills"}
      </h2>
      <div className={styles.codeStack} {...events} ref={ref}>
        <HTMLCard />
        <CSSCard />
        <JSCard />
        <TSCard />
        <SassCard />
        <TailwindCard />
        <BootstrapCard />
        <SvelteCard />
        <ReactCard />
        <NextjsCard />
        <PhpCard />
        <MySQLCard />

        <CCard />
        <PythonCard />
        <TFCard />
        <KerasCard />
        {/* <FlaskCard /> */}
      </div>
    </>
  );
};

export default CodeStack;
