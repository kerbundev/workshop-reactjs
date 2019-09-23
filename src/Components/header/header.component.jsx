import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';
import { auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
	<div className="header">
		<div className="options">
			<Link className="option" to="/">
				Home
			</Link>
			<Link className="option" to="/contact">
				Contact
			</Link>
			<Link className="option" to="/about">
				About
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					Sign out
				</div>
			) : (
				<>
					<Link className="option" to="/signin">
						Sign In
					</Link>
					<Link className="option" to="/signup">
						Sign Up
					</Link>
				</>
			)}
		</div>
	</div>
);
export default Header;