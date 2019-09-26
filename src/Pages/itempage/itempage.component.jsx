import React,{Component} from 'react';
import './itempage.styles.scss';

import firebase from 'firebase/app';
import 'firebase/firestore';

import {withRouter} from 'react-router-dom';

import ItemOfferList from '../../Components/item-offer-list/item-offer-list.component';
import ItemDetail from '../../Components/item-detail/item-detail.component';
import OfferForm from '../../Components/offer-form/offer-form.component';

class ItemPage extends Component{
	constructor(props) {
		super(props);
		this.state = {
			item: '',
			offers: [],
			itemIds: []
		};
	}

	componentDidMount() {
		console.log(this.props.match);
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

	render(){
		console.log(this.props)
		return(
			<div className='item-page'>
				<div className='item-content'>
					<ItemDetail item={this.state.item} offers={this.state.offers}/>
					<ItemOfferList offers={this.state.offers}/>
				</div>
				<div className='item-offer-form'>
					<OfferForm 
						currentUser={this.props.currentUser}
						itemId={this.props.match.params.itemId}
					/>
				</div>
			</div>
		);
	}
};
export default withRouter(ItemPage);