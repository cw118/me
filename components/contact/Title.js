import Underline from '../Underline';
import styles from '../../styles/Contact.module.css';

const Title = () => {
  return (
    <div className='hero' id={styles.hero}>
      <h1 className='title'>Contact</h1>
      <Underline color='eggplant' />
    </div>
  )
}

export default Title;