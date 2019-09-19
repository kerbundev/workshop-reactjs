import React, {Component} from 'react';
import './App.css';

import Header from './Components/header/header.component';

import HomePage from './Pages/homepage/homepage.component';
import ContactPage from './Pages/contactpage/contactpage.component';
import AboutPage from './Pages/aboutpage/aboutpage.component';
import SignInPage from './Pages/sign-in-page/sign-in.component';

import {Route, Switch} from 'react-router-dom';

class App extends Component {

  render() {
      return (
          <div>
            <Header />
            <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/about' component={AboutPage}/>
            <Route path='/contact' component={ContactPage}/>
            <Route path='/signin' component={SignInPage}/>
            </Switch>
          </div>
      );
  }
}

export default App;
