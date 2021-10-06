import React from "react";
import LinkComponent from "../link";
import styles from './index.module.css'
import getNavigation from "../utils/navigation";
import UserContext from "../../Context";

class Footer extends React.Component {
    static contextType = UserContext

    render() {
        const { loggedIn, user } = this.context
        const links = getNavigation(loggedIn, user)
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
}

export default Footer