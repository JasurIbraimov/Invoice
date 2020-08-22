import GithubAPI from '../../services/githubAPI';
import {
	setUserAuth,
	setUserData,
	setRequestFailed,
	setRequestFetching,
} from '../action-creators/auth-action-creators';
const service = new GithubAPI();
export const getUserByApi = (login) => (dispatch) => {
	dispatch(setRequestFetching(true));
	service.getUser(login).then((res) => {
		if (!res.login && !res.avatar) {
			dispatch(setRequestFailed(true));
		} else {
			dispatch(setRequestFailed(false));
			dispatch(setUserData(res));
			dispatch(setUserAuth(true));
		}
		setTimeout(() => {
			dispatch(setRequestFailed(false));
		}, 4000);
		dispatch(setRequestFetching(false));
	});
};
