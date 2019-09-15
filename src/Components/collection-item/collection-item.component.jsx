import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({title, price, shortDescription, category, daysLeft}) => (
	<div className="card">
		<div className="card-header">
			<p className='item-category'>{category.toUpperCase()}</p>
			<p className='item-days-left'>{daysLeft} DAY/S LEFT</p>
		</div>
		<div className="card-container">
			<h4>
				<b>{title}</b>
			</h4>
			<p>{shortDescription}</p>
			<p>BUY FOR: ${price}</p>
			<div className='offer-link'>Offer</div>
		</div>
	</div>
);
export default CollectionItem;