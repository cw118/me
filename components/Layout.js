import Meta from './Meta';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      {children}
    </>
  );
}

export default Layout;