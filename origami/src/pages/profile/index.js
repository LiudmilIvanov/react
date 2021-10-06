import React from "react";
import PageLayout from "../../components/page-wrapper";
import Origamis from '../../components/origamis'
import UserContext from "../../Context";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            posts: null,
        }
    }

    static contextType = UserContext

    componentDidMount() {
        this.getUser(this.props.match.params.userid)
    }

    getUser = async (id) => {
        const response = await fetch(`https://origami-a9d80-default-rtdb.firebaseio.com/user/.json?id=${id}`)

        if (!response.ok) {
            this.props.history.push('/error')
        }

        const user = await response.json()

        this.setState({
            username: user.name,
            posts: user.posts && user.posts.lengh,
        })
    }

    logOut = () => {
        this.context.logOut()
        this.props.history.push('/')
    }

    render() {
        const { username } = this.state

        if (!username) {
            return (
                <PageLayout>
                    <div>
                        <p>
                            Loading...
                        </p>
                    </div>
                    <Origamis />
                </PageLayout>
            )
        }

        return (
            <PageLayout>
                <div>
                    <p>
                        User: {username}
                        User: {username}

                    </p>
                    <button onClick={this.logOut}>Logout</button>
                </div>
                <Origamis />
            </PageLayout>
        )
    }
}

export default ProfilePage