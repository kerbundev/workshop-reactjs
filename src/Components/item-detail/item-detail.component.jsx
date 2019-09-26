import React from 'react';
import './item-detail.styles.scss';

const ItemDetail = ({ item: { title, price, fullDescription }, offers }) => {
	return (
		<>
			<h3 className="title">{title}</h3>
			<h5 className="price">${price}</h5>
			<span>DESCRIPTION</span>
			<p className="description">{fullDescription}</p>
			<h5 className="offer-list">Recieved Offers {`(${offers.length})`}</h5>
		</>
	);
};

export default ItemDetail;
