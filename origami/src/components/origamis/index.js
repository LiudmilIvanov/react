import React from 'react';
import styles from './index.module.css'
import Origam from "../origam";

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

        return (origamis.map((origam, index) => {
            return (
                <Origam key={origam.id} index={index} {...origam} />
            )
        })
        )
    }

    componentDidMount() {
        this.getOrigamis();
    }

    render() {
        return (
            <div className={styles["origamis-wrapper"]}>
                {this.renderOrigamis()}
            </div>
        )
    }
}

export default Origamis;
