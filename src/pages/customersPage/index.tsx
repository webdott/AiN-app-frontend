import { FC, useState } from 'react';

import Sidebar from '../../Components/Sidebar';
import CustomersMainContent from '../../Components/CustomersMainContent';
import activeClass from '../../models/activeClass';

const CustomersPage: FC = () => {
	const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);

	return (
		<section id='Customers__page'>
			{/* Sidebar component */}
			<Sidebar
				isSidebarExpanded={isSidebarExpanded}
				active={activeClass.CUSTOMERS}
			/>

			{/* Main Content */}
			<CustomersMainContent
				isSidebarExpanded={isSidebarExpanded}
				setIsSidebarExpanded={setIsSidebarExpanded}
			/>
		</section>
	);
};

export default CustomersPage;
