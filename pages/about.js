import Nav from '../components/Nav';
import Hero from '../components/about/Hero';
import Codestack from '../components/about/Codestack';

const about = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Codestack />
      </main>
    </>
  );
}

export default about;