import styles from './index.module.css'
import Aside from '../aside'
import Footer from '../footer'
import Header from '../header'

const PageWrapper = (props) => {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.container}>
                <Aside />
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default PageWrapper;
