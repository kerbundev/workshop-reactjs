import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';
import { auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../image/favicon-coya.svg';

const Header = ({currentUser}) => (
	<div className="header">
		<Link to='/'>
			<Logo className='logo'/>
		</Link>
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
			{
				currentUser ? (
					<div className='option' onClick={()=>auth.signOut()}>
						Sign Out
					</div>
				):(
					<>
					<Link className='option' to='/signin'>Sing In</Link>
					<Link className='option' to='/signup'>Sing Up</Link>
					</>
				)
			}
		</div>
	</div>
);
export default Header;