import {
	BUYERS_SET_SORTING,
	BUYERS_SET_BUYER_DATA,
} from '../action-types/buyers-action-types';
const initialState = {
	isSorting: false,
	buyers: [
		{
			buyerId: 1,
			buyerName: 'Сергей',
			averageСheck: 14000,
			perchaseCount: 10,
			totalRevenues: 140000,
		},
		{
			buyerId: 2,
			buyerName: 'Андрей',
			averageСheck: 15000,
			perchaseCount: 11,
			totalRevenues: 165000,
		},
		{
			buyerId: 3,
			buyerName: 'Михаил',
			averageСheck: 10000,
			perchaseCount: 9,
			totalRevenues: 90000,
		},
		{
			buyerId: 4,
			buyerName: 'Александра',
			averageСheck: 11200,
			perchaseCount: 8,
			totalRevenues: 89600,
		},
		{
			buyerId: 5,
			buyerName: 'Дария',
			averageСheck: 18000,
			perchaseCount: 14,
			totalRevenues: 252000,
		},
		{
			buyerId: 6,
			buyerName: 'Денис',
			averageСheck: 5000,
			perchaseCount: 6,
			totalRevenues: 30000,
		},
		{
			buyerId: 7,
			buyerName: 'Мария',
			averageСheck: 8000,
			perchaseCount: 7,
			totalRevenues: 56000,
		},
		{
			buyerId: 8,
			buyerName: 'Любовь',
			averageСheck: 10000,
			perchaseCount: 9,
			totalRevenues: 90000,
		},
		{
			buyerId: 9,
			buyerName: 'Алекс',
			averageСheck: 19000,
			perchaseCount: 16,
			totalRevenues: 280000,
		},
		{
			buyerId: 10,
			buyerName: 'Даниил',
			averageСheck: 20000,
			perchaseCount: 18,
			totalRevenues: 360000,
		},
		{
			buyerId: 11,
			buyerName: 'Олжас',
			averageСheck: 7000,
			perchaseCount: 5,
			totalRevenues: 35000,
		},
		{
			buyerId: 12,
			buyerName: 'Екатерина',
			averageСheck: 9000,
			perchaseCount: 4,
			totalRevenues: 36000,
		},
		{
			buyerId: 13,
			buyerName: 'Мира',
			averageСheck: 8500,
			perchaseCount: 5,
			totalRevenues: 42500,
		},
		{
			buyerId: 14,
			buyerName: 'Данила',
			averageСheck: 14000,
			perchaseCount: 14,
			totalRevenues: 196000,
		},
		{
			buyerId: 15,
			buyerName: 'Надя',
			averageСheck: 8900,
			perchaseCount: 6,
			totalRevenues: 53400,
		},
	],
	sortingParams: [
		{
			id: 1,
			sortBy: 'averageСheck',
			label: 'По среднему чеку',
		},
		{
			id: 2,
			sortBy: 'perchaseCount',
			label: 'По количеству покупок',
		},
		{
			id: 3,
			sortBy: 'totalRevenues',
			label: 'По общей выручке',
		},
		{ id: 4, label: 'По имени' },
		{ id: 5, sortBy: 'buyerId', label: 'Сбросить' },
	],
	paginationParams: [
		{ id: 1, paginationCount: 5, label: 'По 5' },
		{ id: 2, paginationCount: 10, label: 'По 10' },
		{ id: 3, paginationCount: 15, label: 'По 15' },
	],
	buyerData: null,
};
export const buyersReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUYERS_SET_SORTING:
			return {
				...state,
				isSorting: action.payload,
			};
		case BUYERS_SET_BUYER_DATA:
			return {
				...state,
				buyerData: state.buyers.filter(
					(buyer) => buyer.buyerId === action.payload
				),
			};
		default:
			return state;
	}
};
