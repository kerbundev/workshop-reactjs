import React, { Component } from 'react';
import './item-offer.styles.scss';

class ItemOffer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: '',
			time: ''
		};
	}

	componentDidMount() {
		const { createdAt } = this.props;
		if (createdAt) {
			const offerDate = new Date(createdAt.seconds * 1000);
			this.setState({
				date: offerDate.toLocaleDateString(),
				time: offerDate.toLocaleTimeString()
			});
		}
	}

	render() {
		const { title, description, duration, imageUrl } = this.props;
		return (
			<div className="item-offer">
				<div
					className="background-image"
					style={{
						backgroundImage: `url(${imageUrl})`
					}}
				></div>
				<div className="offer-detail">
					<h5>{title.toUpperCase()}</h5>
					<p>{description}</p>
					<span>Duration: {duration}hs.</span>
					<p>
						Date: {this.state.date} - {this.state.time}
					</p>
				</div>
			</div>
		);
	}
}
export default ItemOffer;