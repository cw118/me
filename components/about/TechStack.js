import styles from '../../styles/About.module.css';
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import { FigmaCard, GithubCard, GitCard, CanvaCard, WordpressCard, ApacheCard, DokuwikiCard, VscodeCard, AutocadCard, VexCard, MarkdownCard, EnCard, FrCard, ZhCard, RuCard } from './TechCard';

const TechStack = () => {
  const ref = useRef();
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  });

  return (
    <div className={styles.techStack} {...events} ref={ref}>
      <FigmaCard />
      <GithubCard />
      <GitCard />
      <CanvaCard />
      <WordpressCard />
      <ApacheCard />
      <DokuwikiCard />
      <VscodeCard />
      <AutocadCard />
      <VexCard />
      <MarkdownCard />
      <EnCard />
      <FrCard />
      <ZhCard />
      <RuCard />
    </div>
  );
}

export default TechStack;