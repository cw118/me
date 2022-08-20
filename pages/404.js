import TopBar from '../components/specials/TopBar';
import Meta from '../components/Meta';
import Hero from '../components/specials/Hero';
import Checkerboard from '../components/specials/Checkerboard';

export default function Custom404() {
  return (
    <>
      <TopBar />
      <main>
        <Meta title='404 | Carolyn Wu' />
        <Hero color='metalPink' titleEn='404 page not found' titleFr='Page introuvable' uppercase />
        <Checkerboard />
      </main>
    </>
  );
}