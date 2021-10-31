import { Dispatch, FC, SetStateAction, useState } from 'react';

import FeedbackText from '../FeedbackText';
import Notification from './Notification';
import notificationData from '../../data/notificationData';
import './NotificationsMainContent.styles.scss';

type NotificationsMainContentProps = {
	isSidebarExpanded: boolean;
	setIsSidebarExpanded: Dispatch<SetStateAction<boolean>>;
};

const NotificationsMainContent: FC<NotificationsMainContentProps> = ({
	isSidebarExpanded,
	setIsSidebarExpanded,
}) => {
	const [message, setMessage] = useState<string>('');

	return (
		<>
			{message && <FeedbackText message={message} />}

			<section id='notifications__main__content'>
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

					<p>Notifications</p>
				</header>

				<main className='main'>
					<div className="notifications">
						{notificationData.map(notification => (
							<Notification 
								key={notification.id}
								name={notification.name}
								title={notification.title}
								message={notification.message}
							/>
						))}
					</div>
				</main>

				<footer className='footer'>
					<div className='AIESEC__logo' title='AIESEC in Nigeria'>
						<img src='/images/AIESECLOGO.png' alt="AIESEC in Nigeria's logo" />
					</div>
				</footer>
			</section>
		</>
	);
};

export default NotificationsMainContent;
