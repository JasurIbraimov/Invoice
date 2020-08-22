import {
	AUTH_SET_USER_IS_AUTH,
	AUTH_SET_USER_DATA,
	AUTH_SET_IS_REQUEST_FAILED,
	AUTH_SET_IS_REQUEST_FETCHING,
} from '../action-types/auth-action-types';
export const setUserAuth = (isAuth) => ({
	type: AUTH_SET_USER_IS_AUTH,
	payload: isAuth,
});
export const setUserData = (data) => ({
	type: AUTH_SET_USER_DATA,
	payload: data,
});

export const setRequestFailed = (isFailed) => ({
	type: AUTH_SET_IS_REQUEST_FAILED,
	payload: isFailed,
});

export const setRequestFetching = (isFetching) => ({
	type: AUTH_SET_IS_REQUEST_FETCHING,
	payload: isFetching,
});
