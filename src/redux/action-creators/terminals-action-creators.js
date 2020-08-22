import {
	TERMINALS_ADD_NEW_TERMINAL,
	TERMINALS_DELETE_TERMINAL,
} from '../action-types/terminals-action-types';

export const addNewTerminal = (terminalName, terminalDescr, terminalId) => ({
	type: TERMINALS_ADD_NEW_TERMINAL,
	payload: {
		terminalName,
		terminalDescr,
		terminalId,
	},
});

export const deleteTerminal = (terminalId) => ({
	type: TERMINALS_DELETE_TERMINAL,
	payload: terminalId,
});
