import React, {Component} from 'react';
import './App.css';

import Header from './Components/header/header.component';

import {connect} from 'react-redux';

import HomePage from './Pages/homepage/homepage.component';
import ContactPage from './Pages/contactpage/contactpage.component';
import AboutPage from './Pages/aboutpage/aboutpage.component';
import SignInPage from './Pages/sign-in-page/sign-in.component';
import SignUpPage from './Pages/sign-up-page/sign-up.component';
import ItemPage from './Pages/itempage/itempage.component';

import {setCurrentUser} from './redux/user/user.actions';

import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {

	unsubscribeFromAuth = null;

	componentDidMount() {
    const {setCurrentUser} = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			try {
        console.log('muestro userAuth: ',userAuth);
				if (userAuth) {
					const userRef = await createUserProfileDocument(userAuth);

					userRef.onSnapshot(snapShot => {
						setCurrentUser({

								id: snapShot.id,
								...snapShot.data()

						});
					});
				} else {
					setCurrentUser(userAuth);
				}
			} catch (err) {
				alert(err);
			}
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

  render() {
      return (
          <div>
            <Header />
            <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/about' component={AboutPage}/>
            <Route path='/contact' component={ContactPage}/>
            <Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? <Redirect to="/" /> : <SignInPage />
						}
					/>
            <Route path='/signup' component={SignUpPage}/>
            <Route 
					path="/itempage/:itemId" 
					render={()=> <ItemPage currentUser={this.props.currentUser}/>}
					/>
            </Switch>
          </div>
      );
  }
}
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});
const mapDispatchToProps = dispatch => ({

  setCurrentUser : user => dispatch(setCurrentUser(user))

});

export default connect(mapStateToProps,mapDispatchToProps)(App);
