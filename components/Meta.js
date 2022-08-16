import Head from 'next/head';

const Meta = ({ title, description }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: 'Carolyn Wu',
  description: 'Carolyn Wu\'s portfolio site',
}

export default Meta;