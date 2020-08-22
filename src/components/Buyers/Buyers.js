import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { sortByAC } from '../../redux/thunks/buyers-thunk';
import { setBuyerdata } from '../../redux/action-creators/buyers-action-creators';
import SortBy from './SortBy';
import Buyer from './Buyer';
import './Buyers.scss';
const Buyers = () => {
	const dispatch = useDispatch();
	let history = useHistory();
	const goToBuyerProfile = (buyerId) => {
		history.push(`/buyers/${buyerId}`);
		dispatch(setBuyerdata(buyerId));
	};
	const buyers = useSelector((state) => state.buyers.buyers);
	const sortingParametrs = useSelector((state) => state.buyers.sortingParams);
	const paginationParametrs = useSelector(
		(state) => state.buyers.paginationParams
	);
	const isSorting = useSelector((state) => state.buyers.isSorting);
	const [paginationCount, setPaginationCount] = useState(15);
	const [selected, setSelected] = useState('');
	const [page, setPage] = useState(1);
	const pages = [];
	const pageCount = Math.ceil(buyers.length / paginationCount);
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}
	const newBuyers =
		paginationCount === 5
			? page === 1
				? [...buyers].slice(0, 5)
				: page === 2
				? [...buyers].slice(5, 10)
				: page === 3
				? [...buyers].slice(10, 15)
				: [...buyers].slice(0, 5)
			: paginationCount === 10
			? page === 1
				? [...buyers].slice(0, 10)
				: page === 2
				? [...buyers].slice(10, 15)
				: [...buyers].slice(0, 10)
			: [...buyers].slice(0, 15);
	const setNextPage = (number) => {
		setPage(number);
	};
	const onHadleSetPaginateBy = (paginationCount) => {
		setPaginationCount(paginationCount);
		setPage(1);
	};
	const onHandleSortBy = (sortingProperty, label, array) => {
		if (sortingProperty) {
			array.sort((a, b) => a[sortingProperty] - b[sortingProperty]);
			setSelected(label);
			dispatch(sortByAC());
		} else {
			array.sort((a, b) => {
				const firstBuyerName = a.buyerName.toLowerCase();
				const secondBuyerName = b.buyerName.toLowerCase();
				if (firstBuyerName < secondBuyerName) return -1;
				if (firstBuyerName > secondBuyerName) return 1;
				return 0;
			});
			setSelected(label);
			dispatch(sortByAC());
		}
	};
	return (
		<div className='buyers'>
			<h2 className='buyers__title'>Покупатели</h2>
			<h3 className='buyers__sort-title'>Отсортировать</h3>
			<div className='buyers__sort'>
				{sortingParametrs.map((sortby) => {
					return (
						<SortBy
							key={sortby.id}
							label={sortby.label}
							active={selected === sortby.label ? true : false}
							sortByFunc={() =>
								onHandleSortBy(sortby.sortBy, sortby.label, buyers)
							}
						/>
					);
				})}
				{paginationParametrs.map((paginateBy) => {
					return (
						<SortBy
							key={paginateBy.id}
							label={paginateBy.label}
							active={
								paginationCount === paginateBy.paginationCount ? true : false
							}
							sortByFunc={() =>
								onHadleSetPaginateBy(paginateBy.paginationCount)
							}
						/>
					);
				})}
			</div>
			<div className='buyers__table'>
				<div className='buyers__table-row buyers__table-row_header'>
					<div className='buyers__table-cell'>ID покупателя</div>
					<div className='buyers__table-cell'>Имя покупателя</div>
					<div className='buyers__table-cell'>Средний чек</div>
					<div className='buyers__table-cell'>Количество покупок</div>
					<div className='buyers__table-cell'>Общая выручка</div>
				</div>
				{isSorting ? (
					<div></div>
				) : (
					newBuyers.map((buyer) => {
						return (
							<Buyer
								goToBuyerProfile={() => goToBuyerProfile(buyer.buyerId)}
								key={buyer.buyerId}
								buyer={buyer}
							/>
						);
					})
				)}
			</div>
			<div className='buyers__pagination'>
				{pages.map((p) => {
					return (
						<SortBy
							key={p}
							label={p}
							active={p === page ? true : false}
							sortByFunc={() => setNextPage(p)}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Buyers;
