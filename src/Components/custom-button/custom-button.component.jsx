import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, handleClick }) => (
	<button onClick={handleClick} className="custom-button">
		{children}
	</button>
);
export default CustomButton;