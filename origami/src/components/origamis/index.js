import React from "react";
import styles from './index.module.css'


class Origamis extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            origamis: []
        }
    }

    getOrigamis = async () => {
       let orArray = [];
       
        const promise = await fetch('https://origami-a9d80-default-rtdb.firebaseio.com/origami/.json');
        const origamis = await promise.json();

        Object.values(origamis).forEach((value) => {
            orArray.push(value)
        })

        this.setState({
            origamis: orArray
        })
    }

    renderOrigamis() {
        const { origamis } = this.state;

        return (origamis.map(origam => {
            return (
                <div>
                    {origam.description}
                </div>
            )
        })
        )
    }

    componentDidMount() {
        this.getOrigamis();
    }

    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Origami</h1>
                <div>
                    {this.renderOrigamis()}
                </div>
            </div>
        )
    }
}

export default Origamis;