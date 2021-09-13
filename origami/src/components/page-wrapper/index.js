import styles from './index.module.css'
import Aside from '../aside'
import Footer from '../footer'
import Header from '../header'

const PageLayout = (props) => {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.container}>
                <Aside />
                <div className={styles['inner-container']}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PageLayout;
