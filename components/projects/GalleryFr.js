import styles from '../../styles/Projects.module.css';
import Link from 'next/link';
import Tag from './Tag';
import ItemHeader from './ItemHeader';

const GalleryFr = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.galleryItem}>
        <ItemHeader title='MDN Web Docs (localisation)'>
          <Tag>l10n</Tag>
          <Tag>Markdown</Tag>
          <Tag>Git</Tag>
          <Tag>GitHub</Tag>
          <Tag>API</Tag>
          <Tag>CSS</Tag>
          <Tag>HTML</Tag>
          <Tag>JS</Tag>
        </ItemHeader>
        <div className={styles.itemDescription}>
          <p>Je fais partie de l'équipe de revue responsable de la locale française — mon rôle principal consiste donc à trier et corriger des bugs, ainsi qu'à proposer et <Link href='https://github.com/mdn/translated-content/pulls?q=reviewed-by%3Acw118+'>relire des traductions</Link>&nbsp;; je contribue aussi <Link href='https://github.com/mdn/content/issues?q=author%3Acw118'>au contenu anglais</Link> et au code source.</p>
          <p><Link href='https://github.com/mdn'>MDN Web Docs</Link>, un projet open-source lancé par Mozilla en 2005, documente les technologies web (HTML, CSS, etc.).</p>
        </div>
        <div className={styles.viewOn}>
          <Link href='https://developer.mozilla.org/'><a className={`${styles.viewOnLink} ${styles.leftLink}`}>MDN Web Docs</a></Link>
          <Link href='https://github.com/mdn/translated-content/issues?q=author%3Acw118'><a className={`${styles.viewOnLink} ${styles.rightLink}`}>GitHub</a></Link>
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
          <p>J'ai créé cette ressource tout-en-un pour renseigner le public sur le cégep et l'enseignement supérieur au Québec. QUÉtudes-info fournit des guides et références complets expliquant tout ce qu'il faut savoir sur le sujet&nbsp;!</p>
          <p><i>Vous pouvez <Link href='https://github.com/cw118/quetudesinfo/compare'>apporter une contribution</Link> sur le dépôt GitHub <Link href='https://github.com/cw118/quetudesinfo'>cw118/quetudesinfo</Link>&nbsp;!</i></p>
        </div>
        <div className={styles.viewOn}>
          <Link href='https://cw118.github.io/quetudesinfo'><a className={`${styles.viewOnLink} ${styles.leftLink}`}>QUÉtudes-info</a></Link>
          <Link href='https://github.com/cw118/quetudesinfo'><a className={`${styles.viewOnLink} ${styles.rightLink}`}>GitHub</a></Link>
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
          <p><em><Link href='https://ellehacks.com/'>Distinction&nbsp;: projet finaliste du hackathon Ellehacks+</Link></em></p>
          <p>Cette plateforme agit comme intermédiaire entre les fournisseurs d'aliments et les OBNL afin de faciliter des dons de nourriture.</p>
          <p>WellFood&nbsp;: lutter contre l'insécurité alimentaire et la faim en mettant à disposition aux personnes dans le besoin des denrées excédentaires.</p>
        </div>
        <div className={styles.viewOn}>
          <Link href='https://devpost.com/software/wellfood'><a className={`${styles.viewOnLink} ${styles.leftLink}`}>Devpost</a></Link>
          <Link href='https://www.figma.com/proto/k7awhli2KOVWhQHEh8PDLZ/Ellehacks-2022%3A-Fully-Developed---WellFood'><a className={`${styles.viewOnLink} ${styles.rightLink}`}>Figma</a></Link>
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
          <p><i><Link href='https://bonhacketittwo.devpost.com/'>Prix&nbsp;: meilleur usage de Google Cloud</Link></i></p>
          <p>Grâce à un back-end Flask, notre site web permet aux utilisateur·rices de voir/publier des posts pour que chacun·e puisse manger en bonne compagnie.</p>
          <p>Vous avez préparé trop de nourriture et ne savez pas quoi en faire&nbsp;? Dînez avec nous&nbsp;!</p>
        </div>
        <div className={styles.viewOn}>
          <Link href='https://devpost.com/software/come-dine-with-us'><a className={`${styles.viewOnLink} ${styles.leftLink}`}>Devpost</a></Link>
          <Link href='https://github.com/piaoruilin/come-dine-with.us'><a className={`${styles.viewOnLink} ${styles.rightLink}`}>GitHub</a></Link>
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
          <p>L'application mobile EcoTrack, conçue en Flutter, propose un sondage qui évalue votre conscience écologique. Elle vous aide à réduire votre empreinte carbone en vous encourageant à adopter des habitudes "vertes".</p>
          <p>Le réchauffement planétaire risque de devenir catastrophique — on ne peut pas rester les bras croisés&nbsp;!</p>
        </div>
        <div className={styles.viewOn}>
          <Link href='https://devpost.com/software/ecotrack-6l8v34'><a className={`${styles.viewOnLink} ${styles.leftLink}`}>Devpost</a></Link>
          <Link href='https://www.figma.com/proto/MfnXtXnFMUg5SANQFohYjj/EcoTrack'><a className={`${styles.viewOnLink} ${styles.rightLink}`}>Figma</a></Link>
        </div>
        <div className={styles.previewContainer} id={styles.ecotrack}></div>
      </div>
      <div className={styles.galleryItem}>
        <ItemHeader title='CS50 (Harvard)'>
          <Tag>C</Tag>
          <Tag>Python</Tag>
          <Tag>SQL</Tag>
          <Tag>Flask</Tag>
          <Tag>HTML</Tag>
          <Tag>CSS</Tag>
          <Tag>JavaScript</Tag>
        </ItemHeader>
        <div className={styles.itemDescription}>
          <p>Un MOOC* exigeant mais gratifiant et l'un des points de départ de mon parcours dans l'industrie de l'informatique. CS50 m'a appris les bases de la programmation et de la pensée computationnelle — grâce à lui, je me suis découvert une vraie passion pour la technologie.</p>
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

export default GalleryFr;