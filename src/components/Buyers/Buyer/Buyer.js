import React from 'react';

const Buyer = ({ buyer, goToBuyerProfile }) => {
	return (
		<div className='buyers__table-row' onClick={goToBuyerProfile}>
			<div className='buyers__table-cell buyers__table-cell_hovered'>
				{buyer.buyerId}
			</div>
			<div className='buyers__table-cell'>{buyer.buyerName}</div>
			<div className='buyers__table-cell'>{buyer.averageСheck}</div>
			<div className='buyers__table-cell'>{buyer.perchaseCount}</div>
			<div className='buyers__table-cell'>{buyer.totalRevenues}</div>
		</div>
	);
};

export default Buyer;
