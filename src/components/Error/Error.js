import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './Error.scss';
const Error = ({ label }) => {
	return (
		<div className='error'>
			<span className='error__icon'>
				<FontAwesomeIcon icon={faExclamationTriangle} />
			</span>
			<p className='error__descr'>{label}</p>
		</div>
	);
};

export default Error;
