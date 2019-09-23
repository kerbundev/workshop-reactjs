import React, { Component } from 'react';
import './homepage.styles.scss';

import firebase from 'firebase/app';
import 'firebase/firestore';

import SearchBox from '../../Components/search-box/search-box.component';
import CollectionPreview from '../../Components/collection-preview/collection-preview.component';

class HomePage extends Component {
	constructor() {
		super();

		this.state = {
            filteredItems: [],
            items: []
		};
	}

	handleSearch = (inputText) => {

		if ('' === inputText) {
			return this.setState({
				filteredItems : this.state.items
			});
		}

		const filteredItems = this.state.items.filter(item =>
			item.title.toLowerCase().includes(inputText.toLowerCase())
		);
		this.setState({
			filteredItems: filteredItems
		});
	};

	loadAllItems = () => {
		const firestore = firebase.firestore();
		const itemsRef = firestore.collection('items/');

		this.setState({
			filteredItems: [],
			items: []
		});

		itemsRef.get().then(items => {
			const itemList = items.docs;
			itemList.forEach(item => {
				const id = item.id;
				this.setState(prevState => ({
					items: [...prevState.items, { id, ...item.data() }],
					filteredItems: [...prevState.items, { id, ...item.data() }]
				}));
			});
		});
	};
	componentDidMount() {
		this.loadAllItems();
	}

	render() {
		console.log(this.props);
		return (
			<div className="homepage">
				<h3>Consigue mejores precios y reduce costos de envío</h3>
				<span>
					Publica el producto que desean comprar y te recomensameos algunos
					grupos <br /> con itereses similare, para qu epuedas recibir las
					mejores ofertas.
				</span>
				<SearchBox getInputText={this.handleSearch} />
				<CollectionPreview items={this.state.filteredItems} />
			</div>
		);
	}
}

export default HomePage;