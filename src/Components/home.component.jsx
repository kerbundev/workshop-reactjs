import React, {Component} from 'react';
import App from "../App";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            age: props.initialAge
        };
        console.log("Constructor");
    }

    UNSAFE_componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Component did mount!");
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("Component will receive props", nextProps);
        this.setState({
            name: nextProps.name,
            age: nextProps.initialAge
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component update", nextProps, nextState);
        return true;
    }


    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    onMakeOlder = () => {
        this.setState({
            age: this.state.age + 1
        });
    }

    render() {
        console.log('Render');
        return (
            <div>
                <h2>Component LifeCycle Methods Test!!</h2>
                <p>Your name is {this.state.name}, your age is {this.state.age}</p>
                <hr/>
                <button onClick={this.onMakeOlder} className="btn btn-primary">Make me older!</button>
                <hr/>
            </div>
        );
    }
}

export default Home;