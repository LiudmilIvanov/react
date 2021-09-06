import React from "react";
import styles from './index.module.css'

const Link = ({ title, href, type }) => {
    return (
        <div className={styles[`${type}-list-item`]}>
            <a className={styles[`${type}-list`]} href={href}>{title} </a>
        </div>
    )
}

export default Link;
