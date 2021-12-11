import { Dispatch, FC, SetStateAction, useState } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import FeedbackText from '../FeedbackText';
import './DashboardMainContent.styles.scss';

type DashboardMainContentProps = {
	isSidebarExpanded: boolean;
	setIsSidebarExpanded: Dispatch<SetStateAction<boolean>>;
};

const DashboardMainContent: FC<DashboardMainContentProps> = ({
	isSidebarExpanded,
	setIsSidebarExpanded,
}) => {
	const [message, setMessage] = useState<string>('');

	return (
		<>
			{message && <FeedbackText message={message} />}

			<section id='dashboard__main__content'>
				<Header
					isSidebarExpanded={isSidebarExpanded}
					setIsSidebarExpanded={setIsSidebarExpanded}
					page='Dashboard'
				/>

				<main className='main'></main>

				<Footer />
			</section>
		</>
	);
};

export default DashboardMainContent;
