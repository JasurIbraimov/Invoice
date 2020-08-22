import React from 'react';
import './SortBy.scss';
const SortBy = ({ sortByFunc, label, active }) => {
	return (
		<button
			className={active ? 'sort__btn sort__btn_active' : 'sort__btn'}
			onClick={() => sortByFunc()}
		>
			{label}
		</button>
	);
};

export default SortBy;
