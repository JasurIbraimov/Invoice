import {
	AUTH_SET_IS_REQUEST_FAILED,
	AUTH_SET_IS_REQUEST_FETCHING,
	AUTH_SET_USER_IS_AUTH,
	AUTH_SET_USER_DATA,
} from '../action-types/auth-action-types';
const initialState = {
	isAuth: false,
	user: null,
	isFailed: false,
	isFetching: false,
};
export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_SET_USER_IS_AUTH:
			return {
				...state,
				isAuth: action.payload,
			};
		case AUTH_SET_IS_REQUEST_FAILED:
			return {
				...state,
				isFailed: action.payload,
			};
		case AUTH_SET_IS_REQUEST_FETCHING:
			return {
				...state,
				isFetching: action.payload,
			};
		case AUTH_SET_USER_DATA:
			return {
				...state,
				user: { ...action.payload },
			};
		default:
			return state;
	}
};
