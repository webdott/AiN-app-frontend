import { Dispatch, FC, SetStateAction, useState } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import NoContactModal from '../NoContactModal';
import FeedbackText from '../FeedbackText';
import GTa from '../../assets/svg/GTa';
import GV from '../../assets/svg/GV';
import './CustomerProfileMainContent.styles.scss';

type CustomerProfileMainContentProps = {
	isSidebarExpanded: boolean;
	setIsSidebarExpanded: Dispatch<SetStateAction<boolean>>;
};

const CustomerProfileMainContent: FC<CustomerProfileMainContentProps> = ({
	isSidebarExpanded,
	setIsSidebarExpanded,
}) => {
	const [message, setMessage] = useState<string>('');
	const [noContact, setNoContact] = useState<boolean>(false);

	return (
		<>
			{message && <FeedbackText message={message} />}

			{noContact && <NoContactModal setNoContact={setNoContact}/>}

			<section id='customer__profile__main__content'>
				<Header
					isSidebarExpanded={isSidebarExpanded}
					setIsSidebarExpanded={setIsSidebarExpanded}
					page={`Customer's Profile`}
				/>

				<main className='main'>
					<div className='profile__container'>
						<div className='profile__image'>
							<img src='/images/Avatar1-big.png' alt="Idowu's avatar" />
						</div>
						<p className='profile__name'>Idowu Fakomi</p>

						<button
							className='contact__customer'
							onClick={() => setNoContact(true)}
						>
							CONTACT CUSTOMER
						</button>

						<div className='managers'>
							<p>Managers:</p>
							<div className='managers__images'>
								<img src='/images/Avatar1-big.png' alt='manager1' />
								<img src='/images/Avatar1-big.png' alt='manager2' />
								<img src='/images/Avatar1-big.png' alt='manager3' />
							</div>
						</div>

						<div className='more__details'>
							<p className='title'>More Details</p>
							<div className='content'>
								<div>
									<p>Entity</p>
									<p>Nigeria</p>
								</div>
								<div>
									<p>Local Committee</p>
									<p>AIESEC in Ife</p>
								</div>
								<div>
									<p>EXPA ID</p>
									<p>123456</p>
								</div>
							</div>
						</div>

						<div className='personal__details'>
							<p className='title'>Personal Details</p>
							<div className='content'>
								<div>
									<p>Full name</p>
									<p className='name' title='Samuel Ogundipe'>
										Samuel Ogundipe
									</p>
								</div>
								<div>
									<p>Email</p>
									<p className='email' title='ogundipesamuel@gmail.com'>
										ogundipesamuel@gmail.com
									</p>
								</div>
								<div>
									<p>Phone number</p>
									<p className='phone' title='+234 816 956 8707'>
										+234 816 956 8707
									</p>
								</div>
								<div>
									<p>Gender</p>
									<p>Nigeria</p>
								</div>
								<div>
									<p>Age</p>
									<p>19</p>
								</div>
								<div>
									<p>Language</p>
									<p>English</p>
								</div>
							</div>
							<div className='view__expa'>
								<a href='##'>View EXPA</a>
							</div>
						</div>
					</div>

					<div className='opportunities__active__status'>
						<div className='opportunities__applied'>
							<div className='title'>
								<p>Opportunities</p>
							</div>

							<div className='opportunities'>
								<div className='opportunity'>
									<div className='opportunity__header'>
										<div>
											<div className='icon'>
												<GTa />
											</div>
											<p className='opportunity__title'>English Teacher</p>
											<p className='opportunity__location'>Benin</p>
										</div>
										<div>
											<div className='status'>Applied</div>
										</div>
									</div>

									<p className='opportunity__details'>
										Peak Memorial Benin. Lorem ipsum dolor sit amet, consectetur
										adipiscing
									</p>
								</div>

								<div className='opportunity'>
									<div className='opportunity__header'>
										<div>
											<div className='icon'>
												<GV />
											</div>
											<p className='opportunity__title'>English Teacher</p>
											<p className='opportunity__location'>Benin</p>
										</div>
										<div>
											<div className='status'>Completed</div>
										</div>
									</div>

									<p className='opportunity__details'>
										Peak Memorial Benin. Lorem ipsum dolor sit amet, consectetur
										adipiscing
									</p>
								</div>
							</div>
						</div>

						<div className='signed__last__active'>
							<div className='signed'>
								<p>Signed up on</p>
								<p>12th October, 2021</p>
							</div>
							<div className='last__active'>
								<p>last active</p>
								<p>3rd December, 2021</p>
							</div>
						</div>
					</div>
				</main>

				<Footer />
			</section>
		</>
	);
};

export default CustomerProfileMainContent;
