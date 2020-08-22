import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './Terminal.scss';
const Terminal = ({ terminalName, terminalDescr, deleteTerminal }) => {
	return (
		<div className='terminal'>
			<span className='terminal__del' onClick={() => deleteTerminal()}>
				<FontAwesomeIcon icon={faTimesCircle} />
			</span>
			<div className='terminal__name'>{terminalName} </div>
			<div className='terminal__descr'>{terminalDescr}</div>
		</div>
	);
};

export default Terminal;
