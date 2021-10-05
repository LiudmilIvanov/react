import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: false,
            user: null
        }
    }

    logIn = (user) => {
        this.setState({
            loggedIn: true,
            user
        })
    }

    logOut = () => {
        this.setState({
            loggedIn: false,
            user: null
        })
    }

    // changeLoggedIn = () => {
    //     this.setState({
    //         loggedIn: !this.state.loggedIn
    //     })
    // }

    render() {
        return this.props.children
    }
}

export default App