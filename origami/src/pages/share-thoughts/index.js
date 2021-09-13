import React from "react";
import styles from './index.module.css'
import PageLayout from "../../components/page-wrapper";
import Title from "../../components/title";
import SubmitButton from "../../components/button/submit-button";
import Origamis from "../../components/origamis";

const ShareThoughtsPage = () => {

    return (
        <div className={styles.app}>
            <PageLayout>
                <Title title="Share your thoughs" />
                <div className={styles.container}>
                    <div>
                        <textarea className={styles.textarea}>Publications..</textarea>
                    </div>
                    <SubmitButton title="Post" />
                    <div>
                    </div>
                </div>
                <Origamis />
            </PageLayout>
        </div>
    )
}

export default ShareThoughtsPage;