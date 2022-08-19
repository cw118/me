import Nav from '../components/Nav';
import Hero from '../components/about/Hero';
import CodeStack from '../components/about/CodeStack';

const about = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CodeStack />
      </main>
    </>
  );
}

export default about;