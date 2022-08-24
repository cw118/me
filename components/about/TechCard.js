import styles from '../../styles/About.module.css';
import Image from 'next/image';
import { SiGit, SiGithub, SiCanva, SiAutodesk, SiMarkdown } from 'react-icons/si';
import { RiEnglishInput } from 'react-icons/ri';
import { BsTranslate } from 'react-icons/bs';
import { MdOutlineLanguage } from 'react-icons/md';
import { TbMessageLanguage } from 'react-icons/tb';

export const FigmaCard = () => {
  return (
    <div className={styles.techCard} tabIndex='1' id={styles.figmaCard}>
      <Image src='/icons/figmaLogo.svg' alt='Figma logo' width={33} height={50} draggable='false' />
      <h3 className={styles.techCardLabel}>Figma</h3>
    </div>
  );
}
 
export const GithubCard = () => {
  return (
    <div className={styles.techCard} tabIndex='1' id={styles.githubCard}>
      <SiGithub id={styles.githubLogo} size={50} />
      <h3 className={styles.techCardLabel}>GitHub</h3>
    </div>
  );
}
 
export const GitCard = () => {
  return (
    <div className={styles.techCard} tabIndex='1' id={styles.gitCard}>
      <SiGit id={styles.gitLogo} size={50} />
      <h3 className={styles.techCardLabel}>Git</h3>
    </div>
  );
}
 
export const CanvaCard = () => {
  return (
    <div className={styles.techCard} tabIndex='1' id={styles.canvaCard}>
      <SiCanva id={styles.canvaLogo} size={50} />
      <h3 className={styles.techCardLabel}>Canva</h3>
    </div>
  );
}
 
export const DokuwikiCard = () => {
  return (
    <div className={styles.techCard} tabIndex='1' id={styles.dokuwikiCard}>
      <Image src='/icons/dokuwikiLogo.svg' alt='DokuWiki logo' width={50} height={50} draggable='false' />
      <h3 className={styles.techCardLabel}>DokuWiki</h3>
    </div>
  );
}
 
export const VscodeCard = () => {
  return (
    <div className={styles.techCard} tabIndex='1' id={styles.vscodeCard}>
      <Image src='/icons/vscodeLogo.svg' alt='VS Code logo' width={50} height={50} draggable='false' />
      <h3 className={styles.techCardLabel}>VS Code</h3>
    </div>
  );
}
 
export const AutocadCard = () => {
  return (
    <div className={styles.techCard} tabIndex='1' id={styles.autocadCard}>
      <SiAutodesk id={styles.autocadLogo} size={50} />
      <h3 className={styles.techCardLabel}>AutoCAD</h3>
    </div>
  );
}
 
export const VexCard = () => {
  return (
    <div className={styles.techCard} tabIndex='1' id={styles.vexCard}>
      <Image src='/icons/vexLogo.svg' alt='VEX Robotics' width={50} height={50} draggable='false' />
      <h3 className={styles.techCardLabel}>VEX</h3>
    </div>
  );
}
 
export const MarkdownCard = () => {
  return (
    <div className={styles.techCard} tabIndex='1' id={styles.markdownCard}>
      <SiMarkdown id={styles.markdownLogo} size={50} />
      <h3 className={styles.techCardLabel}>Markdown</h3>
    </div>
  );
}

export const EnCard = () => {
  return (
    <div className={styles.techCard} id={styles.enCard} tabIndex='1'>
      <RiEnglishInput size={36} />
      <h3 className={styles.techCardLabel}>English</h3>
    </div>
  );
}

export const FrCard = () => {
  return (
    <div className={styles.techCard} id={styles.frCard} tabIndex='1'>
      <MdOutlineLanguage size={38} />
      <h3 className={styles.techCardLabel}>Français</h3>
    </div>
  );
}

export const ZhCard = () => {
  return (
    <div className={styles.techCard} id={styles.zhCard} tabIndex='1'>
      <BsTranslate size={38} />
      <h3 className={styles.techCardLabel}>中文</h3>
    </div>
  );
}

export const RuCard = () => {
  return (
    <div className={styles.techCard} id={styles.ruCard} tabIndex='1'>
      <TbMessageLanguage size={37} />
      <h3 className={styles.techCardLabel}>Русский</h3>
    </div>
  );
}
