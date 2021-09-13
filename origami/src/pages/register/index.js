import React from "react";
import Title from "../../components/title";
import SubmitButton from "../../components/button/submit-button";
import styles from './index.module.css'
import PageLayout from "../../components/page-wrapper";
import Input from "../../components/input";


const RegisterPage = () => {
    return (
        <PageLayout>
            <div className={styles.container}>
                <Title title="Register" />
                <Input value="" onChange={() => { }} label="Email" id="email" />
                <Input value="" onChange={() => { }} label="Password" id="password" />
                <Input value="" onChange={() => { }} label="Re-password" id="re-password" />
                <SubmitButton title="Register" />
            </div>
        </PageLayout>
    )
}

export default RegisterPage