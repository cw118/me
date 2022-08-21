import Nav from '../components/Nav';
import Hero from '../components/home/Hero';
import SeeAlso from '../components/home/SeeAlso';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SeeAlso />
      </main>
    </>
  );
}
