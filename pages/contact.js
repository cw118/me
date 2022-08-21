import Meta from '../components/Meta';
import Nav from '../components/Nav';
import Title from '../components/contact/Title';
import Form from '../components/contact/Form';

const contact = () => {
  return (
    <>
      <Nav />
      <main>
        <Meta title='Contact | Carolyn Wu' />
        <Title />
        <Form />
      </main>
    </>
  )
}

export default contact;