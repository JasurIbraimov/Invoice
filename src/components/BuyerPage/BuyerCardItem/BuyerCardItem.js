import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BuyerCardItem.scss';
const BuyerCardItem = ({ label, icon, title }) => {
	return (
		<div className='card-item'>
			<span className='card-item__desrc'>
				<span className='card-item__icon'>
					<FontAwesomeIcon icon={icon} />
				</span>
				<span className='card-item__title'>{title}:</span>
			</span>
			<span>
				<span>{label}</span>
			</span>
		</div>
	);
};

export default BuyerCardItem;
