import Meta from '../components/Meta';
import Nav from '../components/Nav';
import Hero from '../components/projects/Hero';
import Gallery from '../components/projects/Gallery';
import SeeAlso from '../components/projects/SeeAlso';

const projects = () => {
  return (
    <>
      <Nav />
      <main>
        <Meta title='Projects | Carolyn Wu' />
        <Hero />
        <Gallery />
        <SeeAlso />
      </main>
    </>
  );
}

export default projects;