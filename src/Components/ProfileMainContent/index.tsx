import { Dispatch, FC, SetStateAction, useState } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import FeedbackText from '../FeedbackText';
import AiesecMan from '../../assets/svg/AiesecMan';
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
				<Header
					isSidebarExpanded={isSidebarExpanded}
					setIsSidebarExpanded={setIsSidebarExpanded}
					page='Profile'
				/>

				<main className='main'>
					<div className='profile__image'>
						<img src='/images/Avatar1-big.png' alt="Idowu's avatar" />
					</div>
					<p className='profile__name'>Idowu Fakomi</p>

					<div className='profile__details'>
						<p className='title'>Personal Details</p>
						<div className='content'>
							<div>
								<p>Email</p>
								<p className='email' title='idowu.fakomi@aiesec.net'>
									idowu.fakomi@aiesec.net
								</p>
							</div>
							<div>
								<p>Local Committee</p>
								<p>Nigeria</p>
							</div>
							<div>
								<p>EXPA ID</p>
								<p>123456</p>
							</div>
						</div>
					</div>

					<div className='profile__active__roles'>
						<p className='title'>Active Roles</p>
						<div className='content'>
							<div className='role__body'>
								<div>
									<AiesecMan />
									<p>Team member</p>
								</div>
								<p className='team'>Membership Experience</p>
							</div>
							<div className='role__body'>
								<div>
									<AiesecMan />
									<p>Customer support</p>
								</div>
								<p className='team'>B2C, AiN</p>
							</div>
						</div>
					</div>

					<div className='last__active'>
						<p>last active</p>
						<p>12th October, 2021</p>
					</div>
				</main>

				<Footer />
			</section>
		</>
	);
};

export default ProfileMainContent;
