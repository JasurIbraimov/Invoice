import {
	TERMINALS_ADD_NEW_TERMINAL,
	TERMINALS_DELETE_TERMINAL,
} from '../action-types/terminals-action-types';
const initialState = {
	terminals: [],
};
export const terminalsReducer = (state = initialState, action) => {
	switch (action.type) {
		case TERMINALS_ADD_NEW_TERMINAL:
			return {
				...state,
				terminals: [...state.terminals, action.payload],
			};
		case TERMINALS_DELETE_TERMINAL:
			const terminalIndex = state.terminals.findIndex(
				(terminal) => terminal.terminalId === action.payload
			);
			return {
				...state,
				terminals: [
					...state.terminals.slice(0, terminalIndex),
					...state.terminals.slice(terminalIndex + 1),
				],
			};

		default:
			return state;
	}
};
