import React, { Component } from 'react';
import './offer-form.styles.scss';

import firebase from 'firebase/app';
import 'firebase/firestore';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

class OfferForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			description: '',
			duration: '',
			imageUrl: '',
			createdAt: ''
		};
	}

	handleSubmit = async event => {
		event.preventDefault();
		if(!this.props.currentUser) {
			this.setState({
				title: '',
				description: '',
				duration: '',
				imageUrl: '',
				createdAt: ''
			});
			return alert('YOU MUST SIGN IN TO OFFER!');
		} 
		const { title, description, duration, imageUrl } = this.state;

		const firestore = firebase.firestore();

		const offersRef = firestore.collection('offers');
		offersRef
			.add({
				title: title,
				description: description,
				duration: duration,
				imageUrl: imageUrl,
				createdAt: new Date()
			})
			.then(offerRef => {
				const itemOfferListRef = firestore.doc(`items/${this.props.itemId}`);
				itemOfferListRef.update({
					offerList: firebase.firestore.FieldValue.arrayUnion(offerRef)
				});
			})
			.catch(function(error) {
				console.error('Error adding an offer: ', error);
			});
		this.setState({
			title: '',
			description: '',
			duration: '',
			imageUrl: '',
			createdAt: ''
		});
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="offer-form">
				<h3 className="title">Make an Offer!</h3>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						name="title"
						type="text"
						value={this.state.title}
						label="title"
						required
					></FormInput>
					<FormInput
						handleChange={this.handleChange}
						name="description"
						type="text"
						value={this.state.description}
						label="description"
						required
					></FormInput>
					<FormInput
						handleChange={this.handleChange}
						name="duration"
						type="number"
						value={this.state.duration}
						label="duration (hours)"
						required
					></FormInput>
					<FormInput
						handleChange={this.handleChange}
						name="imageUrl"
						type="text"
						value={this.state.imageUrl}
						label="image url"
						required
					></FormInput>
					<CustomButton type="submit">Submit Offer</CustomButton>
				</form>
			</div>
		);
	}
}

export default OfferForm;