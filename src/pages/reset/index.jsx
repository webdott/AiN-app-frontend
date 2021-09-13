import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import ArrowDown from "../../assets/svg/ArrowDown";

import "./reset.styles.scss";

/*
    This is the reset page. UI and functionalities would be added here
*/

const Reset = () => {
	/* Component state */
	const [buttonActive, setButtonActive] = useState(false);
	const { register, watch } = useForm();

    // watch for when the email's value changes
	const watchEmail = watch("email");

	useEffect(() => {
        // disable or enable submit button based on email length
		if (watchEmail?.length > 0) {
			setButtonActive(true);
		} else {
			setButtonActive(false);
		}
	}, [watchEmail]);

	return (
		<section id="reset">
			<div className="reset__container">
				<h1 className="reset__title">Reset pasword</h1>
				<h3 className="follow__up__text">
					New password would only be sent to a verified “aiesec.net” mail.
				</h3>
				<div className="arrow__down">
					<ArrowDown />
				</div>
				<form action="" className="reset__form">
					<div className="form__group">
						<label>AIESEC Mail</label>
						<input
							type="email"
							placeholder="enter your email"
							{...register("email", {
								required: true,
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: "Email field requires an “aiesec.net” mail",
								},
							})}
							required
						/>
						<p className="error_username"></p>
						<p className="error_username"></p>
					</div>

					<button className="submit__button" disabled={!buttonActive}>
						RESET PASSWORD
					</button>

					<div className="reset__password__link">
						<p className="forgot__password">
							Remember password? &nbsp;
							<Link to="/signin">Log in</Link>
						</p>
					</div>
				</form>

				<p className="copyright__text">© Copyright AiN 2021.</p>
			</div>
		</section>
	);
};

export default Reset;
