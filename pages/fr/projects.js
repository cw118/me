import Meta from '../../components/Meta';
import Nav from '../../components/Nav';
import Hero from '../../components/projects/Hero';
import GalleryFr from '../../components/projects/GalleryFr';
import SeeAlso from '../../components/projects/SeeAlso';

const projects = () => {
  return (
    <>
      <Nav />
      <main>
        <Meta title='Projets | Carolyn Wu' />
        <Hero lang='fr' />
        <GalleryFr />
        <SeeAlso lang='fr' />
      </main>
    </>
  );
}

export default projects;