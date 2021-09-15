import React from "react";
import PageLayout from "../../components/page-wrapper";
import Origamis from '../../components/origamis'

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            posts: null,
        }
    }

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

    render() {
        const { username, posts } = this.state

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
                </div>
                <Origamis />
            </PageLayout>
        )
    }
}

export default ProfilePage