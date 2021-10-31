import { FC, useState } from 'react';

import Sidebar from '../../Components/Sidebar';
import ProfileMainContent from '../../Components/ProfileMainContent';
import activeClass from '../../models/activeClass';

const ProfilePage: FC = () => {
	const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);

	return (
		<section id='profile__page'>
			{/* Sidebar component */}
			<Sidebar
				isSidebarExpanded={isSidebarExpanded}
				active={activeClass.PROFILE}
			/>

			{/* Main Content */}
			<ProfileMainContent
				isSidebarExpanded={isSidebarExpanded}
				setIsSidebarExpanded={setIsSidebarExpanded}
			/>
		</section>
	);
};

export default ProfilePage;
