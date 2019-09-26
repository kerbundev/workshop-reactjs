import React, {Component} from 'react';
import './App.css';

import Header from './Components/header/header.component';

import HomePage from './Pages/homepage/homepage.component';
import ContactPage from './Pages/contactpage/contactpage.component';
import AboutPage from './Pages/aboutpage/aboutpage.component';
import SignInPage from './Pages/sign-in-page/sign-in.component';
import SignUpPage from './Pages/sign-up-page/sign-up.component';
import ItemPage from './Pages/itempage/itempage.component';

import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			try {
				if (userAuth) {
					const userRef = await createUserProfileDocument(userAuth);

					userRef.onSnapshot(snapShot => {
						this.setState({
							currentUser: {
								id: snapShot.id,
								...snapShot.data()
							}
						});
					});
				} else {
					this.setState({ currentUser: userAuth });
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
            <Header currentUser={this.state.currentUser}/>
            <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/about' component={AboutPage}/>
            <Route path='/contact' component={ContactPage}/>
            <Route
						exact
						path="/signin"
						render={() =>
							this.state.currentUser ? <Redirect to="/" /> : <SignInPage />
						}
					/>
            <Route path='/signup' component={SignUpPage}/>
            <Route 
					path="/itempage/:itemId" 
					render={()=> <ItemPage currentUser={this.state.currentUser}/>}
					/>
            </Switch>
          </div>
      );
  }
}

export default App;
