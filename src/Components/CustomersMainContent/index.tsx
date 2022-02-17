import { Dispatch, FC, SetStateAction, useState } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import FilterTab from '../FilterTab';
import FeedbackText from '../FeedbackText';
import SearchFilter from '../SearchFilter';
import Customer from './Customer';
import customerList from '../../data/customerListData';
import './CustomersMainContent.styles.scss';
import useCalendar from '../../hooks/useCalendar';
import Calendar from '../Calendar';

type CustomersMainContentProps = {
	isSidebarExpanded: boolean;
	setIsSidebarExpanded: Dispatch<SetStateAction<boolean>>;
};

const CustomersMainContent: FC<CustomersMainContentProps> = ({
	isSidebarExpanded,
	setIsSidebarExpanded,
}) => {
	const [message, setMessage] = useState<string>('');
	const [isFilterTabOpen, setIsFilterTabOpen] = useState<boolean>(false);
	const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
	const { startDate } = useCalendar();

	return (
		<>
			{message && <FeedbackText message={message} />}

			<section id='customers__main__content'>
				<Header
					isSidebarExpanded={isSidebarExpanded}
					setIsSidebarExpanded={setIsSidebarExpanded}
					page='Customers'
				/>

				<main className='main'>
					<SearchFilter open={isFilterTabOpen} openFunc={setIsFilterTabOpen} />

					<div className='customer__list'>
						{customerList.map((customer) => (
							<Customer key={customer.customerId} customer={customer} />
						))}
					</div>
				</main>

				<Footer />
			</section>

			<FilterTab open={isFilterTabOpen} closeFunc={setIsFilterTabOpen} openCalendar={setIsCalendarOpen}/>

			{isCalendarOpen && <Calendar closeCalendar={setIsCalendarOpen}/>}
		</>
	);
};

export default CustomersMainContent;
