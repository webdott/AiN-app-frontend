import { Dispatch, FC, SetStateAction, useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import Header from '../Header';
import Footer from '../Footer';
import FeedbackText from '../FeedbackText';
import currentStats from '../../data/currentStatsData';
import CurrentStat from './CurrentStat';
import FunnelChart from './FunnelChart';
import ProductInterestChart from './ProductInterestChart';
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

				<main className='main'>
					<p className='current__stats__text'>Current Stats</p>
					<div className='current__stats'>
						{currentStats.map((currentStat) => (
							<CurrentStat
								key={currentStat.id}
								value={currentStat.statValue}
								name={currentStat.statName}
							/>
						))}
					</div>

					<div className="charts">
						<FunnelChart />
						<ProductInterestChart />
					</div>

					<div className='view__expa__container'>
						<a className='view__expa' href='##'>
							VIEW MORE ANALYTICS ON EXPA
							<HiOutlineArrowNarrowRight />
						</a>
					</div>
				</main>

				<Footer />
			</section>
		</>
	);
};

export default DashboardMainContent;
