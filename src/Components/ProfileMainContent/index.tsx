import { Dispatch, FC, SetStateAction, useState } from 'react';

import FeedbackText from '../FeedbackText';
import './ProfileMainContent.styles.scss';

type ProfileMainContentProps = {
	isSidebarExpanded: boolean;
	setIsSidebarExpanded: Dispatch<SetStateAction<boolean>>;
};

const ProfileMainContent: FC<ProfileMainContentProps> = ({
	isSidebarExpanded,
	setIsSidebarExpanded,
}) => {
	const [message, setMessage] = useState<string>('');

	return (
		<>
			{message && <FeedbackText message={message} />}

			<section id='profile__main__content'>
				<header className='header'>
					<button
						className='hamburger'
						onClick={() =>
							setIsSidebarExpanded((isSidebarExpanded) => !isSidebarExpanded)
						}
					>
						<div id='nav-icon1' className={isSidebarExpanded ? 'open' : ''}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</button>

					<button className={isSidebarExpanded ? 'closed__button' : ''}>
						+ Upload CSV/XLS
					</button>
				</header>

				<main className='main'></main>

				<footer className='footer'>
					<div className='AIESEC__logo' title='AIESEC in Nigeria'>
						<img src='/images/AIESECLOGO.png' alt="AIESEC in Nigeria's logo" />
					</div>
				</footer>
			</section>
		</>
	);
};

export default ProfileMainContent;
