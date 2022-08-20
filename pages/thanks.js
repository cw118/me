import TopBar from '../components/specials/TopBar';
import Meta from '../components/Meta';
import Hero from '../components/specials/Hero';
import Checkerboard from '../components/specials/Checkerboard';

const thanks = () => {
  return (
    <>
      <TopBar />
      <main>
        <Meta title='Thanks/Merci :) | Carolyn Wu' />
        <Hero color='mint' titleEn='Submitted, thank you!' titleFr='Formulaire soumis, merci&nbsp;!' />
        <Checkerboard />
      </main>
    </>
  );
}

export default thanks;