import React from "react";
import LinkComponent from "../link";
import styles from './index.module.css'
import getNavigation from "../utils/navigation";
import UserContext from '../../Context'

class Aside extends React.Component {

    static contextType = UserContext

    render() {
        const { user } = this.context
        const links = getNavigation(user)

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
}

export default Aside;