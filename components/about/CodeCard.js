import styles from '../../styles/About.module.css';
import Image from 'next/image';
import { SiJavascript, SiSass, SiTailwindcss, SiBootstrap, SiFlask, SiReact, SiNextdotjs } from 'react-icons/si';

export const HTMLCard = () => {
  return (
    <div className={styles.codeCard} tabindex='1'>
      <Image src='/icons/htmlLogo.svg' alt='HTML logo' width={100} height={100} />
      <h3 className={styles.codeCardLabel}>HTML</h3>
    </div>
  );
}

export const CSSCard = () => {
  return (
    <div className={styles.codeCard} tabindex='1'>
      <Image src='/icons/cssLogo.svg' alt='CSS logo' width={100} height={100} />
      <h3 className={styles.codeCardLabel}>CSS</h3>
    </div>
  );
}
 
export const JSCard = () => {
  return (
    <div className={styles.codeCard} tabindex='1'>
      <SiJavascript id={styles.jsLogo} size={95} />
      <h3 className={styles.codeCardLabel}>JS</h3>
    </div>
  );
}
 
export const SassCard = () => {
  return (
    <div className={styles.codeCard} tabindex='1'>
      <SiSass id={styles.sassLogo} size={95} />
      <h3 className={styles.codeCardLabel}>Sass</h3>
    </div>
  );
}
 
export const TailwindCard = () => {
  return (
    <div className={styles.codeCard} tabindex='1'>
      <SiTailwindcss id={styles.tailwindLogo} size={95} />
      <h3 className={styles.codeCardLabel}>Tailwind</h3>
    </div>
  );
}
 
export const BootstrapCard = () => {
  return (
    <div className={styles.codeCard} tabindex='1'>
      <SiBootstrap id={styles.bootstrapLogo} size={95} />
      <h3 className={styles.codeCardLabel}>Bootstrap</h3>
    </div>
  );
}
 
export const ReactCard = () => {
  return (
    <div className={styles.codeCard} tabindex='1'>
      <SiReact id={styles.reactLogo} size={95} />
      <h3 className={styles.codeCardLabel}>React</h3>
    </div>
  );
}
 
export const CCard = () => {
  return (
    <div className={styles.codeCard} tabindex='1'>
      <Image src='/icons/cLogo.svg' alt='C logo' width={100} height={100} />
      <h3 className={styles.codeCardLabel}>C</h3>
    </div>
  );
}
 
export const CppCard = () => {
  return (
    <div className={styles.codeCard} tabindex='1'>
      <Image src='/icons/cppLogo.svg' alt='C plus plus logo' width={100} height={100} />
      <h3 className={styles.codeCardLabel}>C++</h3>
    </div>
  );
}
 
export const PythonCard = () => {
  return (
    <div className={styles.codeCard} tabindex='1'>
      <Image src='/icons/pythonLogo.svg' id={styles.pythonLogo} width={100} height={100} alt='Python logo' draggable='false' />
      <h3 className={styles.codeCardLabel}>Python</h3>
    </div>
  );
}
 
export const FlaskCard = () => {
  return (
    <div className={styles.codeCard} tabindex='1'>
      <SiFlask id={styles.flaskLogo} size={95} />
      <h3 className={styles.codeCardLabel}>Flask</h3>
    </div>
  );
}
 
export const SQLCard = () => {
  return (
    <div className={styles.codeCard} tabindex='1'>
      <Image src='/icons/sqlLogo.svg' alt='SQL logo' width={100} height={100} />
      <h3 className={styles.codeCardLabel}>SQL</h3>
    </div>
  );
}
 
export const NextJSCard = () => {
  return (
    <div className={styles.codeCard} tabindex='1'>
      <SiNextdotjs id={styles.nextLogo} size={95} />
      <h3 className={styles.codeCardLabel}>Next</h3>
    </div>
  );
}
 