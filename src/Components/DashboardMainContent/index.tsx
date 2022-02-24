import {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react';
import Dropdown, { Option } from 'react-dropdown';
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

import usePosition from '../../hooks/usePosition';
import Header from '../Header';
import Footer from '../Footer';
import FeedbackText from '../FeedbackText';
import currentStats from '../../data/currentStatsData';
import CurrentStat from './CurrentStat';
import FunnelChart from './FunnelChart';
import ProductInterestChart from './ProductInterestChart';
import { lcOptions } from '../../data/lcOptions';

import 'react-dropdown/style.css';
import './DashboardMainContent.styles.scss';

type DashboardMainContentProps = {
	isSidebarExpanded: boolean;
	setIsSidebarExpanded: Dispatch<SetStateAction<boolean>>;
};

const DashboardMainContent: FC<DashboardMainContentProps> = ({
	isSidebarExpanded,
	setIsSidebarExpanded,
}) => {
	const [selectedLC, setSelectedLC] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const chartsContainerRef = useRef<HTMLDivElement>(null);
	const { hasItemsOnLeft, hasItemsOnRight, scrollLeft, scrollRight } =
		usePosition(chartsContainerRef);

	useEffect(() => {
		const dropdownContainer = document.querySelector('.custom__dropdown');

		if (selectedLC.length === 0) {
			dropdownContainer!.className = 'Dropdown-root custom__dropdown';
		} else {
			dropdownContainer!.className = 'Dropdown-root custom__dropdown select';
		}
	}, [selectedLC]);

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
					<Dropdown
						options={lcOptions}
						placeholder={'Select LC'}
						// value={inputProps.options[0]}
						className={'custom__dropdown'}
						controlClassName='custom__dropdown__control'
						arrowClosed={<FaCaretDown />}
						arrowOpen={<FaCaretUp />}
						onChange={(option: Option) => setSelectedLC(option.value)}
					/>

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

					<div className='charts'>
						<button
							className={`arrow arrow__left ${!hasItemsOnLeft ? 'dnone' : ''}`}
							onClick={scrollLeft}
							aria-label='Previous chart'
						>
							<MdOutlineKeyboardArrowLeft />
						</button>
						<div className='charts__container' ref={chartsContainerRef}>
							<FunnelChart />
							<ProductInterestChart />
						</div>
						<button
							className={`arrow arrow__right ${
								!hasItemsOnRight ? 'dnone' : ''
							}`}
							onClick={scrollRight}
							aria-label='Next chart'
						>
							<MdOutlineKeyboardArrowRight />
						</button>
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
