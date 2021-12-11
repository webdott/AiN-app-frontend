import { Dispatch, FC, SetStateAction, useState } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import FeedbackText from '../FeedbackText';
import SearchFilter from '../SearchFilter';
import Customer from './Customer';
import customerList from '../../data/customerListData';
import './CustomersMainContent.styles.scss';

type CustomersMainContentProps = {
	isSidebarExpanded: boolean;
	setIsSidebarExpanded: Dispatch<SetStateAction<boolean>>;
};

const CustomersMainContent: FC<CustomersMainContentProps> = ({
	isSidebarExpanded,
	setIsSidebarExpanded,
}) => {
	const [message, setMessage] = useState<string>('');

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
					<SearchFilter />

					<div className='customer__list'>
						{customerList.map(customer => (
							<Customer 
								key={customer.customerId}
								customer={customer}
							/>
						))}
					</div>
				</main>

				<Footer />
			</section>
		</>
	);
};

export default CustomersMainContent;
