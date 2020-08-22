import { setSorting } from '../action-creators/buyers-action-creators';
export const sortByAC = () => (dispatch) => {
	dispatch(setSorting(true));
	dispatch(setSorting(false));
};
