import React from 'react';
import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ items }) => (
	<div className="collection-preview">
		{items.map(item => (
			<CollectionItem key={item.id} {...item} />
		))}
	</div>
);
export default CollectionPreview;