import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setBuyerdata } from '../../redux/action-creators/buyers-action-creators';
import {
	faMoneyBill,
	faShoppingCart,
	faCoins,
} from '@fortawesome/free-solid-svg-icons';
import './BuyerPage.scss';
import Error from '../Error';
import BuyerCardItem from './BuyerCardItem';
const BuyerPage = () => {
	const dispatch = useDispatch();
	const { buyerId } = useParams();
	const buyerData = useSelector((state) => state.buyers.buyerData);
	useEffect(() => {
		dispatch(setBuyerdata(+buyerId));
	}, [dispatch, buyerId]);

	const notFound =
		buyerData && buyerData.length === 0 ? (
			<Error label='Пользователь не найден' />
		) : null;

	return (
		<div className='buyer-page'>
			{notFound}
			{buyerData
				? buyerData.map((buyer) => {
						return (
							<div className='buyer-page__card'>
								<h3 className='buyer-page__name'>{buyer.buyerName}</h3>
								<BuyerCardItem
									title='Средний чек'
									icon={faMoneyBill}
									label={buyer.averageСheck}
								/>
								<BuyerCardItem
									title='Количество покупок'
									icon={faShoppingCart}
									label={buyer.perchaseCount}
								/>
								<BuyerCardItem
									title='Общая выручка'
									icon={faCoins}
									label={buyer.totalRevenues}
								/>
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default BuyerPage;
