import { Dispatch, FC, SetStateAction } from 'react';
import InfoIcon from '../../assets/svg/InfoIcon';

import './nocontactmodal.styles.scss';

type NoContactModalProps = {
	setNoContact: Dispatch<SetStateAction<boolean>>;
};

const NoContactModal: FC<NoContactModalProps> = ({ setNoContact }) => {
	return (
		<div className='no__contact__modal'>
			<div className='no__contact__modal__content'>
				<InfoIcon />

				<p>To send an email to this customer, you have to be their manager.</p>

				<button className='understand' onClick={() => setNoContact(false)}>
					I UNDERSTAND AND AGREE
				</button>
			</div>
		</div>
	);
};

export default NoContactModal;
