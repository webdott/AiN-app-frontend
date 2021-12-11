import { FC } from 'react';
import { Link } from 'react-router-dom';
import CustomerDetails from '../../../models/customerInterface';

import './customer.styles.scss';

interface CustomerProps {
	customer: CustomerDetails;
}

const Customer: FC<CustomerProps> = ({ customer }) => {
	const customerFirstLastName = customer.customerName.split(' ');
	const initials = `${customerFirstLastName[0][0]}${customerFirstLastName[1][0]}`;

	return (
		<div className='customer'>
			{!!customer.profileImgUrl ? (
				<Link to='##'>
					<img
						src={customer.profileImgUrl}
						alt={customer.customerName}
						className='customer__img'
					/>
				</Link>
			) : (
				<div className='profile__img__thumbnail'>{initials}</div>
			)}

			<div className='customer__details'>
				<div className='name__id'>
					<Link to='##' className='customer__name'>
						{customer.customerName}
					</Link>
					<p className='customer__id'>{customer.customerId}</p>
				</div>
				<div className='applications__date'>
					<p
						className={`customer__application__status ${
							customer.newApplication ? 'new__application' : ''
						}`}
					>
						{customer.noOfApplications === 0
							? 'No application yet'
							: `${customer.noOfApplications} ${
									customer.newApplication ? 'new' : ''
							  } application${customer.noOfApplications !== 1 ? 's' : ''}`}
					</p>
					{customer.customerSupport ? (
						<div className='customer__support'>
							<p>{customer.customerSupport}</p>
							{customer.customerSupportImage && (
								<img
									src={customer.customerSupportImage}
									alt={customer.customerSupport}
								/>
							)}
						</div>
					) : (
						<p className='signed__up__date'>
							{`${
								customer.signupDate ? `Signed up on ${customer.signupDate}` : ''
							}`}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Customer;
