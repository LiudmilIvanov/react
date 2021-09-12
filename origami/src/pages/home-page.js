import styles from './app.module.css'
import Origamis from '../components/origamis';
import PageWrapper from '../components/page-wrapper';

const HomePage = () => {
  return (
    <div className={styles.app}>
      <PageWrapper>
        <Origamis />
      </PageWrapper>
    </div>
  );
}

export default HomePage;
