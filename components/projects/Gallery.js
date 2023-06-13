import styles from '../../styles/Projects.module.css';
import Link from 'next/link';
import Tag from './Tag';
import ItemHeader from './ItemHeader';

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.galleryItem}>
        <ItemHeader title='MDN Web Docs (localization)'>
          <Tag>l10n</Tag>
          <Tag>Markdown</Tag>
          <Tag>Git</Tag>
          <Tag>GitHub</Tag>
          <Tag>YAML</Tag>
          <Tag>API</Tag>
          <Tag>CSS</Tag>
          <Tag>HTML</Tag>
          <Tag>JS</Tag>
        </ItemHeader>
        <div className={styles.itemDescription}>
          <p>As a member of the French review team, my main role is to triage and fix bugs, as well as to suggest and <Link href='https://github.com/mdn/translated-content/pulls?q=reviewed-by%3Acw118+'>review translations</Link>; I also contribute to <Link href='https://github.com/mdn/content/issues?q=author%3Acw118'>English content</Link> and to the source code.</p>
          <p><Link href='https://github.com/mdn'>MDN Web Docs</Link>, an open source project launched by Mozilla in 2005, documents web technologies such as HTML, CSS and JavaScript.</p>
        </div>
        <div className={styles.viewOn}>
          <Link className={`${styles.viewOnLink} ${styles.leftLink}`} href='https://developer.mozilla.org/'>MDN Web Docs</Link>
          <Link className={`${styles.viewOnLink} ${styles.rightLink}`} href='https://github.com/mdn/translated-content/issues?q=author%3Acw118'>GitHub</Link>
        </div>
        <div className={styles.previewContainer} id={styles.mdn}></div>
      </div>
      <div className={styles.galleryItem}>
        <ItemHeader title='QUÉtudes-info'>
          <Tag>JavaScript</Tag>
          <Tag>CSS</Tag>
          <Tag>HTML</Tag>
          <Tag>Bootstrap&nbsp;4</Tag>
          <Tag>CS50</Tag>
        </ItemHeader>
        <div className={styles.itemDescription}>
          <p>I created this all-in-one resource for others to learn more about CEGEP and higher education in Québec. QUÉtudes-info provides full guides and references, explaining everything you need to know on the subject!</p>
          <p><i>All are welcome to <Link href='https://github.com/cw118/quetudesinfo/compare'>make a contribution</Link> through the GitHub repository <Link href='https://github.com/cw118/quetudesinfo'>cw118/quetudesinfo</Link>!</i></p>
        </div>
        <div className={styles.viewOn}>
          <Link className={`${styles.viewOnLink} ${styles.leftLink}`} href='https://cw118.github.io/quetudesinfo'>QUÉtudes-info</Link>
          <Link className={`${styles.viewOnLink} ${styles.rightLink}`} href='https://github.com/cw118/quetudesinfo'>GitHub</Link>
        </div>
        <div className={styles.previewContainer} id={styles.quetudesinfo}></div>
      </div>
      <div className={styles.galleryItem}>
        <ItemHeader title='WellFood (hackathon)'>
          <Tag>Tailwind</Tag>
          <Tag>Figma</Tag>
          <Tag>CSS</Tag>
          <Tag>HTML</Tag>
        </ItemHeader>
        <div className={styles.itemDescription}>
          <p><em><Link href='https://ellehacks.com/'>Distinction: ElleHacks+ finalist</Link></em></p>
          <p>This platform acts as a middleman between food suppliers and non-profit organizations to facilitate food donations.</p>
          <p>Solve two problems in one with WellFood: fight food insecurity and hunger by sharing excess food from restaurants with those in need.</p>
        </div>
        <div className={styles.viewOn}>
          <Link className={`${styles.viewOnLink} ${styles.leftLink}`} href='https://devpost.com/software/wellfood'>Devpost</Link>
          <Link className={`${styles.viewOnLink} ${styles.rightLink}`} href='https://www.figma.com/proto/k7awhli2KOVWhQHEh8PDLZ/Ellehacks-2022%3A-Fully-Developed---WellFood'>Figma</Link>
        </div>
        <div className={styles.previewContainer} id={styles.wellfood}></div>
      </div>
      <div className={styles.galleryItem}>
        <ItemHeader title='come-dine-with.us (hackathon)'>
          <Tag>Google&nbsp;Cloud</Tag>
          <Tag>Flask</Tag>
          <Tag>Bootstrap&nbsp;5</Tag>
          <Tag>CSS</Tag>
          <Tag>HTML</Tag>
        </ItemHeader>
        <div className={styles.itemDescription}>
          <p><i><Link href='https://bonhacketittwo.devpost.com/'>Prize: best use of Google Cloud</Link></i></p>
          <p>Our website allows users to view and publish posts through a Flask backend so that everyone can enjoy their meals in good company. We even have a chatbot there to answer your questions!</p>
          <p>Cooked too much and not sure what to do about it? Join the come-dine-with.us community!</p>
        </div>
        <div className={styles.viewOn}>
          <Link className={`${styles.viewOnLink} ${styles.leftLink}`} href='https://devpost.com/software/come-dine-with-us'>Devpost</Link>
          <Link className={`${styles.viewOnLink} ${styles.rightLink}`} href='https://github.com/piaoruilin/come-dine-with.us'>GitHub</Link>
        </div>
        <div className={styles.previewContainer} id={styles.comedinewithus}></div>
      </div>
      <div className={styles.galleryItem}>
        <ItemHeader title='EcoTrack (hackathon)'>
          <Tag>Flutter</Tag>
          <Tag>Dart</Tag>
          <Tag>Android&nbsp;Studio</Tag>
          <Tag>Figma</Tag>
        </ItemHeader>
        <div className={styles.itemDescription}>
          <p>The EcoTrack mobile app, built with Flutter, gives a short survey to assess your eco-consciousness. It'll then encourage you to adopt "greener" habits to help you reduce your carbon footprint.</p>
          <p>Global warming may very well spiral out of control — we must all take action!</p>
        </div>
        <div className={styles.viewOn}>
          <Link className={`${styles.viewOnLink} ${styles.leftLink}`} href='https://devpost.com/software/ecotrack-6l8v34'>Devpost</Link>
          <Link className={`${styles.viewOnLink} ${styles.rightLink}`} href='https://www.figma.com/proto/MfnXtXnFMUg5SANQFohYjj/EcoTrack'>Figma</Link>
        </div>
        <div className={styles.previewContainer} id={styles.ecotrack}></div>
      </div>
      <div className={styles.galleryItem}>
        <ItemHeader title='Totally Mari'>
          <Tag>Next.js</Tag>
          <Tag>CSS</Tag>
          <Tag>Figma</Tag>
          <Tag>Canva</Tag>
          <Tag>Git</Tag>
        </ItemHeader>
        <div className={styles.itemDescription}>
          <p>Website of the 2022-23 Marianopolis Robotics Team for the <Link href="https://robo-crc.ca">CRC Robotics Competition (AVIA 2023)</Link>. The theme is (inspired by) the show <i>Totally Spies!</i>, created in 2001.</p>
          <p><strong>1<sup>st</sup> place</strong> in the <em>Website Design</em> category + <strong>2<sup>nd</sup></strong> place in the <em>Website Content</em> category.</p>
        </div>
        <div className={styles.viewOn}>
          <Link className={`${styles.viewOnLink} ${styles.leftLink}`} href='https://totallymari.netlify.app'>Website</Link>
          <Link className={`${styles.viewOnLink} ${styles.rightLink}`} href='https://github.com/cw118/totallyslay'>GitHub</Link>
        </div>
        <div className={styles.previewContainer} id={styles.totallymari}></div>
      </div>
    </div>
  );
}

export default Gallery;