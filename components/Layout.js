import Meta from './Meta';
import Footer from './Footer';

const Layout = ({ children }) => {

  return (
    <>
      <Meta />
      {children}
      <Footer />
    </>
  );
}

export default Layout;