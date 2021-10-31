import { FC, useState } from 'react';

import Sidebar from '../../Components/Sidebar';
import NotificationsMainContent from '../../Components/NotificationsMainContent';
import activeClass from '../../models/activeClass';

const NotificationsPage: FC = () => {
	const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);

	return (
		<section id='notifications__page'>
			{/* Sidebar component */}
			<Sidebar
				isSidebarExpanded={isSidebarExpanded}
				active={activeClass.NOTIFICATIONS}
			/>

			{/* Main Content */}
			<NotificationsMainContent
				isSidebarExpanded={isSidebarExpanded}
				setIsSidebarExpanded={setIsSidebarExpanded}
			/>
		</section>
	);
};

export default NotificationsPage;
