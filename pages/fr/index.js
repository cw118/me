import Nav from '../../components/Nav';
import Hero from '../../components/home/Hero';
import SeeAlso from '../../components/home/SeeAlso';

export default function Accueil() {
  return (
    <>
      <Nav />
      <main>
        <Hero lang='fr' />
        <SeeAlso lang='fr' />
      </main>
    </>
  );
}
