import React, { Component } from 'react';

import FormInput from '../../Components/form-input/form-input.component';
import CustomButton from '../../Components/custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignInPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async event => {
		event.preventDefault();
		//por el momento hace nada...
	};

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h3>Sign in with your email and password</h3>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						name="email"
						type="email"
						value={this.state.email}
						label="email"
						required
					></FormInput>
					<FormInput
						handleChange={this.handleChange}
						name="password"
						type="password"
						value={this.state.password}
						label="password"
						required
					></FormInput>
					<CustomButton type="submit">SIGN IN</CustomButton>
				</form>
			</div>
		);
	}
}
export default SignInPage;
