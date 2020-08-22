import React from 'react';
import Error from '../Error';
import './NoMatchPage.scss';
const NoMatchPage = () => {
	return (
		<div className='nomatch-page'>
			<Error label='Ошибка 404, cтраница не найдена' />
		</div>
	);
};

export default NoMatchPage;
