import React from 'react';
import Home from './Components/home.component';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeMounted: true
        };
    }
    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render() {
        let homeCmp = "";
        if (this.state.homeMounted) {
            homeCmp = (
                <Home
                    name={"Juanca"}
                    initialAge={25}
                />
            );
        }
        return (
            <div className="container">
                <div className="row">
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
