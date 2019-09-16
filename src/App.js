import React, {Component} from 'react';
import Home from './Components/home.component';

class App extends Component {
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
                name={"Facundo"}
                initialAge={25}
            />
        );
    } else {
        homeCmp = (
            <Home
                name={"Alvaro"}
                initialAge={23}
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
