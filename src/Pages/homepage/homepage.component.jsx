import React, { Component } from 'react';
import './homepage.styles.scss';

import SearchBox from '../../Components/search-box/search-box.component';
import CollectionPreview from '../../Components/collection-preview/collection-preview.component';
import ITEM_DATA from '../../items.data';

class HomePage extends Component {
	constructor() {
		super();

		this.state = {
            filteredItems: ITEM_DATA,
            items: ITEM_DATA
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