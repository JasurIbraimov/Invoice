import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Loader.scss';
const Loader = ({ label }) => {
	return (
		<div className='loader'>
			<span className='loader__icon'>
				<FontAwesomeIcon icon={faSpinner} spin />
			</span>
		</div>
	);
};

export default Loader;
