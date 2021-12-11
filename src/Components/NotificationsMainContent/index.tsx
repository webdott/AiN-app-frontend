import { Dispatch, FC, SetStateAction, useState } from 'react';

import Header from '../Header';
import Footer from '../Footer';
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
				<Header
					isSidebarExpanded={isSidebarExpanded}
					setIsSidebarExpanded={setIsSidebarExpanded}
					page='Notifications'
				/>

				<main className='main'>
					<div className='notifications'>
						{notificationData.map((notification) => (
							<Notification
								key={notification.id}
								name={notification.name}
								title={notification.title}
								message={notification.message}
							/>
						))}
					</div>
				</main>

				<Footer />
			</section>
		</>
	);
};

export default NotificationsMainContent;
