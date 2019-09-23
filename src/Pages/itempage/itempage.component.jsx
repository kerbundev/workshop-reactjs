import React, { Component } from 'react';
import './itempage.styles.scss';

import firebase from 'firebase/app';
import 'firebase/firestore';

import {withRouter} from 'react-router-dom'

class ItemPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: '',
			offers: [],
			itemIds: []
		};
	}

	componentDidMount() {
		const firestore = firebase.firestore();
		const itemsRef = firestore.doc(`items/${this.props.match.params.itemId}`);

		itemsRef.onSnapshot(item => {
			this.setState({
				offers: [],
				item: item.data()
			});
			const offerRefList = item.data().offerList;
			offerRefList.forEach(offerRef => {
				offerRef.get().then(offer => {
					const id = offer.id;
					this.setState(prevState => ({
						offers: [...prevState.offers, { id, ...offer.data() }]
					}));
				});
			});
		});
	}
	render() {
		return (
				<div className='item-page'>
				
				</div>

		);
	}
}
export default withRouter(ItemPage);