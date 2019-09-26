import React from 'react';
import './item-offer-list.styles.scss';

import ItemOffer from '../item-offer/item-offer.component';

const ItemOfferList = ({ offers }) => {
	return (
		<div className="item-offer-list">
			{offers.map(({ id, ...otherItemProps }) => (
				<ItemOffer key={id} {...otherItemProps} />
			))}
		</div>
	);
};
export default ItemOfferList;