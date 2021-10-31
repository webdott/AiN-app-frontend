import { Dispatch, FC, SetStateAction, useState } from 'react';

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

					<p>Dashboard</p>
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

export default DashboardMainContent;
