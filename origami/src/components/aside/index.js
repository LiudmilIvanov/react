import React from "react";
import LinkComponent from "../link";
import styles from './index.module.css'
import getNavigation from "../utils/navigation";


const Aside = () => {
    const links = getNavigation()
    return (
        <aside className={styles.container}>
            {links.map(nav => {
                return (
                    <LinkComponent key={nav.title} href={nav.link} title={nav.title} type="aside" />
                )
            })}
        </aside>
    )

}

export default Aside;