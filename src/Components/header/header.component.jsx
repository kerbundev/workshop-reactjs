import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';

const Header = () => (
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
		</div>
	</div>
);
export default Header;