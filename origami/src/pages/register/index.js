import React from "react";
import Title from "../../components/title";
import SubmitButton from "../../components/button/submit-button";
import styles from './index.module.css'
import PageLayout from "../../components/page-wrapper";
import Input from "../../components/input";
import authenticate from "../../components/utils/authenticate";
import UserContext from "../../Context";

const registerUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDszcBNUd82gxv2s38wqcMK3BfOcAcC2Uk`;

class RegisterPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            rePassword: "",
        }
    }

    static contextType = UserContext


    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password, rePassword } = this.state;

        if (password !== rePassword) {
            return
        }

        await authenticate(registerUrl, {
            email,
            password
        }, (user) => {
            console.log('success')
            this.props.history.push('/')
            this.context.loggIn(user)

        }, (e) => {
            console.log('Error', e)
        })

    }

    render() {
        const { email, password, rePassword } = this.state

        return (
            <PageLayout>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <Title title="Register" />
                    <Input value={email} onChange={(e) => this.onChange(e, 'email')} label="Email" id="email" />
                    <Input type="password" value={password} onChange={(e) => this.onChange(e, 'password')} label="Password" id="password" />
                    <Input type="password" value={rePassword} onChange={(e) => this.onChange(e, 'rePassword')} label="Re-password" id="re-password" />
                    <SubmitButton title="Register" />
                </form>
            </PageLayout>
        )
    }


}

export default RegisterPage