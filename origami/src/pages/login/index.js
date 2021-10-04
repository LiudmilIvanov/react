import React from "react";
import SubmitButton from "../../components/button/submit-button";
import styles from './index.module.css'
import Title from "../../components/title";
import PageLayout from "../../components/page-wrapper";
import Input from "../../components/input";

const loginURl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDszcBNUd82gxv2s38wqcMK3BfOcAcC2Uk`

class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
        }
    }

    handleChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        fetch(loginURl, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(promise => {
            return promise.json()
        }).then(data => {
            const authToken = data.idToken
            document.cookie = `x-auth-token=${authToken}`

            if (email && data.idToken) {
                this.props.history.push('/')
            }
        }).catch(e => this.props.history.push('/error'))


    }

    render() {
        const { email, password } = this.state

        return (
            <PageLayout>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <Title title="Login" />
                    <Input value={email} onChange={(e) => this.handleChange(e, 'email')} label="Email" id="email" />
                    <Input type='password' value={password} onChange={(e) => this.handleChange(e, 'password')} label="Password" id="password" />
                    <SubmitButton title="Login" />
                </form>
            </PageLayout>
        )
    }


}

export default LoginPage