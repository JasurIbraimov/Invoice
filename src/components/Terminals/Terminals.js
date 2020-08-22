import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {
	addNewTerminal,
	deleteTerminal,
} from '../../redux/action-creators/terminals-action-creators';
import Terminal from './Terminal';
import './Terminals.scss';
const Terminals = () => {
	const terminals = useSelector((state) => state.terminals.terminals);
	const dispatch = useDispatch();
	const [terminalName, setTerminalName] = useState('');
	const [terminalDescr, setTerminalDescr] = useState('');
	const onFormSubmit = (e) => {
		e.preventDefault();
		if (terminalName && terminalDescr) {
			const terminalId = `f${(+new Date()).toString(16)}`;
			dispatch(addNewTerminal(terminalName, terminalDescr, terminalId));
			setTerminalDescr('');
			setTerminalName('');
		}
	};
	return (
		<div className='terminals'>
			<h2 className='terminals__title'>Терминалы</h2>
			<form className='terminals__form' onSubmit={(e) => onFormSubmit(e)}>
				<input
					onChange={(e) => setTerminalName(e.target.value)}
					name='terminalName'
					className='terminals__input'
					value={terminalName}
					type='text'
					placeholder='Название терминала'
				/>
				<input
					onChange={(e) => setTerminalDescr(e.target.value)}
					name='terminalDescr'
					value={terminalDescr}
					type='text'
					className='terminals__input'
					placeholder='Описание терминала'
				></input>
				<button className='terminals__btn'>
					<span className='terminals__btn-icon'>
						<FontAwesomeIcon icon={faPlusCircle} />
					</span>
					Добавить
				</button>
			</form>
			{terminals.length ? (
				<div className='terminals__list'>
					<div className='terminals__list-name'>Название терминала</div>
					<div className='terminals__list-descr'>Описание терминала</div>
					<div className='terminals__list-content'>
						{terminals.map((terminal) => {
							return (
								<Terminal
									key={terminal.terminalId}
									deleteTerminal={() =>
										dispatch(deleteTerminal(terminal.terminalId))
									}
									terminalName={terminal.terminalName}
									terminalDescr={terminal.terminalDescr}
								/>
							);
						})}
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Terminals;
