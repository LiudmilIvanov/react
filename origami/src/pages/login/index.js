import React from "react";
import SubmitButton from "../../components/button/submit-button";
import styles from './index.module.css'
import Title from "../../components/title";
import PageLayout from "../../components/page-wrapper";

const LoginPage = () => {
    return (
        <PageLayout>
            <div className={styles.container}>
                <Title title="Login" />

                <SubmitButton title="Login" />
            </div>
        </PageLayout>
    )
}

export default LoginPage