import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import ArrowDown from '../../assets/svg/ArrowDown';

import './login.styles.scss';

/*
    This is the login page. UI and functionalities would be added here
*/

enum focusType {
	Add = 'ADD',
	Remove = 'REMOVE',
}

type FormValues = {
	email: string;
	password: string;
};

const Login = (): JSX.Element => {
	/* Component state */
	const [passwordType, setPasswordType] = useState<string>('password');
	const [buttonActive, setButtonActive] = useState<boolean>(false);
	const passwordDiv = useRef<HTMLDivElement>(null);
	const { register, watch } = useForm<FormValues>();

	// watch for when the email and password values change
	const watchFields: string[] = watch(['email', 'password']);

	const focusHandler = (type: focusType) => {
		if (type === focusType.Add) {
			passwordDiv.current!.classList.add('focus');
		} else if (type === focusType.Remove) {
			passwordDiv.current!.classList.remove('focus');
		} else {
			return;
		}
	};

	useEffect(() => {
		// disable or enable submit button based on email and password value length
		if (watchFields[0]?.length && watchFields[1]?.length) {
			setButtonActive(true);
		} else {
			setButtonActive(false);
		}
	}, [watchFields]);

	return (
		<section id='login'>
			<div className='login__container'>
				<h1 className='get__started'>Get Started</h1>
				<h3 className='follow__up__text'>
					Finally !!! All customer supports issues can come to an end...
				</h3>
				<div className='arrow__down'>
					<ArrowDown />
				</div>
				<form action='' className='login__form'>
					<div className='form__group'>
						<label>AIESEC Mail</label>
						<input
							type='email'
							placeholder='enter your email'
							{...register('email', {
								required: true,
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: 'Email field requires an “aiesec.net” mail',
								},
							})}
							required
						/>
						<p className='error_username'></p>
						<p className='error_username'></p>
					</div>
					<div className='form__group'>
						<label>Password</label>
						<div className='password__eye__div' ref={passwordDiv}>
							<input
								type={passwordType}
								placeholder='enter password'
								{...register('password', {
									required: true,
									pattern: {
										value:
										/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
										message:
										'Password should be at least 8 characters, 1 uppercase letter, 1 lowercase leter, 1 number & 1 Symbol',
									},
								})}
								onFocus={() => focusHandler(focusType.Add)}
								onBlur={() => focusHandler(focusType.Remove)}
								required
							/>
							<span
								className={
									passwordType === 'password' ? 'eye__slash' : 'eye__slash none'
								}
								onClick={() => setPasswordType('text')}
							>
								<AiFillEyeInvisible />
							</span>
							<span
								className={passwordType === 'text' ? 'eye' : 'eye none'}
								onClick={() => setPasswordType('password')}
							>
								<AiFillEye />
							</span>
						</div>
					</div>

					<button className='submit__button' disabled={!buttonActive}>
						LOG IN
					</button>

					<div className='reset__password__link'>
						<p className='forgot__password'>
							Forgot password? &nbsp;
							<Link to='/reset'>Reset password</Link>
						</p>
					</div>

					<p className='copyright__text__mobile'>© Copyright AiN 2021.</p>
				</form>

				<p className='copyright__text'>© Copyright AiN 2021.</p>
			</div>
		</section>
	);
};

export default Login;
