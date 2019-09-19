import React from 'react';
import './App.css';

import HomePage from './Pages/home/home.component'
import Header from './Components/header/header.component'
import Contact from './Pages/contact/contact.component'
import About from './Pages/about/about.component'
import SignInPage from './Pages/sign-in/sign-in.component'
import {Route, Switch} from 'react-router-dom';
class App extends React.Component {

  render() {
      return (
          <div>
            <Header/>
            <Switch>
              <Route exact path='/' component={HomePage} />
              {/*<Route path='/header' component={Header} />*/}
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/signin' component={SignInPage} />
            </Switch>
          </div>
      );
  }
}

export default App;
