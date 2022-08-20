import styles from '../../styles/Projects.module.css';
import Link from 'next/link';

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.galleryItem}>
        <h3 className={styles.itemTitle}>MDN Web Docs (localization)</h3>
        <div className={styles.itemDescription}>
          <p>As a member of the French review team, my main role is to triage and fix bugs, as well as to suggest and <Link href='https://github.com/mdn/translated-content/pulls?q=reviewed-by%3Acw118+'>review translations</Link>; I also contribute to <Link href='https://github.com/mdn/content/issues?q=author%3Acw118'>English content</Link> and to the source code.</p>
          <p><Link href='https://github.com/mdn'>MDN Web Docs</Link>, an open source project launched by Mozilla in 2005, documents web technologies such as HTML, CSS and JavaScript.</p>
        </div>
        <div className={styles.viewOn}>
          <Link href='https://developer.mozilla.org/'><a className={`${styles.viewOnLink} ${styles.leftLink}`}>MDN Web Docs</a></Link>
          <Link href='https://github.com/mdn/translated-content/issues?q=author%3Acw118'><a className={`${styles.viewOnLink} ${styles.rightLink}`}>GitHub</a></Link>
        </div>
        <div className={styles.previewContainer} id={styles.mdn}></div>
      </div>
      <div className={styles.galleryItem}>
        <h3 className={styles.itemTitle}>QUÉtudes-info</h3>
        <div className={styles.itemDescription}>
          <p>An all-in-one resource for anyone looking to learn more about CEGEP and higher education in Québec. QUÉtudes-info provides full guides and references, explaining everything you need to know on the subject!</p>
          <p><i>All are welcome to <Link href='https://github.com/cw118/quetudesinfo/compare'>make a contribution</Link> through the GitHub repository <Link href='https://github.com/cw118/quetudesinfo'>cw118/quetudesinfo</Link>!</i></p>
        </div>
        <div className={styles.viewOn}>
          <Link href='https://cw118.github.io/quetudesinfo'><a className={`${styles.viewOnLink} ${styles.leftLink}`}>QUÉtudes-info</a></Link>
          <Link href='https://github.com/cw118/quetudesinfo'><a className={`${styles.viewOnLink} ${styles.rightLink}`}>GitHub</a></Link>
        </div>
        <div className={styles.previewContainer} id={styles.quetudesinfo}></div>
      </div>
      <div className={styles.galleryItem}>
        <h3 className={styles.itemTitle}>WellFood</h3>
        <div className={styles.itemDescription}>
          <p><em><Link href='https://ellehacks.com/'>Distinction: ElleHacks+ finalist</Link></em></p>
          <p>This platform acts as a middleman between food suppliers and non-profit organizations to facilitate food donations.</p>
          <p>Solve two problems in one with WellFood: fight food insecurity and hunger by sharing excess food from restaurants with those in need.</p>
        </div>
        <div className={styles.viewOn}>
          <Link href='https://devpost.com/software/wellfood'><a className={`${styles.viewOnLink} ${styles.leftLink}`}>Devpost</a></Link>
          <Link href='https://www.figma.com/proto/k7awhli2KOVWhQHEh8PDLZ/Ellehacks-2022%3A-Fully-Developed---WellFood'><a className={`${styles.viewOnLink} ${styles.rightLink}`}>Figma</a></Link>
        </div>
        <div className={styles.previewContainer} id={styles.wellfood}></div>
      </div>
      <div className={styles.galleryItem}>
        <h3 className={styles.itemTitle}>come-dine-with.us</h3>
        <div className={styles.itemDescription}>
          <p><i><Link href='https://bonhacketittwo.devpost.com/'>Prize: best use of Google Cloud</Link></i></p>
          <p>Our website allows users to view and publish posts through a Flask backend so that everyone can enjoy their meals in good company. We even have a chatbot there to answer your questions!</p>
          <p>Cooked too much and not sure what to do about it? Join the come-dine-with.us community!</p>
        </div>
        <div className={styles.viewOn}>
          <Link href='https://devpost.com/software/come-dine-with-us'><a className={`${styles.viewOnLink} ${styles.leftLink}`}>Devpost</a></Link>
          <Link href='https://github.com/piaoruilin/come-dine-with.us'><a className={`${styles.viewOnLink} ${styles.rightLink}`}>GitHub</a></Link>
        </div>
        <div className={styles.previewContainer} id={styles.comedinewithus}></div>
      </div>
      <div className={styles.galleryItem}>
        <h3 className={styles.itemTitle}>EcoTrack</h3>
        <div className={styles.itemDescription}>
          <p>The EcoTrack mobile app, built with Flutter, gives a short survey to assess your eco-consciousness. It'll then encourage you to adopt "greener" habits to help you reduce your carbon footprint.</p>
          <p>Global warming may very well spiral out of control — we must all take action!</p>
        </div>
        <div className={styles.viewOn}>
          <Link href='https://devpost.com/software/ecotrack-6l8v34'><a className={`${styles.viewOnLink} ${styles.leftLink}`}>Devpost</a></Link>
          <Link href='https://www.figma.com/proto/MfnXtXnFMUg5SANQFohYjj/EcoTrack'><a className={`${styles.viewOnLink} ${styles.rightLink}`}>Figma</a></Link>
        </div>
        <div className={styles.previewContainer} id={styles.ecotrack}></div>
      </div>
      <div className={styles.galleryItem}>
        <h3 className={styles.itemTitle}>CS50x (Harvard)</h3>
        <div className={styles.itemDescription}>
          <p>A challenging but rewarding MOOC*. CS50 was one of my starting points in the computer science industry, having taught me the basics of programming and computational thinking. Thanks to this course, I found a real passion for technology.</p>
          <p><i>*MOOC = Massive Open Online Course</i></p>
        </div>
        <div className={styles.viewOn}>
          <Link href='https://cs50.harvard.edu/x/'><a className={styles.viewOnLink}>CS50x</a></Link>
        </div>
        <div className={styles.previewContainer} id={styles.cs50}></div>
      </div>
    </div>
  );
}

export default Gallery;