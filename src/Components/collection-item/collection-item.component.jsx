import React from 'react';
import './collection-item.styles.scss';

import {Link} from 'react-router-dom';

const CollectionItem = ({id, title, price, shortDescription, category, daysLeft}) => (
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
			<Link className='offer-link' to={`itempage/${id}`}>Offer</Link>
		</div>
	</div>
);
export default CollectionItem;