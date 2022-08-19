import styles from '../../styles/About.module.css';
import { SiHtml5, SiCss3, SiJavascript, SiSass, SiTailwindcss, SiBootstrap, SiFlask, SiC, SiCplusplus, SiPython, SiSqlite, SiReact, SiNextdotjs } from 'react-icons/si';

export const HTMLCard = () => {
  return (
    <div className={styles.codeCard}>
      <SiHtml5 id={styles.htmlLogo} size={95} />
      <h3 className={styles.codeCardLabel}>HTML</h3>
    </div>
  );
}

export const CSSCard = () => {
  return (
    <div className={styles.codeCard}>
      <SiCss3 id={styles.cssLogo} size={95} />
      <h3 className={styles.codeCardLabel}>CSS</h3>
    </div>
  );
}
 
export const JSCard = () => {
  return (
    <div className={styles.codeCard}>
      <SiJavascript id={styles.jsLogo} size={95} />
      <h3 className={styles.codeCardLabel}>JS</h3>
    </div>
  );
}
 
export const SassCard = () => {
  return (
    <div className={styles.codeCard}>
      <SiSass id={styles.sassLogo} size={95} />
      <h3 className={styles.codeCardLabel}>Sass</h3>
    </div>
  );
}
 
export const TailwindCard = () => {
  return (
    <div className={styles.codeCard}>
      <SiTailwindcss id={styles.tailwindLogo} size={95} />
      <h3 className={styles.codeCardLabel}>Tailwind</h3>
    </div>
  );
}
 
export const BootstrapCard = () => {
  return (
    <div className={styles.codeCard}>
      <SiBootstrap id={styles.bootstrapLogo} size={95} />
      <h3 className={styles.codeCardLabel}>Bootstrap</h3>
    </div>
  );
}
 
export const ReactCard = () => {
  return (
    <div className={styles.codeCard}>
      <SiReact id={styles.reactLogo} size={95} />
      <h3 className={styles.codeCardLabel}>React</h3>
    </div>
  );
}
 
export const CCard = () => {
  return (
    <div className={styles.codeCard}>
      <SiC id={styles.cLogo} size={95} />
      <h3 className={styles.codeCardLabel}>C</h3>
    </div>
  );
}
 
export const CppCard = () => {
  return (
    <div className={styles.codeCard}>
      <SiCplusplus id={styles.cppLogo} size={95} />
      <h3 className={styles.codeCardLabel}>C++</h3>
    </div>
  );
}
 
export const PythonCard = () => {
  return (
    <div className={styles.codeCard}>
      <SiPython id={styles.pythonLogo} size={95} />
      <h3 className={styles.codeCardLabel}>Python</h3>
    </div>
  );
}
 
export const FlaskCard = () => {
  return (
    <div className={styles.codeCard}>
      <SiFlask id={styles.flaskLogo} size={95} />
      <h3 className={styles.codeCardLabel}>Flask</h3>
    </div>
  );
}
 
export const SQLCard = () => {
  return (
    <div className={styles.codeCard}>
      <SiSqlite id={styles.sqlLogo} size={95} />
      <h3 className={styles.codeCardLabel}>SQL</h3>
    </div>
  );
}
 
export const NextJSCard = () => {
  return (
    <div className={styles.codeCard}>
      <SiNextdotjs id={styles.nextLogo} size={95} />
      <h3 className={styles.codeCardLabel}>Next</h3>
    </div>
  );
}
 