import React from "react";
import LinkComponent from "../link";
import styles from './index.module.css'
import getNavigation from "../utils/navigation";

const Footer = () => {
    const links = getNavigation()
    return (
        <footer>
            <div>
                {links.map(nav => {
                    return (
                        <LinkComponent key={nav.title} href={nav.link} title={nav.title} type="header" />
                    )
                })}
            </div>
            <p className={styles.university}>
                Software University 2021
            </p >
        </footer>
    )
}

export default Footer;