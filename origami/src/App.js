import React, { useState } from "react";
import UserContext from "./Context";

const App = (props) => {
    const [user, setUser] = useState(null)
    // const [loggedIn, setLoggedIn] = useState(null)

    const logIn = (user) => {
        setUser({
            ...user,
            loggedIn: true
        })
    }

    const logOut = () => {
        setUser({
            loggedIn: false
        })
    }

    return (
        <UserContext.Provider value={{
            user,
            logIn: logIn,
            logOut: logOut
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

// class App extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             loggedIn: null,
//             user: null
//         }
//     }

//     logIn = (user) => {
//         this.setState({
//             loggedIn: true,
//             user
//         })
//     }

//     logOut = () => {
//         this.setState({
//             loggedIn: false,
//             user: null
//         })
//     }

//     render() {
//         const { loggedIn, user } = this.state

//         return (
//             <UserContext.Provider value={{
//                 loggedIn,
//                 user,
//                 logIn: this.logIn,
//                 logOut: this.logOut
//             }}>
//                 {this.props.children}
//             </UserContext.Provider>
//         )

//     }
// }

export default App