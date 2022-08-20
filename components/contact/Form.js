import styles from '../../styles/Contact.module.css';

const Form = ({ lang }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className={styles.form} method='post' onSubmit={handleSubmit}>
      <span id={styles.formMsg}></span>
      <div className={styles.inputGroup}>
        <label htmlFor='firstName' className={styles.label}>{lang ? 'Prénom (requis)\xa0:' : 'First name (required):'}</label>
        <input type='text' className={styles.shortInput} name='firstName' required />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='lastName' className={styles.label}>{lang ? 'Nom (requis)\xa0:' : 'Last name (required):'}</label>
        <input type='text' className={styles.shortInput} name='lastName' required />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='emailAddress' className={styles.label}>{lang ? 'E-mail (requis)\xa0:' : 'Email (required):'}</label>
        <input type='email' className={styles.shortInput} name='emailAddress' required />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='message' className={styles.label}>{lang ? 'Message (requis)\xa0:' : 'Message (required):'}</label>
        <textarea id={styles.message} className={styles.longInput} name='message' required></textarea>
      </div>
      <input className={styles.submitBtn} type='submit' value={lang ? 'Envoyer' : 'Send'} />
    </form>
  );
}

export default Form;