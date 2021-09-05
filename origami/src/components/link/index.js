import React from "react";
import styles from './index.module.css'

const Link = ({ title, href }) => {
    return (
        <li className={styles["list-item"]}>
            <a className={styles["header-link"]} href={href}>{title} </a>
        </li>
    )
}

export default Link;
