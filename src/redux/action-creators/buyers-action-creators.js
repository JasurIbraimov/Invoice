import {
	BUYERS_SET_SORTING,
	BUYERS_SET_BUYER_DATA,
} from '../action-types/buyers-action-types';

export const setSorting = (isSorting) => ({
	type: BUYERS_SET_SORTING,
	payload: isSorting,
});

export const setBuyerdata = (buyerId) => ({
	type: BUYERS_SET_BUYER_DATA,
	payload: buyerId,
});
