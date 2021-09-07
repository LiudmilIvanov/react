import react from "react";
import Link from "../link";
import styles from './index.module.css'

const Footer = () => {
    return (
        <footer>
            <div>
                <Link href="#/" title="Going to 1" type="header" />
                <Link href="#/" title="Going to 2" type="header" />
                <Link href="#/" title="Going to 3" type="header" />
                <Link href="#/" title="Going to 4" type="header" />
                <Link href="#/" title="Going to 5" type="header" />
            </div>
            <p className={styles.university}>
                Software University 2021
            </p >
        </footer>
    )
}

export default Footer;