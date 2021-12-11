import { FC, useState } from 'react';

import Sidebar from '../../Components/Sidebar';
import CustomerProfileMainContent from '../../Components/CustomerProfileMainContent';
import activeClass from '../../models/activeClass';

const CustomerProfilePage: FC = () => {
	const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);

	return (
		<section id='profile__page'>
			{/* Sidebar component */}
			<Sidebar
				isSidebarExpanded={isSidebarExpanded}
				active={activeClass.CUSTOMERS}
			/>

			{/* Main Content */}
			<CustomerProfileMainContent
				isSidebarExpanded={isSidebarExpanded}
				setIsSidebarExpanded={setIsSidebarExpanded}
			/>
		</section>
	);
};

export default CustomerProfilePage;
