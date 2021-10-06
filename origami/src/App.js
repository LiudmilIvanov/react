import React from "react";
import UserContext from "./Context";

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: null,
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

    render() {
        const { loggedIn, user } = this.state

        if (loggedIn === null) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <UserContext.Provider value={{
                loggedIn,
                user,
                logIn: this.logIn,
                logOut: this.logOut
            }}>
                {this.props.children}
            </UserContext.Provider>
        )

    }
}

export default App