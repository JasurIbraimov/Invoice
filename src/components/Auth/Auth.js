import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Error from '../Error';
import Loader from '../Loader';
import { getUserByApi } from '../../redux/thunks/auth-thunks';
import './Auth.scss';
const Auth = () => {
	const isFailed = useSelector((state) => state.auth.isFailed);
	const isFetching = useSelector((state) => state.auth.isFetching);
	const dispatch = useDispatch();
	const [visibleMode, setVisibleMode] = useState(false);
	const [password, setPassword] = useState('');
	const [login, setLogin] = useState('');
	const [loginRequired, setLoginRequired] = useState(false);
	const [passwordRequired, setPasswordRequired] = useState(false);
	const [validate, setValidate] = useState(false);
	const onFormSubmit = (e) => {
		e.preventDefault();
		if (!login.length) {
			setLoginRequired(true);
		}
		if (!password.length) {
			setPasswordRequired(true);
		}
		if (
			!password.match(/[A-Z]/g) ||
			!password.match(/[0-9]/g) ||
			password.length + 1 <= 8
		) {
			setValidate(true);
		} else {
			dispatch(getUserByApi(login));
		}
	};
	const onLoginChange = (e) => {
		setLoginRequired(false);
		setLogin(e.target.value);
	};
	const onLoginBlur = (e) => {
		if (!e.target.value) {
			setLoginRequired(true);
		}
	};
	const onPasswordChange = (e) => {
		setValidate(false);
		setPasswordRequired(false);
		setPassword(e.target.value);
	};
	const onPasswordBlur = (e) => {
		const value = e.target.value;
		if (!value) {
			setPasswordRequired(true);
		}
	};

	return (
		<div className='auth'>
			<form className='auth__form' onSubmit={(e) => onFormSubmit(e)}>
				<h1 className='auth__title'>Вход</h1>
				<div className='auth__form-item'>
					<label className='auth__label'>Логин</label>
					<input
						onBlur={(e) => onLoginBlur(e)}
						onChange={(e) => onLoginChange(e)}
						className={
							loginRequired ? 'auth__input auth__input_required' : 'auth__input'
						}
						type='text'
						value={login}
						placeholder='Введите логин'
						name='login'
					/>
					{loginRequired ? (
						<span className='auth__required'>Это обязательное поле!</span>
					) : null}
				</div>
				<div className='auth__form-item'>
					<label className='auth__label'>Пароль</label>
					<input
						onBlur={(e) => onPasswordBlur(e)}
						onChange={(e) => onPasswordChange(e)}
						value={password}
						className={
							passwordRequired || validate
								? 'auth__input auth__input_required'
								: 'auth__input'
						}
						type={visibleMode ? 'text' : 'password'}
						placeholder='Введите пароль'
						name='password'
					/>
					{visibleMode ? (
						<span className='auth__icon' onClick={() => setVisibleMode(false)}>
							<FontAwesomeIcon icon={faEye} />
						</span>
					) : (
						<span
							className='auth__icon auth__icon_slash'
							onClick={() => setVisibleMode(true)}
						>
							<FontAwesomeIcon icon={faEyeSlash} />
						</span>
					)}
					{passwordRequired ? (
						<span className='auth__required'>Это обязательное поле!</span>
					) : null}
					{validate && !passwordRequired ? (
						<span className='auth__required'>Пароль не совпадает!</span>
					) : null}
				</div>
				<button disabled={isFetching} className='auth__btn'>
					{isFetching ? <Loader /> : 'Войти'}
				</button>
			</form>
			{isFailed ? (
				<div className='auth__error'>
					<Error label='Ошибка 404, пользователь не  найден!' />{' '}
				</div>
			) : null}
		</div>
	);
};

export default Auth;
