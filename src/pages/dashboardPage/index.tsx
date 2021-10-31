import { FC, useState } from 'react';

import Sidebar from '../../Components/Sidebar';
import DashboardMainContent from '../../Components/DashboardMainContent';
import activeClass from '../../models/activeClass';

const DashboardPage: FC = () => {
	const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);

	return (
		<section id='dashboard__page'>
			{/* Sidebar component */}
			<Sidebar
				isSidebarExpanded={isSidebarExpanded}
				active={activeClass.DASHBOARD}
			/>

			{/* Main Content */}
			<DashboardMainContent
				isSidebarExpanded={isSidebarExpanded}
				setIsSidebarExpanded={setIsSidebarExpanded}
			/>
		</section>
	);
};

export default DashboardPage;
