import Meta from '../../components/Meta'
import Nav from '../../components/Nav';
import Hero from '../../components/about/Hero';
import CodeStack from '../../components/about/CodeStack';
import TechStack from '../../components/about/TechStack';
import SeeAlso from '../../components/about/SeeAlso';

const about = () => {
  return (
    <>
      <Nav />
      <main>
        <Meta title='À propos | Carolyn Wu' />
        <Hero lang='fr' />
        <CodeStack lang='fr' />
        <TechStack />
        <SeeAlso lang='fr' />
      </main>
    </>
  );
}

export default about;